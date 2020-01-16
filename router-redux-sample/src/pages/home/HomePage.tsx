import React from 'react';
import Layout from "../../components/Layout";
import Sidebar, { SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import AddMemoBtn from "../../components/AddMenuBtn";
import { fetchMemoList, IFetchMemoListAction, IFetchDeletedMemoListAction, fetchDeletedMemoList } from "../actions/memo";
import { Memo } from "../../models/memo";
import * as api from "../../api";
import { IRootReducerState } from "../../reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IHomePageProps
{
    memos: Memo[];
    deletedMemos: Memo[];
    fetchMemoList: (memo: Memo[]) => IFetchMemoListAction;
    fetchDeletedMemoList: (memo: Memo[]) => IFetchDeletedMemoListAction;
}

class HomePage extends React.Component<IHomePageProps>
{
    public componentDidMount()
    {
        const { fetchMemoList, fetchDeletedMemoList } = this.props;
        
        // TODO: 서버에서 정보 받아오기
        const memos = api.apiFetchMemoList();
        const deletedMemos = api.apiFetchDeletedMemoList();

        // store에 데이터 담기
        fetchMemoList(memos);
        fetchDeletedMemoList(deletedMemos);
    }

    public render(): JSX.Element 
    {
        console.log('HomePage props: ', this.props);

        return (
            <Layout>
                <Sidebar>
                    <SidebarTitle>
                        폴더
                    </SidebarTitle>

                    {/* 메뉴 목록 */}
                    <List>
                        <ListItem>
                            <Link to="/memo">메모</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/trash">휴지통</Link>
                        </ListItem>
                    </List>
                </Sidebar>

                <Main>
                    {/* 메뉴 생성 버튼 */}
                    <div style={{ margin: '10px' }}><AddMemoBtn /></div>
                </Main>
            </Layout>
        );        
    } 
}

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        memos: state.memoReducer.memos,
        deletedMemos: state.memoReducer.deletedMemos
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        fetchMemoList: (memo: Memo[]) => dispatch(fetchMemoList(memo)),
        fetchDeletedMemoList: (memo: Memo[]) => dispatch(fetchDeletedMemoList(memo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
