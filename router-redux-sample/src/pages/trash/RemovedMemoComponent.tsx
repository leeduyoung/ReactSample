import React from 'react';
import { Memo } from "../../models";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { fetchMemo, resotreMemo } from "../../api";
import Button from "../../components/Button";
import DateString from "../../components/DateString";

interface IMatchParams
{
    id: string;
}

interface IRemovedMemoComponentState
{
    memo?: Memo;
    restored: boolean;
}

class RemovedMemoComponent extends React.Component<RouteComponentProps<IMatchParams>, IRemovedMemoComponentState>
{
    constructor(props: RouteComponentProps<IMatchParams>)
    {
        super(props);

        this.state = 
        {
            memo: undefined,
            restored: false
        };
    }

    public componentDidMount(): void
    {
        const {match} = this.props;
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

    public fetchData(id: string): void
    {
        const memoId = parseInt(id);
        const memo = fetchMemo(memoId);
        this.setState({
            memo
        });
    }

    public render(): JSX.Element
    {
        const { memo, restored: resotred } = this.state;

        if (!memo)
            return <div>loading..</div>;

        console.log('resotred: ', resotred);

        if (resotred)
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
        resotreMemo(id);

        this.setState({
            restored: true
        });
    }
}

export default RemovedMemoComponent;