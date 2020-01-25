import React from "react";
import "./RegisterPage.scss";
import { RouteComponentProps } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { onRegister, IOnRegisterAction } from "../../store/actions/user";
import { IUserState } from "../../store/reducers/user";
import { IRootReducerState } from "../../store/reducers";
import HTTPService from "../../utils/HTTPService";
import { USER_SERVER } from "../../config/config";
import { IRegisterResponse, IRegisterRequest } from "../../models/http";

interface IRegisterPageProps
{
    user: IUserState;
    onRegister: (user: IUserState) => IOnRegisterAction;
}

interface IRegisterPageState
{
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    confirm: boolean;
}

class RegisterPage extends React.Component<IRegisterPageProps & RouteComponentProps, IRegisterPageState>
{
    public constructor(props: IRegisterPageProps & RouteComponentProps)
    {
        super(props);

        this.state =
        {
            name: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            confirm: true,
        };

        // console.log(props);
    }

    public render(): JSX.Element 
    {
        const {name, lastname, email, password, confirmPassword, confirm} = this.state;

        return (
            <div className="register-page-container">
                <div className="form-container">
                    <h2>회원가입</h2>
                    
                    <form onSubmit={this.onSubmitHandle.bind(this)}>
                        <label className="form-item">
                            <div className="key">
                                Name:
                            </div>

                            <div className="value">
                                <input type="text" id="name" placeholder="Enter your name" 
                                    className="name" value={name} onChange={this.onChangeHandler.bind(this)} />
                                {/* TODO:  */}
                                {/* <p>Nickname is required</p> */}
                            </div>
                        </label>

                        <label className="form-item">
                            <div className="key">
                                Last Name:
                            </div>

                            <div className="value">
                                <input type="text" id="lastname" placeholder="Enter your lastname" 
                                    className="lastname" value={lastname} onChange={this.onChangeHandler.bind(this)} />
                                {/* TODO:  */}
                                {/* <p>Nickname is required</p> */}
                            </div>
                        </label>

                        <label className="form-item">
                            <div className="key">
                                Email:
                            </div>

                            <div className="value">                            
                                <input type="text" id="email" placeholder="Enter your Email" 
                                    className="email" value={email} onChange={this.onChangeHandler.bind(this)} onKeyUp={this.emailValidator.bind(this)} />
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

                        <label className="form-item">
                            <div className="key">
                                Confirm:
                            </div>

                            <div className="value">                                 
                                <input type="password" id="confirmPassword" placeholder="Enter your confirm password" 
                                    className="confirm-password" value={confirmPassword} onChange={this.onChangeHandler.bind(this)} onKeyUp={this.passwordVailidator.bind(this)} />
                            </div>

                            {!confirm && <p className="form-error-meesage">비밀번호를 확인해주세요.</p>}
                        </label>

                        <div className="form-item">
                            <button type={"submit"}>
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
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

        const {email, password, name, lastname} = this.state;
        const {history, onRegister} = this.props;

        let data: IRegisterRequest = 
        {
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
        };        
        
        try
        {
            let response: IRegisterResponse = await HTTPService.post(`${USER_SERVER}/register`, data);

            if (!response.success)
                throw new Error('register HTTP Error');

            // store에 유저데이터 저장
            onRegister({
                userData: data
            });

            history.push('/login');
        }
        catch (err)
        {
            console.log(err);
            alert("회원가입에 실패하였습니다. 잠시후 다시 시도해주세요.");
        }
    }

    private emailValidator(): void
    {
        {/* TODO:  */}
    }
    private passwordVailidator(): void
    {
        let confirm = false;
        const {password, confirmPassword} = this.state;

        if (password !== confirmPassword)
            confirm = false;
        else
            confirm = true;

        this.setState({
            confirm
        });
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
        onRegister: (user: IUserState) => dispatch(onRegister(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
