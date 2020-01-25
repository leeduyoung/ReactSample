import { login, register, UserActionTypes, logout } from "../actions/user";

export interface IUserState
{
    id?: string;
    isAuth?: boolean;
    userData?: IUserData;
}

export interface IUserData
{
    name: string;
    lastname?: string;
    email: string;
    image: string;    
}

const initialState: IUserState =
{
    id: undefined,
    isAuth: false,
    userData: 
    {
        name: "",
        lastname: "",
        email: "",
        image: "",
    },
}


const userReducer = (state = initialState, action: UserActionTypes): IUserState => 
{
    switch (action.type)
    {       
        case register:
            return {
                ...action.payload
            };

        case login:
            return {
                ...action.payload
            };

        case logout:
            return initialState;

        default: 
            return state;
    }
};

export default userReducer;