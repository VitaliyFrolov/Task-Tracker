export interface IAlertProps {
    children: React.ReactNode;
    severity?: 'error' | 'warning' | 'info' | 'success';
    variant?: 'standard' | 'filled' | 'outlined';
    className?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}