import React from 'react';
import Button from '../../components/Button';
import { Redirect } from "react-router-dom";
import { Memo } from "../../models/memo";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addMemo, IAddMemoAction } from "../actions/memo";
import * as api from "../../api";

interface INewMemoComponentProps
{
    addMemo(memo: Memo): IAddMemoAction;
}

interface INewMemoComponentState 
{
    value: string;
    saved: boolean;
}

class NewMemoComponent extends React.Component<INewMemoComponentProps, INewMemoComponentState>
{
    constructor(props: INewMemoComponentProps)
    {
        super(props);

        this.state = 
        {
            value: '',
            saved: false
        };  
    }

    public render(): JSX.Element
    {
        const {value, saved} = this.state;

        if (saved)
            return <Redirect to={`/memo`} />;

        return (
            <>
                <form>
                    <textarea 
                        style={{
                            width: '97%',
                            height: '100px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            padding: '10px',
                        }}
                        placeholder="여기에 메모를 입력하세요" 
                        onChange={this.onHandleChange.bind(this)}
                        value={value} />
                </form>
                <Button to="/memo">취소</Button>
                <Button onClick={this.onHandleClickSave.bind(this)}>저장</Button>            
            </>
        )
    }

    private onHandleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void
    {
        const {value} = event.target;
        this.setState({ value });
    }

    private onHandleClickSave(): void
    {
        const {value} = this.state;
        const content = value.trim();
        if (!content)   
            return;

        // TODO: 서버에 추가 요청
        const newMemo = api.apiAddMemo({content});
        
        // store에 추가
        this.props.addMemo(newMemo);

        this.redirectToMemo();
    }

    private redirectToMemo()
    {
        this.setState({
            saved: true
        });
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        addMemo: (memo: Memo) => dispatch(addMemo(memo))
    };
};

export default connect(null, mapDispatchToProps)(NewMemoComponent);