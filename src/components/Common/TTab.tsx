import React, { useState } from "react";
import { Placeholder, Tabs } from "rsuite";
import styles from "../../assets/styles/booking.module.css";

interface TabNavItem {
  title: string;
  key: string;
  content: React.ReactNode;
}

interface TTabProps {
  TabNav: TabNavItem[];
}

const TTab: React.FC<TTabProps> = ({ TabNav }) => {
  const [selectedNav, setSelectedNav] = useState<string>(TabNav[0]?.key);

  return (
    <div>
      <Tabs
        defaultActiveKey={selectedNav}
        appearance="subtle"
        onSelect={(key) => setSelectedNav(key as string)}
        className={styles.tabNav}
      >
        {TabNav.map((item) => (
          <Tabs.Tab eventKey={item.key} title={item.title} key={item.key}>
            {item.content || <Placeholder.Paragraph graph="image" />}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TTab;
