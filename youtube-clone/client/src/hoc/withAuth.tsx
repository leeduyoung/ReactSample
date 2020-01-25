import React from 'react';
import HTTPService from "../utils/HTTPService";
import { USER_SERVER } from "../config/config";
import { RouteComponentProps } from "react-router-dom";
import { IAuthResponse } from "../models/http";
import { connect } from "react-redux";
import { IUserState } from "../store/reducers/user";
import { Dispatch } from "redux";
import { onLogin, IOnLoginAction } from "../store/actions/user";

interface IWithAuthProps
{
    onLogin: (user: IUserState) => IOnLoginAction;
}

interface IWithAuthState
{
    isAuth: boolean;
}

export default (ComposeClass: React.ComponentType<any>, reload: boolean) =>
{
    class withAuth extends React.Component<IWithAuthProps & RouteComponentProps, IWithAuthState> {
        
        constructor(props: IWithAuthProps & RouteComponentProps)
        {
            super(props);

            this.state =
            {
                isAuth: false
            };
        }

        public componentDidMount(): void
        {
            this.autoLogin();
        }

        private async autoLogin(): Promise<void>
        {
            try
            {
                let response: IAuthResponse = await HTTPService.get(`${USER_SERVER}/auth`);
                // console.log('IAuthResponse: ', response);

                if (response.isAuth)
                {
                    // 로그인 성공! 
                    this.props.onLogin({
                        id: response._id,
                        isAuth: true,
                        userData: 
                        {
                            email: response.email,
                            image: response.image,
                            name: response.name
                        }
                    });

                    this.setState({
                        isAuth: true
                    });
                }
                else
                {
                    if (reload)
                        this.props.history.push('/login');
                }
            }
            catch (error)
            {
                console.log('자동 로그인 실패: ', error);
            }
        }

        public render(): JSX.Element
        {
            return <ComposeClass {...this.props} isAuth={this.state.isAuth} />;
        }        
    }

    const mapDispatchToProps = (dispatch: Dispatch) =>
    {
        return {
            onLogin: (user: IUserState) => dispatch(onLogin(user))
        };
    };    

    return connect(null, mapDispatchToProps)(withAuth);
}
