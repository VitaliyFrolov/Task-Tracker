'use client'
import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IModalProps } from '../type/props';

export const Modal: FC<IModalProps> = (props) => {
    const {
        root,
        children,
        active,
        onClose
    } = props;

    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(root);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const layout = (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div
                className='fixed inset-0 bg-black opacity-50'
                onClick={onClose}
            />
            <div
                className={`bg-white rounded-lg shadow-lg p-4 relative ${
                    props.backgroundColor ? `bg-${props.backgroundColor}` : ''
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );

    return (active && ref.current) ? createPortal(layout, ref.current) : null;
};