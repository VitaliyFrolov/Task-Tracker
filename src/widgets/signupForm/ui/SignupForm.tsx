'use client'
import { FC } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { paths } from '@/shared/lib/paths';
import { TextField, Form } from '@/shared/ui';
import { 
    emailValidation,
    ISignupData,
    PasswordField, 
    passwordValidation, 
    useRegisterMutation
} from '@/features/auth';

export const SignupForm: FC = () => {
    const [ userRegister, { isLoading, isError } ] = useRegisterMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<ISignupData>({
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: ''
        },
    });

    const onSubmit = async (data: ISignupData) => {
        try {
            const response = await userRegister(data).unwrap();
            const token = response.token;
            localStorage.setItem('token', token);

            if (token && !isError) {
                window.location.href = paths.main;
            }
            console.log(isLoading);
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <Form 
            title='Регистрация в Task Tracker'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="space-y-1">
                <TextField
                    id="email"
                    type="email"
                    label="Адрес электронной почты"
                    register={register('email', emailValidation)}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-1">
                <PasswordField
                    id="password"
                    label="Пароль"
                    register={register('password', passwordValidation)}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
            </div>

            <div className="space-y-1">
                <PasswordField
                    id="repeatPassword"
                    label="Повторите пароль"
                    register={register('repeatPassword', passwordValidation)}
                />
                {errors.repeatPassword && (
                    <p className="text-red-500 text-sm">{errors.repeatPassword.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Продолжить
            </button>

            <p className="text-center text-sm text-gray-600">
                Уже есть аккаунт? <Link href={paths.signin} className="text-blue-500 hover:underline">Войти</Link>
            </p>
        </Form>
    );
};
