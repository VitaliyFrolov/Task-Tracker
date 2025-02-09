'use client'
import { useState, useRef, useEffect } from 'react';
import { IContextMenuProps } from '../type/props';

export const ContextMenu: React.FC<IContextMenuProps> = (props) => {
    const {
        children,
        contextComponent,
        className,
        typeTrigger = 'hover',
    } = props;
    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseOver = () => {
        if (typeTrigger === 'hover') {
        setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (typeTrigger === 'hover') {
        setIsOpen(false);
        }
    };

    const handleClick = () => {
        if (typeTrigger === 'click') {
        setIsOpen(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            ref={ref}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
        {isOpen && (
            <div
                className={className}
            >
            {contextComponent}
            </div>
        )}
        </div>
    );
};