import { FC } from "react";
import { Title } from "../../title";
import { IFormProps } from "../type/props";

export const Form: FC<IFormProps> = ({ title, onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-xl w-96 space-y-4">
            <Title tag="h2" size="l" className="font-bold text-center text-gray-800">
                {title}
            </Title>
            {children}
        </form>
    );
};
