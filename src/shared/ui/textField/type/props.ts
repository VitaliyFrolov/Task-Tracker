import { UseFormRegisterReturn } from 'react-hook-form';

export interface ITextFieldProps {
    id: string;
    label: string;
    type: string;
    className?: string;
    defaultValue?: string;
    register?: UseFormRegisterReturn;
};