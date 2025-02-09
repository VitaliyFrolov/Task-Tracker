export interface IAvatarProps {
    src: string;
    width?: number;
    height?: number;
    onChange?: (file: File) => void;
}