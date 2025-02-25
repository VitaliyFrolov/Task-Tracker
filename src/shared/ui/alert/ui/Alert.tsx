import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { severityIcons } from "../assets";
import { IAlertProps } from "../type/props";
import { severityStyles, baseStyles } from "./styles";

export const Alert: FC<IAlertProps> = ({
    children,
    className,
    severity = "success",
    variant = "standard",
    position = 'bottom-right',
}) => {
    const severityClass = severityStyles[severity][variant];

    return (
        <div className={twMerge(baseStyles, severityClass, position, className)}>
            <span className="flex-shrink-0 text-lg leading-none">
                {severityIcons[severity]}
            </span>
            <div className="text-sm">{children}</div>
        </div>
    );
};