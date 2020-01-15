import React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from "react-router-dom";
import NewMemoComponent from "../../pages/memo/NewMemoComponent";
import MemoComponent from "../../pages/memo/MemoComponent";

class MemoRouter extends React.Component<RouteComponentProps>
{
    public render(): JSX.Element 
    {
        const { match } = this.props;

        return (
            <Switch>
                <Route path={`${match.url}/add`} exact component={NewMemoComponent} />
                <Route path={`${match.url}/:id`} exact component={MemoComponent} />
                <Route path={`${match.url}/`} exact component={() => <div>메모가 없습니다.</div>} />
            </Switch>
        );        
    } 
}

export default withRouter(MemoRouter);
