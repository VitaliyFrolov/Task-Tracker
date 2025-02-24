import { FC } from "react";
import clsx from "clsx";
import { IAlertProps } from "../type/props";

const severityIcons = {
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
  success: '✅',
}

const severityStyles = {
  error: {
    filled: 'bg-red-500 text-white',
    outlined: 'border-red-500 text-red-500',
    standard: 'bg-red-50 text-red-800'
  },
  warning: {
    filled: 'bg-yellow-500 text-white',
    outlined: 'border-yellow-500 text-yellow-500',
    standard: 'bg-yellow-50 text-yellow-800'
  },
  info: {
    filled: 'bg-blue-500 text-white',
    outlined: 'border-blue-500 text-blue-500',
    standard: 'bg-blue-50 text-blue-800'
  },
  success: {
    filled: 'bg-green-500 text-white',
    outlined: 'border-green-500 text-green-500',
    standard: 'bg-green-50 text-green-800'
  }
}

export const Alert: FC<IAlertProps> = (props) => {
  const {
    children,
    className,
    icon,
    severity = 'success',
    variant = 'standard'
  } = props;

  const getAlertStyles = () => {
    const baseStyles = 'flex items-center p-4 gap-3 rounded-lg font-bold';

    switch(variant) {
      case 'filled':
        return clsx(baseStyles, severityStyles[severity].filled);
      case 'outlined':
        return clsx(baseStyles, 'border-2', severityStyles[severity].outlined);
      default:
        return clsx(baseStyles, severityStyles[severity].standard)
    }
  };

  return (
    <div className={clsx(getAlertStyles(), className)}>
      {icon !== undefined ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : (
        <span className="flex-shrink-0 text-lg leading-none">
          {severityIcons[severity]}
        </span>
      )}
      <div className="text-sm">{children}</div>
    </div>
  )

}