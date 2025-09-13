import React, { CSSProperties, ReactNode, useState, useRef } from "react";

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
            className={`panel ${className}`}
            style={{
                position: "relative",
                borderRadius: `${borderRadius}px`,
                overflow: "hidden",
                cursor: onClick && !disabled ? "pointer" : "default",
                width,
                height,
                background: "#333",
                color: "white",
                /*boxShadow: isHovered
                    ? "0px 8px 20px rgba(0,0,0,0.3)"
                    : "0px 4px 12px rgba(0,0,0,0.15)",*/
                transition: "all 0.3s ease-in-out",
                ...style,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={!disabled ? onClick : undefined}
        >
            {/* Border */}
            <div style={{
                position: "absolute",
                inset: "0px",
                borderRadius: `${borderRadius}px`,
                border: `1px solid rgba(255, 255, 255, ${isHovered ? 0.4 : 0.2})`,
                pointerEvents: "none",
            }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    textAlign: "center"
                }}>
                {children}
            </div>
        </div>
    );
};

export default Panel;