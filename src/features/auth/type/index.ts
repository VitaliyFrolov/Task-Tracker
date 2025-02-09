export interface ISigninData {
    email: string;
    password: string;
};

export interface ISignupData extends ISigninData {
    repeatPassword: string;
};