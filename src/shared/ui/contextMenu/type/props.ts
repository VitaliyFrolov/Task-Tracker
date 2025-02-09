export interface IContextMenuProps {
    children: React.ReactNode;
    contextComponent: React.ReactNode;
    className?: string;
    typeTrigger?: 'hover' | 'click';
}