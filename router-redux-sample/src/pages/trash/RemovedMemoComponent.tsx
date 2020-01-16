import React from 'react';
import { Memo } from "../../models/memo";
import { RouteComponentProps, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import DateString from "../../components/DateString";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootReducerState } from "../../reducers";
import * as api from "../../api";
import { resotreMemo } from "../actions/memo";

interface IMatchParams
{
    id: string;
}

interface IRemovedMemoComponentProps
{
    memos: Memo[];
}

interface IRemovedMemoComponentState
{
    restored: boolean;
}

class RemovedMemoComponent extends React.Component<IRemovedMemoComponentProps & RouteComponentProps<IMatchParams>, IRemovedMemoComponentState>
{
    constructor(props: IRemovedMemoComponentProps & RouteComponentProps<IMatchParams>)
    {
        super(props);

        this.state = 
        {
            restored: false
        };
    }

    public render(): JSX.Element
    {
        const {match, memos} = this.props;
        const memoId = parseInt(match.params.id);        
        const memo = memos.find(memo => memo.id === memoId);

        const { restored } = this.state;

        if (restored || !memo)
            return <Redirect to={`/trash`} />;

        return (
            <>
                <Button onClick={this.onRestore.bind(this)}>복구</Button>
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                    <div style={{ marginBottom: '15px' }}>
                        {memo.createdAt && <DateString timestamp={memo.createdAt} />}
                    </div>
                    <div>{memo.content}</div>
                </div>
            </>
        )
    }

    private onRestore(): void
    {
        const {match} = this.props;
        const id = parseInt(match.params.id);


        // TODO: 서버에 복구 요청
        api.apiResotreMemo(id);

        // store에서 복구
        resotreMemo(id);

        this.setState({
            restored: true
        });
    }
}

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        memos: state.memoReducer.deletedMemos
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        resotreMemo: (id: number) => dispatch(resotreMemo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemovedMemoComponent);