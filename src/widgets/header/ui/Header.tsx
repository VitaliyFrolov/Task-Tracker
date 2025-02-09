'use client'
import { Avatar } from "@/shared/ui";
import { FC } from "react";

interface HeaderProps {
    onMenuToggle: () => void;
}

export const Header: FC<HeaderProps> = ({ onMenuToggle }) => {
    return (
        <header className="bg-indigo-200 shadow p-4 flex justify-between items-center text-gray-700">
            <button
                className="text-gray-600 hover:text-gray-800 text-2xl"
                onClick={onMenuToggle}
            >
                ☰
            </button>
            <div>
                <Avatar
                    src="/vercel.svg"
                    width={40}
                    height={40}
                />
            </div>
        </header>
    );
}
