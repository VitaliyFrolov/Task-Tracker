import { FC } from "react";
import { ISearchInputProps } from "../type/props";

export const SearchInput: FC<ISearchInputProps> = ({ placeholder = "Поиск...", className }) => {
    return (
        <div className={`relative w-full max-w-md ${className}`}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none 
                bg-white shadow-sm hover:shadow-md"
            />
        </div>
    );
}
