export interface BasePanelProps {
    id: string;
    title: string;
    content: string;
    sample?: string;
    height?: number | string;
    width?: number | string;
    onClick?: () => void;
}