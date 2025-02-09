'use client'
/* eslint-disable @next/next/no-img-element */
import { FC, useState } from 'react';
import { IAvatarProps } from '../type/props';

export const Avatar: FC<IAvatarProps> = ({
    src, 
    onChange,
    width = 50,
    height = 50,
}) => {
    const [hovered, setHovered] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            onChange?.(file);
        }
    };

    return (
        <div
            className="relative inline-block cursor-pointer rounded-full border-2 border-white overflow-hidden"
            onMouseEnter={() => onChange && setHovered(true)}
            onMouseLeave={() => onChange && setHovered(false)}
        >
            <img
                width={width}
                height={height}
                src={src}
                className="object-cover rounded-full"
                alt="Avatar"
            />
            {onChange && hovered && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center rounded-full transition-opacity duration-300 ease-in-out">
                    <label htmlFor="file-upload" className="flex items-center justify-center cursor-pointer">
                        <p className="text-white text-2xl font-bold transition-transform duration-300 ease-in-out">{'+'}</p>
                        <input
                            type="file"
                            id="avatar-file-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
}
