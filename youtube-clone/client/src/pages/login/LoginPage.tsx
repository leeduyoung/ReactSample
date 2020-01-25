import React from "react";
import "./LoginPage.scss";
import { RouteComponentProps } from "react-router-dom";
import HTTPService from "../../utils/HTTPService";
import { USER_SERVER } from "../../config/config";
import { ILoginResponse, ILoginRequest } from "../../models/http";
import { IUserState } from "../../store/reducers/user";
import { Dispatch } from "redux";
import { IRootReducerState } from "../../store/reducers";
import { connect } from "react-redux";
import { onLogin, IOnLoginAction } from "../../store/actions/user";

interface ILoginPageProps
{
    user: IUserState;
    onLogin: (user: IUserState) => IOnLoginAction;
}

interface ILoginPageState
{
    email: string;
    password: string;
}

class LoginPage extends React.Component<ILoginPageProps & RouteComponentProps, ILoginPageState>
{
    public constructor(props: ILoginPageProps & RouteComponentProps)
    {
        super(props);

        this.state =
        {
            email: "",
            password: "",
        };
    }

    public render(): JSX.Element
    {
        const {email, password} = this.state;

        return (
            <div className="login-container">
                <div className="form-container">
                    <h2>로그인</h2>
                    
                    <form onSubmit={this.onSubmitHandle.bind(this)}>
                        <label className="form-item">
                            <div className="key">
                                Email:
                            </div>

                            <div className="value">                            
                                <input type="text" id="email" placeholder="Enter your Email" 
                                    className="email" value={email} onChange={this.onChangeHandler.bind(this)} />
                            </div>
                        </label>

                        <label className="form-item">
                            <div className="key">
                                Password:
                            </div>

                            <div className="value">                                 
                                <input type="password" id="password" placeholder="Enter your password" 
                                    className="password" value={password} onChange={this.onChangeHandler.bind(this)} />
                            </div>
                        </label>

                        <div className="form-item">
                            <button type={"submit"}>
                                로그인
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    private onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
    {
        const {id, value} = event.target;

        this.setState({
            [id]: value
        } as any);
    }
    
    private async onSubmitHandle(event: React.FormEvent<HTMLFormElement>): Promise<void>
    {
        event.preventDefault();

        const {email, password} = this.state;
        const {onLogin, history} = this.props;

        if (email.length <= 0 || password.length <= 0)
            return;

        let data: ILoginRequest = 
        {
            email: email,
            password: password
        };        
        
        try
        {
            let response: ILoginResponse = await HTTPService.post(`${USER_SERVER}/login`, data);

            if (!response.loginSuccess)
                throw new Error(response.message);

            // store에 로그인 상태저장
            onLogin({
                id: response.userId,
                isAuth: true
            });

            window.localStorage.setItem('userId', response.userId);

            history.push('/');
        }
        catch (err)
        {
            console.log(err);
            alert(err.message);
        }    
    }    
}

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
{
    return {
        onLogin: (user: IUserState) => dispatch(onLogin(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);