export interface IModalProps {
    root: string;
    children: React.ReactElement;
    active: boolean;
    onClise?: () => void;
    backgroundColor?: string;
};