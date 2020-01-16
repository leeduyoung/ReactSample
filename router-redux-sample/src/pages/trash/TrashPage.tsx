import React from 'react';
import Layout from "../../components/Layout";
import { RouteComponentProps, Redirect, Link } from "react-router-dom";
import Sidebar, { SidebarBackButton, SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import TrashRouter from "../../routes/trash/index";
import { Memo } from "../../models/memo";
import { List, ListItem } from "../../components/List";
import * as api from "../../api";
import { connect } from "react-redux";
import { IRootReducerState } from "../../reducers";
import { Dispatch } from "redux";
import { fetchDeletedMemoList } from "../actions/memo";

interface ITrashPageProps
{
    memos: Memo[];
}

class TrashPage extends React.Component<ITrashPageProps & RouteComponentProps>
{
    constructor(props: ITrashPageProps & RouteComponentProps)
    {
        super(props);
        console.log(props);
    }

    public componentDidMount(): void
    {
        this.fetchData();
    }

    public fetchData(): void
    {   
        // TODO: 서버에서 정보 받아오기
        /**
         * HomePage에서 가져왔음에도 불구하고 또 서버에서 데이터를 가져오는 이유는
         * 웹 서비스의 특성상 리프레쉬하는 경우도 있기 떄문이다. (?)
         */
        const memos = api.apiFetchDeletedMemoList();

        // store에 데이터 담기
        fetchDeletedMemoList(memos);
    }

    public render(): JSX.Element 
    {
        const { match, memos } = this.props;
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

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        memos: state.memoReducer.deletedMemos
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        fetchDeletedMemoList: (memos: Memo[]) => dispatch(fetchDeletedMemoList(memos))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrashPage);
