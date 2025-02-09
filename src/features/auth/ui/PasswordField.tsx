import { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

export interface IPasswordFieldProps {
    id: string;
    label: string;
    className?: string;
    register?: UseFormRegisterReturn;
}

export const PasswordField: FC<IPasswordFieldProps> = ({
    label,
    id,
    className,
    register,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = (e: React.MouseEvent) => {
        e.preventDefault();
        setPasswordVisibility(!passwordVisibility);
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) setIsFocused(false);
    };

    return (
        <div className={clsx("relative w-full", className)}>
            <label
                htmlFor={id}
                className={clsx(
                    "absolute left-3 transition-all duration-200 bg-white px-1",
                    isFocused
                        ? "top-[-8px] text-xs text-blue-600"
                        : "top-1/2 -translate-y-1/2 text-gray-500"
                )}
            >
                {label}
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 text-gray-900 focus-within:border-blue-500 transition">
                <input
                    id={id}
                    type={passwordVisibility ? 'text' : 'password'}
                    className="w-full border-none outline-none"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...register}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="p-1 ml-2 text-gray-500 hover:text-gray-700"
                >
                    {passwordVisibility ? "👁️" : "🙈"}
                </button>
            </div>
        </div>
    );
};
