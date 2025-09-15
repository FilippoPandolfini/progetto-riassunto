export interface BasePanelProps {
    id: string;
    title: string;
    content: string;
    height?: number | string;
    width?: number | string;
    onClick?: () => void;
}