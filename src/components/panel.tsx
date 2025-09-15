import React, { CSSProperties, ReactNode, useState, useRef } from "react";
import "./panel.css";

export interface PanelProps {
    id?: string;
    width?: number | string;
    height?: number | string;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    borderRadius?: number;
}

const Panel: React.FC<PanelProps> = ({
    id,
    width = "100%",
    height = "auto",
    children,
    className = "",
    style = {},
    onClick,
    disabled = false,
    borderRadius = 24,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            id={id}
            ref={elementRef}
            className={`panel ${disabled ? "disabled" : ""} ${className}`}
            style={{ width, height, borderRadius }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={!disabled ? onClick : undefined}
        >
            {/* Border */}
            <div className="panel-border" style={{ borderRadius }} />

            {/* Content */}
            <div className="panel-content">
                {children}
            </div>
        </div>
    );
};

export default Panel;