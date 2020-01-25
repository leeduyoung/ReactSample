import { IUserState } from "../reducers/user";

// ACTION TYPE'S
export const login = 'LOGIN';
export const register = 'REGISTER';
export const auth = 'AUTH';
export const logout = 'LOGOUT';


// ACTION CREATOR'S
export interface IOnRegisterAction
{
    type: typeof register;
    payload: IUserState;
}
export function onRegister(user: IUserState): IOnRegisterAction
{
    return {
        type: register,
        payload: user
    }
}

export interface IOnLoginAction
{
    type: typeof login;
    payload: IUserState;
}
export function onLogin(user: IUserState): IOnLoginAction
{
    return {
        type: login,
        payload: user
    }
}

export interface IOnLogoutAction
{
    type: typeof logout;
}
export function onLogout(): IOnLogoutAction
{
    return {
        type: logout
    }
}

// export interface IOnAuthAction
// {
//     type: typeof auth;
//     payload: IUserState;
// }
// export function onAuth() 
// {
//     const request = axios.get(`${USER_SERVER}/auth`).then(response => response.data);

//     return {
//         type: auth,
//         payload: request
//     }
// }

// ACTION RESPONSE TYPE
export type UserActionTypes = IOnRegisterAction
    | IOnLoginAction
    | IOnLogoutAction;