import React from "react";
import Panel from "./panel";
import { BasePanelProps } from "./panel-types";

interface SubPanelProps extends BasePanelProps {
    isMobile: boolean;
}

const SubPanel: React.FC<SubPanelProps> = ({
    id,
    title,
    content,
    height,
    width,
    onClick,
    isMobile
}) => {

    const panelHeight = height ?? (isMobile ? 350 : 400);
    const panelWidth = width ?? (isMobile ? 450 : 500);

    return (
        <Panel
            id={id}
            height={panelHeight}
            width={panelWidth}
            onClick={onClick}
            style={{ background: "#444" }}
        >
            <h3>{title}</h3>
            <p>{content}</p>
        </Panel>
    )
}

export default SubPanel;