import { AccordionProps } from "@/src/models/common.model";
import Image from "next/image";
import React from "react";
import { Panel, PanelGroup } from "rsuite";

const TDPanel: React.FC<AccordionProps> = ({
  header,
  render,
  classname,
  defaultExpanded = false,
  icon,
}) => {
  return (
    <PanelGroup bordered className={classname}>
      <Panel
        header={
          <div style={{ display: "flex", alignItems: "center", gap: "6px",padding:"10px" }}>
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

export default TDPanel;
