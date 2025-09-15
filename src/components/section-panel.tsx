import React from "react";
import Panel from "./panel";
import { BasePanelProps } from "./panel-types";

const SectionPanel: React.FC<BasePanelProps> = ({
    id,
    title,
    content,
    sample,
    height = 300,
    width = 400,
    onClick
}) => {
    return (
        <section id={id} className="section-panel">
            <Panel
                height={height}
                width={width}
                onClick={onClick}
            >
                <h2>{title}</h2>
                <p>{content}</p>
            </Panel>
        </section>
    )
}

export default SectionPanel;