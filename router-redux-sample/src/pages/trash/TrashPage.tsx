import React from 'react';
import Layout from "../../components/Layout";
import { RouteComponentProps, Redirect, Link } from "react-router-dom";
import { fetchDeletedMemoList } from "../../api";
import Sidebar, { SidebarBackButton, SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import TrashRouter from "../../routes/trash/index";
import { Memo } from "../../models";
import { List, ListItem } from "../../components/List";

interface TrashPageIState
{
    memos: Memo[];
}

class TrashPage extends React.Component<RouteComponentProps, TrashPageIState>
{
    constructor(props: RouteComponentProps)
    {
        super(props);

        this.state = 
        {
            memos: []
        };
    }

    public componentDidMount(): void
    {
        this.fetchData();
    }

    public fetchData(): void
    {
        const memos = fetchDeletedMemoList();
        this.setState({ memos });
    }

    public componentWillReceiveProps(nextProps: RouteComponentProps)
    {
        const urlChanged = nextProps.location.pathname !== this.props.location.pathname;

        if (urlChanged)
            this.fetchData();
    }        

    public render(): JSX.Element 
    {
        const { match } = this.props;
        const { memos } = this.state;
        const hasMemos = memos.length > 0;

        if (match.isExact && hasMemos)
            return <Redirect to={`${match.url}/${memos[0].id}`} />;

        return (
            <Layout>
                <Sidebar>
                    <SidebarBackButton to="/" />
                    <SidebarTitle>휴지통</SidebarTitle>
                    {hasMemos && this.renderMemoList(memos)}
                </Sidebar>

                <Main>
                    <div style={{ margin: '10px' }}>
                        <TrashRouter />
                    </div>
                </Main>
            </Layout>
        );        
    } 

    private renderMemoList(memos: Memo[]): JSX.Element
    {
        return (
            <List>
            {memos.map((memo: Memo, index: number) => 
            {
                return (
                    <ListItem key={index} first={index === 0}>
                        <Link to={`/trash/${memo.id}`}>
                            {this.memoTitle(memo.content)}
                        </Link>
                    </ListItem>
                )
            })}
            </List>
        )
    }

    private memoTitle(content: string): string 
    {
        return content.substr(0, 15);
    }
}

export default TrashPage;
