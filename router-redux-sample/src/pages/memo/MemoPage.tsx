import React from 'react';
import { RouteComponentProps, Redirect, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Sidebar, { SidebarBackButton, SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import AddMemoBtn from "../../components/AddMenuBtn";
import { Memo } from "../../models/memo";
import MemoRouter from "../../routes/memo";
import * as api from "../../api";
import { List, ListItem } from "../../components/List";
import { connect } from "react-redux";
import { IRootReducerState } from "../../reducers";
import { fetchMemoList } from "../actions/memo";
import { Dispatch } from "redux";
import { IFetchMemoListAction } from "../actions/memo";


interface IMemoPageProps 
{
    memos: Memo[];
    fetchMemoList(memos: Memo[]): IFetchMemoListAction;
}
  
class MemoPage extends React.Component<IMemoPageProps & RouteComponentProps>
{
    constructor(props: IMemoPageProps & RouteComponentProps) 
    {
        super(props);
    }

    public componentDidMount()
    {
        const { fetchMemoList } = this.props;
        
        // TODO: 서버에서 정보 받아오기
        /**
         * HomePage에서 가져왔음에도 불구하고 또 서버에서 데이터를 가져오는 이유는
         * 웹 서비스의 특성상 리프레쉬하는 경우도 있기 떄문이다. (?)
         */
        const memos = api.apiFetchMemoList();

        // store에 데이터 담기
        fetchMemoList(memos);
    }

    public render(): JSX.Element 
    {
        // console.log('MemoPage props: ', this.props);
        
        const { match, location } = this.props;
        const { memos } = this.props;
        const hasMemos = memos.length > 0;

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

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        memos: state.memoReducer.memos
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        fetchMemoList: (memos: Memo[]) => dispatch(fetchMemoList(memos))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoPage);
