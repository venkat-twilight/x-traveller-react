import React from "react";
import { Panel, PanelGroup } from "rsuite";
interface TimerProps {
  header?: string;
  render?: any;
  classname?: string;
}

const TAccordion: React.FC<TimerProps> = ({ header, render, classname }) => {
  return (
    <>
      <PanelGroup accordion bordered className={classname}>
        <Panel header={header} defaultExpanded>
          {render}
        </Panel>
      </PanelGroup>
    </>
  );
};

export default TAccordion;
