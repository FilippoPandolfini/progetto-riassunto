import React from "react";
import Panel from "./panel";

const SectionPanel = ({ id, title, content, height = 300, width = 400, onClick }) => {
    return (
        <section id={id}>
            <Panel
                height={height}
                width={width}
                onClick={onClick}>
                <h2>{title}</h2>
                <p>{content}</p>
            </Panel>
        </section>
    )
}

export default SectionPanel;