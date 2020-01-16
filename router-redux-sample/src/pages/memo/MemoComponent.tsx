import React, { memo } from 'react';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { Memo } from "../../models/memo";
import DateString from "../../components/DateString";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { IRootReducerState } from "../../reducers";
import { Dispatch } from "redux";
import * as api from "../../api";
import { fetchMemo, IFetchMemoAction, deleteMemo, IDeleteMemoAction } from "../actions/memo";

interface IMatchParams
{
    id: string;
}

interface IMemoComponentProps
{
    memos: Memo[];
    fetchMemo(memo: Memo): IFetchMemoAction;
    deleteMemo(id: number): IDeleteMemoAction;
}

interface IMemoComponentState
{
    isMemoDeleted: boolean;
}

class MemoComponent extends React.Component<IMemoComponentProps & RouteComponentProps<IMatchParams>, IMemoComponentState>
{
    constructor(props: IMemoComponentProps & RouteComponentProps<IMatchParams>)
    {
        super(props);

        this.state =
        {
            isMemoDeleted: false
        };
    }

    public render(): JSX.Element
    {
        // console.log('MemoComponent this.props: ', this.props);

        const {match, memos} = this.props;
        const memoId = parseInt(match.params.id);        
        const memo = memos.find(memo => memo.id === memoId);

        if (this.state.isMemoDeleted || !memo)
            return <Redirect to={`/memo`} />;

        return (
            <>
                <Button onClick={this.onDelete.bind(this)}>삭제</Button>
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>

                    <div style={{ marginBottom: '15px'}}>
                        {memo.createdAt && <DateString timestamp={memo.createdAt} />}
                    </div>

                    <div>{memo.content}</div>
                </div>
            </>
        )
    }

    private onDelete(): void
    {
        const { match, deleteMemo } = this.props;
        const memoId = parseInt(match.params.id);

        // TODO: 서버에 삭제 요청
        api.apiDeleteMemo(memoId);

        // store에서 삭제
        deleteMemo(memoId);

        this.setState({
            isMemoDeleted: true
        });
    }
}

const mapStateToProps = (state: IRootReducerState, props: RouteComponentProps<IMatchParams>) =>
{
    return {
        memos: state.memoReducer.memos
    }
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        fetchMemo: (memo: Memo) => dispatch(fetchMemo(memo)),
        deleteMemo: (id: number) => dispatch(deleteMemo(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MemoComponent);