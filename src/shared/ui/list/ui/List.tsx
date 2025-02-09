'use client'
import React, { FC, useMemo } from "react";

type ListItemData = {
    id: number;
}

interface ListProps<T extends ListItemData> {
    data: T[];
    itemContentRender: (itemData: T) => React.ReactNode;
    additionalСomponent?: React.ReactNode
    className?: string;
}

export const List: FC<ListProps<ListItemData>> = (props) => {
    const {
        data = [],
        itemContentRender,
        additionalСomponent,
        className
    } = props;

    const content = useMemo(() =>
        data.map((itemData) => {
            return (
                <li key={itemData.id}>
                    {itemContentRender(itemData)}
                </li>
            );
        }), [data, itemContentRender]
    );

    return (
        <ul className={className}>
            {content}
            {additionalСomponent && additionalСomponent}
        </ul>
    );
};