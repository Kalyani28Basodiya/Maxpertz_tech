import { useState } from "react";
import styled from "styled-components";

const TabNav = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  border-bottom: 2px solid #eee;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: ${({ active }) => (active ? "3px solid #007bff" : "none")};
  color: ${({ active }) => (active ? "#007bff" : "#555")};
  cursor: pointer;
`;

const TabContent = styled.div`
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
`;

const Tabs = ({ story }) => {
  const [activeTab, setActiveTab] = useState("Short Description");

  const content = {
    "Short Description": story?.Short_Description,
    "Full Story": story?.Full_Story,
    "Author": story?.Author,
  };

  return (
    <>
      <TabNav>
        {Object.keys(content).map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabNav>
      <TabContent>{content[activeTab]}</TabContent>
    </>
  );
};

export default Tabs;
