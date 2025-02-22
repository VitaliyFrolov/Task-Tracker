'use client';
import { FC, useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Header } from "@/widgets/header";
import Link from "next/link";
import { paths } from "@/shared/lib/paths";

interface NavbarProps {
    children: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleEscPress = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscPress);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscPress);
        };
    }, []);

    return (
        <div className="flex h-screen">
            <div
                ref={menuRef}
                className={clsx(
                    "fixed top-0 left-0 h-full w-64 shadow-md transition-transform duration-300 z-10",
                    "bg-indigo-200 text-gray-800",
                    isOpen ? "translate-x-0" : "-translate-x-64"
                )}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    ✖
                </button>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-700">Меню</h2>
                    <nav className="mt-6 space-y-3">
                        <Link href={paths.main} className="block px-4 py-2 rounded bg-indigo-300 text-gray-800 hover:bg-indigo-400 transition">
                            Главная страница
                        </Link>
                        <Link href={paths.boards} className="block px-4 py-2 rounded bg-indigo-300 text-gray-800 hover:bg-indigo-400 transition">
                            Доски
                        </Link>
                        <Link href={paths.calendar} className="block px-4 py-2 rounded bg-indigo-300 text-gray-800 hover:bg-indigo-400 transition">
                            Календарь
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="flex-1 flex flex-col ml-0 w-full">
                <Header onMenuToggle={() => setIsOpen(true)} />

                <main className="flex-1 p-6 text-gray-700 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
