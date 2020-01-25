import { IVideo } from ".";

export interface IAuthResponse
{
    _id?: string;
    isAdmin?: boolean;
    isAuth: boolean;
    email?: string;
    name?: string;
    image?: string;
    error?: boolean;    
};

export interface IRegisterRequest
{
    email: string;
    password: string;
    name: string;
    lastname: string;
    image: string;
}
export interface IRegisterResponse
{
    success: boolean;
    err?: any;
};

export interface ILoginRequest
{   
    email: string;
    password: string;
};
export interface ILoginResponse
{   
    loginSuccess: boolean;
    message?: string;
    userId?: string;   
};

export interface IVideoUploadFilesResponse
{
    success: boolean;
    error?: Error;
    url?: string;
    fileName?: string;
}

export interface IVideoThumbnailRequest
{
    url: string;
    fileName: string;
}
export interface IVideoThumbnailResponse
{
    success: boolean;
    url?: string;
    fileDuration?: string;
    error?: Error;
}

export interface IUploadVideoRequest
{
    writer: string;
    title: string;
    description: string;
    privacy: number;
    category: number;
    filePath: string;
    duration: number;
    thumbnail: string;
}
export interface IUploadVideoResponse
{
    success: boolean;
    error?: Error;
}

export interface IGetVideosResponse
{
    success?: boolean;
    videos?: IVideo[];
}
