import React from "react";
import SectionPanel from "./section-panel";

export default function SectionsRenderer({sections, navigate}){
    return (
        <>
        {sections.map(section => (
            <SectionPanel
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            onClick={() => navigate(section.href)}
            />
        ))}
        </>
    );
};