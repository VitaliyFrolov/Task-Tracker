export interface IModalProps {
    root: string;
    children: React.ReactElement;
    active: boolean;
    onClose?: () => void;
    backgroundColor?: string;
};