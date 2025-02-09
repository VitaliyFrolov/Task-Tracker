'use client'
import { FC, useState } from 'react';
import { ITextFieldProps } from '../type/props';
import clsx from 'clsx';

export const TextField: FC<ITextFieldProps> = ({
    id,
    label,
    className,
    defaultValue,
    register,
    type
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) setIsFocused(false);
    };

    return (
        <div className={clsx("relative w-full", className)}>
            <label
                htmlFor={id}
                className={clsx(
                    "absolute left-3 transition-all bg-white px-1",
                    isFocused || defaultValue
                        ? "top-[-8px] text-xs text-blue-600"
                        : "top-1/2 -translate-y-1/2 text-gray-500"
                )}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                defaultValue={defaultValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...register}
                className="w-full border rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 transition"
            />
        </div>
    );
};
