import React, { useState } from "react";
import SectionPanel from "./section-panel";
import SubPanel from "./sub-panel";
import { BasePanelProps } from "./panel-types";

interface Section extends BasePanelProps {
    subPanels?: BasePanelProps[];
}

export default function SectionsRenderer({ sections, isMobile }: { sections: Section[], isMobile: boolean }) {
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const selected = sections.find(s => s.id === selectedSection);
    return (
        <>
            {/* Lista principale sempre visibile */}
            {sections.map(sections => (
                <SectionPanel
                    key={sections.id}
                    id={sections.id}
                    title={sections.title}
                    content={sections.content}
                    onClick={() => sections.subPanels && setSelectedSection(sections.id)}
                />
            ))}

            {/* Overlay per i sub-panel */}
            {selectedSection && selected?.subPanels && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: isMobile? "80px 0" : "140px 0",
                        zIndex: 9999,
                        overflowY: "auto",
                    }}
                    onClick={() => setSelectedSection(null)}
                >

                    {/* Pulsante Chiudi */}
                        <button
                            style={{
                                position: "fixed",
                                top: "20px",
                                right: "20px",
                                fontSize: "18px",
                                padding: "10px 15px",
                                cursor: "pointer",
                                zIndex: 10000,
                            }}
                            onClick={() => setSelectedSection(null)}
                        >
                            x
                        </button>

                    {/*Contenitore dei sub-panel*/}
                    <div
                        style={{
                            position: "relative",
                            overflowY: "auto",
                            borderRadius: "8px"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        
                        {/* Sub-panels */}
                        {selected.subPanels.map(sub => (
                            <SubPanel
                                key={sub.id}
                                id={sub.id}
                                title={sub.title}
                                content={sub.content}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};