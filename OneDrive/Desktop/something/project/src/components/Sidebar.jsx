import React, { useState,useEffect } from 'react';
import { FaHome, FaShoppingCart, FaTag, FaGlobe, FaBolt, FaUsers, FaChartBar } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import useMedia from 'use-media';
import { ImWrench } from "react-icons/im";

const sidebarStyle = {
  backgroundColor: '#212121',
  color: '#f0f0f0', 
  paddingTop: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: '20px',
  width: '200px',
  position: 'fixed',
  height: '100%',
  overflowY: 'auto',
  transition: 'left 0.3s ease',
};

const hamburgerStyle = {
  position: 'fixed',
  top: '10px',
  height: '20px',
  width: '20px',
  left: '-5px',
  zIndex: '1000', 
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMedia({minWidth: '960px'});
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(isMobile);
  }, [isMobile]);

  return (
    <div style={{ ...sidebarStyle, left: isOpen ? '0' : '-200px' }}>
      
      {!isMobile && (
        <div style={hamburgerStyle} className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={toggleSidebar} size={20} />
        </div>
      )}
      <ul style={{ listStyleType: 'none', padding: 0, display: isOpen ? 'block' : 'none' }}>
        
      <li style={{ marginBottom: '15px', marginTop: isMobile ? '20px' : '40px' }}>

          <span style={{ fontSize: '16px' }}>Dashboard</span>
          <ul style={{ listStyleType: 'none', paddingLeft: '0px', marginTop: '5px' }}>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaShoppingCart style={{ marginRight: '10px', color: '#FFA500' }} />
              Media Planning
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          Deals
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaTag style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Deals List
            </li>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <ImWrench style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Deals Health
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          Custom Targeting
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaGlobe style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Sites List
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          Reporting
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaBolt style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Instant Insights
            </li>
            <li style={{ marginBottom: '10px', fontSize: '14px'  }}>
              <FaBolt style={{ marginRight: '10px', color: '#f0f0f0'}} />
              Instant Report Builder
            </li>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaChartBar style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Reports List
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          Admin
          <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
            <li style={{ marginBottom: '10px', fontSize: '14px' }}>
              <FaUsers style={{ marginRight: '10px', color: '#f0f0f0' }} />
              Users
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
