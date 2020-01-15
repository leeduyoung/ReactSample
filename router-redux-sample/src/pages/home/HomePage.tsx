import React from 'react';
import Layout from "../../components/Layout";
import Sidebar, { SidebarTitle } from "../../components/Sidebar";
import Main from "../../components/Main";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import AddMemoBtn from "../../components/AddMenuBtn";

class HomePage extends React.Component
{
    public render(): JSX.Element 
    {
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

export default HomePage;
