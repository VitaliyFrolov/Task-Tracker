import { FC } from "react";
import { IButtonProps } from "../type/props";
import clsx from "clsx";

export const Button: FC<IButtonProps> = ({
    children,
    className,
    onClick,
    type = "button",
    variant = "contained",
    disabled = false,
}) => {
    const baseStyles = `
        inline-flex 
        justify-center i
        tems-center 
        px-4 
        py-2 
        rounded-md 
        font-medium 
        text-sm 
        uppercase 
        transition 
        disabled:opacity-60 
        disabled:cursor-not-allowed
    `;

    const variantStyles = {
        text: `
        bg-transparent 
        text-blue-600 
        hover:bg-blue-100 
        disabled:text-gray-400`,
        contained: `
            bg-blue-600 
            text-white 
            shadow-md 
            hover:bg-blue-700 
            disabled:bg-gray-300 
            disabled:text-gray-500`,
        outlined: `
            border 
            border-blue-600 
            text-blue-600 
            hover:border-blue-700 
            hover:bg-blue-100 
            disabled:border-gray-300 
            disabled:text-gray-500`,
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(baseStyles, variantStyles[variant], className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
