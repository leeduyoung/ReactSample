import React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from "react-router-dom";
import RemovedMemoComponent from "../../pages/trash/RemovedMemoComponent";

class TrashRouter extends React.Component<RouteComponentProps>
{
    public render(): JSX.Element 
    {
        const { match } = this.props;

        return (
            <Switch>
                <Route path={`${match.url}/:id`} exact component={RemovedMemoComponent} />
                <Route path={`${match.url}/`} exact component={() => <div>휴지통이 비었습니다.</div>} />
            </Switch>
        );        
    } 
}

export default withRouter(TrashRouter);
