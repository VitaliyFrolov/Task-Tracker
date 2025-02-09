'use client'
import { FC } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { paths } from '@/shared/lib/paths';
import { Form, TextField } from '@/shared/ui';
import { onSubmit } from '../model';
import { 
    emailValidation,
    ISigninData,
    PasswordField,
    passwordValidation
} from '@/features/auth';

export const SigninForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISigninData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <Form
            title='Войти в Task Tracker'
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

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Продолжить
            </button>

            <p className="text-center text-sm text-gray-600">
                Еще нет аккаунта? <Link href={paths.signup} className="text-blue-500 hover:underline">Зарегистрироваться</Link>
            </p>
        </Form>
    );
};
