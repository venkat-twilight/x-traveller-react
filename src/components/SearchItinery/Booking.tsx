// Booking.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Adjust the import path according to your folder structure
import { Col, Row } from 'rsuite';
import Itinerary from './SideBarOptions/Itinerary';
import ReturnItinerary from './SideBarOptions/ReturnItinerary';
import Viewcancellation from './SideBarOptions/ViewCancellation';
import TravelCalendar from './SideBarOptions/TravelCalendar';
import Reissue from './SideBarOptions/Reissue';

const Booking = () => {
  const [activeKey, setActiveKey] = useState('itinerary');

  const handleSelect = (eventKey: string) => {
    setActiveKey(eventKey);
  };

  const renderContent = () => {
    switch (activeKey) {
      case 'itinerary':
        return <Itinerary/>;
      case 'returnitinerary':
        return <ReturnItinerary/>;
      case 'viewcancellation':
        return <Viewcancellation/>;
      case 'travelcalendar':
        return <TravelCalendar/>;
      case 'reissue':
        return <Reissue/>;
      default:
        return <div>Select an item</div>;
    }
  };

  return (
    <div>
      <Row>
        <Col md={4}>
          <Sidebar activeKey={activeKey} onSelect={handleSelect} />
        </Col>
        <Col md={20}>
          <div style={{ padding: '20px' }}>
            {renderContent()}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
