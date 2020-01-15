import React from 'react';
import { RouteComponentProps, Redirect, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Sidebar, { SidebarBackButton, SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import AddMemoBtn from "../../components/AddMenuBtn";
import { Memo } from "../../models";
import MemoRouter from "../../routes/memo";
import { fetchMemoList } from "../../api";
import { List, ListItem } from "../../components/List";

interface IMemoPageState 
{
    memos: Memo[];
}
  
class MemoPage extends React.Component<RouteComponentProps, IMemoPageState>
{
    constructor(props: RouteComponentProps) 
    {
        super(props);

        this.state = {
            memos: []
        };
    }

    public componentDidMount()
    {
        this.fetchData();
    }

    public componentWillReceiveProps(nextProps: RouteComponentProps)
    {
        const urlChanged = nextProps.location.pathname !== this.props.location.pathname;

        if (urlChanged)
            this.fetchData();
    }

    private fetchData()
    {
        const memos: Memo[] = fetchMemoList();
        this.setState({ memos });
    }

    public render(): JSX.Element 
    {
        const { match, location } = this.props;
        const { memos } = this.state;
        const hasMemos = memos.length > 0;

        // console.log(this.props);
        // 메모를 가지고 있다면 가장 최근 메모를 보여준다.
        if (match.isExact && hasMemos)
            return <Redirect to={`${match.url}/${memos[0].id}`} />
      
        return (
            <Layout>
                <Sidebar>
                    <SidebarBackButton to="/" />
                    <SidebarTitle>메모</SidebarTitle>
                    {hasMemos && this.renderMemoList(memos)}
                </Sidebar>
                
                <Main>
                    <div style={{ margin: '10px' }}>
                        {location.pathname !== `${match.url}/add` && <AddMemoBtn />}
                        <MemoRouter />
                    </div>
                </Main>
            </Layout>
        );        
    } 

    private renderMemoList(memos: Memo[]): JSX.Element
    {
        return (
            <List>
                {memos.map((memo, idx) => 
                    <ListItem key={idx} first={idx === 0}>
                    <Link to={`/memo/${memo.id}`}>
                        {this.memoTitle(memo.content)}
                    </Link>
                    </ListItem>
                )}
            </List>
          )        
    }

    private memoTitle(content: string): string
    {
        return content.substr(0, 15);
    }
}

export default MemoPage;
