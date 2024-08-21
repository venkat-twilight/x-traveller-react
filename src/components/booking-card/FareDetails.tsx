import React from 'react';
import { Panel } from 'rsuite';
import Image from 'next/image';
// Import your image
import IconsPlus from '../../assets/icons/IconsPlus.svg';

const FareDetailsPanel: React.FC = () => {
  return (
    <Panel bordered style={{ borderRadius: '14px', border: '1px solid lightgrey' }}>
      <div style={headerStyle}>
        Fare Details
      </div>
      <div style={rowStyle}>
        <div style={leftStyle}>
          <Image src={IconsPlus} alt="Brand Logo" width={20} height={20} />
          <span>Base Fare</span>
        </div>
        <div style={rightStyle}>
          ₹7,246
        </div>
      </div>
      <div style={rowStyle}>
        <div style={leftStyle}>
          <Image src={IconsPlus} alt="Brand Logo" width={20} height={20} />
          <span>Taxes</span>
        </div>
        <div style={rightStyle}>
          ₹1,500
        </div>
      </div>
      <div style={rowStyle}>
        <div style={leftStyle}>
          <Image src={IconsPlus} alt="Brand Logo" width={20} height={20} />
          <span>Total Fare</span>
        </div>
        <div style={rightStyle}>
          ₹8,746
        </div>
      </div>
      <div style={rowAmtStyle}>
        <div style={leftAmtStyle}>
         
          <span>Total Amount</span>
        </div>
        <div style={rightAmtStyle}>
          ₹9,999
        </div>
      </div>
    </Panel>
  );
};

const headerStyle: React.CSSProperties = {
  fontWeight: 'bold',
  borderBottom: '1px solid lightgrey',
  backgroundColor: '#f2f4f5',
  borderTopLeftRadius: '14px',
  borderTopRightRadius: '14px',
  padding: '10px 15px',
  margin: '-20px -20px 0 -20px', // Removes any extra margin
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 3px 10px',
  width: '100%',
  boxSizing: 'border-box',
  margin: 0, // Ensure no margin between rows
};

const leftStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
  fontWeight:"400px",
  
};

const rightStyle: React.CSSProperties = {
  fontWeight: 'bold',
  textAlign: 'right',
  flexShrink: 0,
};

const leftAmtStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
  fontWeight:"bold"
};

const rightAmtStyle: React.CSSProperties = {
  fontWeight: 'bold',
  textAlign: 'right',
  flexShrink: 0,
  color:"#0770E3"
};
const rowAmtStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '11px 3px 10px',
  width: '100%',
  boxSizing: 'border-box',
  margin: 0, // Ensure no margin between rows
  borderTop:"1px solid lightgrey"
};
export default FareDetailsPanel;
