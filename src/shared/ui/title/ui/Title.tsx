'uce client'
import React, { FC } from 'react';
import { ITitleProps } from '../type/props';
import { titleSizes } from '../model/size';

export const Title: FC<ITitleProps> = (props) => {
    const {
        children,
        size = 'm',
        tag: Tag = 'h2',
        className,
    } = props;

    const titleSize = titleSizes[size] || titleSizes.m;

    return (
        <Tag className={`${titleSize} ${className && className}`}>
            {children}
        </Tag>
    );
};