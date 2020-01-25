import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HTTPService from "../../utils/HTTPService";
import { USER_SERVER } from "../../config/config";
import { connect } from "react-redux";
import { IRootReducerState } from "../../store/reducers";
import { Dispatch } from "redux";
import { IUserState } from "../../store/reducers/user";
import { onLogout } from "../../store/actions/user";

interface INavbar 
{
    user: IUserState;
    onLogout: () => void
}

class Navbar extends React.Component<INavbar>
{
    public constructor(props: INavbar)
    {
        super(props);

        // console.log(props);
    }

    public render(): JSX.Element
    {
        const {user} = this.props;

        return (
            <nav className="navbar-container">
                <div className="logo">
                    <Link to="/">Logo</Link>
                </div>

                <div className="public-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/subscribe">Subscription</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </div>

                <div className="private-menu">
                    <ul>
                    { !user.isAuth
                        ? (
                            // logout 상태
                            <>
                                <li><Link to="/login">SignIn</Link></li>
                                <li><Link to="/register">SignUp</Link></li>
                            </>
                        ) : (
                            // login 상태
                            <>
                                <li><Link to="/video/upload">Video Upload</Link></li>
                                <li><a onClick={this.logout.bind(this)}>Logout</a></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }

    private async logout(): Promise<void>
    {
        try
        {
            let response = await HTTPService.get(`${USER_SERVER}/logout`);
            console.log(response);
        }
        catch(err)
        {
            console.log(err);
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
        onLogout: () => dispatch(onLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);