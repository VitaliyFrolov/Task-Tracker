import { FC } from "react";
import { IButtonProps } from "../type/props";
import clsx from "clsx";
import { baseStyles, variantStyles } from "./styles";

export const Button: FC<IButtonProps> = ({
    children,
    className,
    onClick,
    type = "button",
    variant = "contained",
    disabled = false,
}) => {
   
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
