export interface IButtonProps {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    children?: string;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
};