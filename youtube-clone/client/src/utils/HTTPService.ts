import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export default class HTTPService
{
    public static get<T>(url: string, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "GET",
            url: url,
        };
        return this._axios(request, headers);
    }

    public static post<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "POST",
            url: url,
            data: data,
        };
        return this._axios(request, headers);
    }

    public static remove<T>(url: string, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "DELETE",
            url: url,
        };
        return this._axios(request, headers);
    }

    public static patch<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "PATCH",
            url: url,
            data: data
        };
        return this._axios(request, headers);
    }

    public static put<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig = 
        {
            method: "PUT",
            url: url,
            data: data
        };
        return this._axios(request, headers);
    }

    private static async _axios<T>(request: AxiosRequestConfig, headers: any = null): Promise<T>
    {
        if (headers)
            request.headers = headers;

        // Cross Domain Cookie 값을 사용하기 위한 처리
        request.withCredentials = true;

        // Timeout 설정
        request.timeout = 15000;

        let response: AxiosResponse = await Axios.request(request);

        if (response.status !== 200)
            throw new Error("HTTP Error");
        
        try
        {
            return response.data;
        }
        catch (err)
        {
            console.log(err);
        }
    }
}