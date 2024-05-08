import { Unit } from './';

export type UserFullType = UserType & {
    last_login: string;
    login?: string;
    id: number;
    current_unit: Unit;
    active: boolean;
};

export type UserType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
};

export type UserLoginType = {
    login: string;
    password: string;
};

export type UserRegisterType = {
    login: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_repeat: string;
};

export type LoginResponseType = {
    access_token: string;
    refresh_token: string;
    item: UserFullType;
};

export type ForgotPasswordType = {
    current_password: string;
    new_password: string;
    new_password_repeat: string;
};
