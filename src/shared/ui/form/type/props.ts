import { ReactNode } from "react";

export interface IFormProps {
    title: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}