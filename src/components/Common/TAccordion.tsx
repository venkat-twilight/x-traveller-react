import Image from "next/image";
import React, { ReactNode } from "react";
import { Panel, PanelGroup } from "rsuite";

interface AccordionProps {
  header?: string; // The header text
  render?: ReactNode; // The content to render inside the accordion
  classname?: string; // Custom class for styling
  defaultExpanded?: boolean; // Boolean to set if the accordion is expanded by default
  icon?: string ; // New icon prop of type ReactNode
}

const TAccordion: React.FC<AccordionProps> = ({
  header,
  render,
  classname,
  defaultExpanded = false,
  icon,
}) => {
  return (
    <PanelGroup accordion bordered className={classname}>
      <Panel
        header={
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {icon && <Image src={icon} alt="ico" />} {header}
          </div>
        }
        expanded={defaultExpanded}
      >
        {render}
      </Panel>
    </PanelGroup>
  );
};

export default TAccordion;
