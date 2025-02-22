'use client'
import { Avatar } from "@/shared/ui";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useGetUserDataQuery } from "@/entities/user";

interface HeaderProps {
    onMenuToggle: () => void;
}

export const Header: FC<HeaderProps> = ({ onMenuToggle }) => {
    const {} = useGetUserDataQuery({})
    const user = useSelector((state: RootState) => state.user);
    console.log(user);

    return (
        <header className="bg-indigo-200 shadow p-4 flex justify-between items-center text-gray-700">
            <button
                className="text-gray-600 hover:text-gray-800 text-2xl"
                onClick={onMenuToggle}
            >
                ☰
            </button>
            <div className="flex items-cente gap-2">
                {user?.email && (
                    <div className="text-gray-600 flex items-center">{user.email}</div>
                )}
                <Avatar
                    src={"/vercel.svg"} 
                    width={40}
                    height={40}
                />
            </div>
        </header>
    );
}
