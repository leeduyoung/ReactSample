import React from 'react';
import { RouteComponentProps, Redirect } from "react-router-dom";
import { Memo } from "../../models";
import { fetchMemo, deleteMemo } from "../../api";
import DateString from "../../components/DateString";
import Button from "../../components/Button";

interface IMatchParams
{
    id: string;
}

interface IMemoComponentState
{
    memo?: Memo;
    deleted: boolean;
}

class MemoComponent extends React.Component<RouteComponentProps<IMatchParams>, IMemoComponentState>
{
    constructor(props: RouteComponentProps<IMatchParams>)
    {
        super(props);

        this.state =
        {
            memo: undefined,
            deleted: false
        };
    }    

    public componentDidMount()
    {
        const { match } = this.props;
        this.fetchData(match.params.id);
    }

    public componentWillReceiveProps(nextProps: RouteComponentProps<IMatchParams>)
    {
        const { match } = this.props;
        const id = nextProps.match.params.id;
        const urlChanged = id !== match.params.id;

        if (urlChanged)
            this.fetchData(id);
    }    

    public render(): JSX.Element
    {
        const { memo, deleted } = this.state;

        if (!memo)
            return <div>loading..</div>;

        if (deleted)
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

    private fetchData(id: string): void
    {
        const memoId = parseInt(id);
        const memo = fetchMemo(memoId);
        this.setState({
            memo
        });
    }

    private onDelete(): void
    {
        const { match } = this.props;
        const memoId = parseInt(match.params.id);
        deleteMemo(memoId);

        this.setState({
            deleted: true
        });
    }
}

export default MemoComponent;