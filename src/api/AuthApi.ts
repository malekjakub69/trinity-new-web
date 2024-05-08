import { ForgotPasswordType, LoginResponseType, UserFullType, UserLoginType, UserRegisterType } from '../app/types';
import { BaseApi } from './index';

export async function authenticate(): Promise<UserFullType> {
    const resp = await BaseApi.basePost<UserFullType[]>('/authenticate');
    return resp.data[0];
}

export async function logout(): Promise<{ message: string }> {
    const tokenAccess = localStorage.getItem('access_token');
    const requestAccessConfig = { headers: { Authorization: `Bearer ${tokenAccess}` } };

    await BaseApi.basePost<{ message: string }>('/logout/access', {}, requestAccessConfig);

    const tokenRefresh = localStorage.getItem('refresh_token');
    const requestRefreshConfig = { headers: { Authorization: `Bearer ${tokenRefresh}` } };

    const { data } = await BaseApi.basePost<{ message: string }>('/logout/refresh', {}, requestRefreshConfig);
    return data;
}

export async function logIn(login: UserLoginType): Promise<LoginResponseType> {
    const resp = await BaseApi.basePost<LoginResponseType>('/login', login);
    return resp.data;
}

export async function refreshAccessToken(): Promise<{ token: string }> {
    const tokenRefresh = localStorage.getItem('refresh_token');
    const requestConfig = { headers: { Authorization: `Bearer ${tokenRefresh}` } };

    const resp = await BaseApi.basePost<{ access_token: string }>('/token/refresh', {}, requestConfig);
    return { token: resp.data.access_token };
}

export async function register(newUser: UserRegisterType): Promise<void> {
    const response = await BaseApi.basePost<void>('/registration', newUser);
    return response.data;
}

export async function restartPassword(newUser: ForgotPasswordType): Promise<void> {
    const response = await BaseApi.basePost<void>('/restart-password', newUser);
    return response.data;
}