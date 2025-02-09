'use client';
import { FC } from 'react';
import { IDividerProps } from '../type/props';

export const Divider: FC<IDividerProps> = ({
    color = 'bg-gray-300',
    thickness = 'h-px',
    margin = 'my-4'
}) => {
    return (
        <div className={`${thickness} ${color} ${margin} w-full`} />
    );
};
