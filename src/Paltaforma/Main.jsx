import React, { useState } from 'react';
import StartPage from './StartPage';
import VehiclesPage from './VehiclesPage';
import DriversPage from './DriversPage';
import AboutBusinessPage from './AboutBusinessPage';
import CoveragesPage from './CoveragesPages';
import './forma.css';
import headerlogo from '../Pages/images/colorlogo.png';

function Main() {
  const [selectedPage, setSelectedPage] = useState('start');
  const [icons, setIcons] = useState({
    start: "fa-regular fa-circle",
    vehicles: "fa-regular fa-circle",
    drivers: "fa-regular fa-circle",
    about: "fa-regular fa-circle",
    coverages: "fa-regular fa-circle",
  });

  const changeIcon = (page, newIcon) => {
    setIcons((prevIcons) => ({
      ...prevIcons,
      [page]: newIcon,
    }));
  };

  const handleNavigationClick = (page) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'start':
        return <StartPage changeIcon={(newIcon) => changeIcon('start', newIcon)} handleNavigationClick={handleNavigationClick} />;
      case 'vehicles':
        return <VehiclesPage changeIcon={(newIcon) => changeIcon('vehicles', newIcon)} handleNavigationClick={handleNavigationClick} />;
      case 'drivers':
        return <DriversPage changeIcon={(newIcon) => changeIcon('drivers', newIcon)} handleNavigationClick={handleNavigationClick} />;
      case 'about':
        return <AboutBusinessPage changeIcon={(newIcon) => changeIcon('about', newIcon)} handleNavigationClick={handleNavigationClick} />;
      case 'coverages':
        return <CoveragesPage changeIcon={(newIcon) => changeIcon('coverages', newIcon)} handleNavigationClick={handleNavigationClick} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="main_header_section">
        <div className="Header_text">
          <img src={headerlogo} alt="headerlogo" width='100px' className="header_logo pe-3" />
          <span className="onboarding">Broker/Carrier Agreement
          </span>
        </div>
      </div>

      <div className="header_body_section">
        <div className="Navbar_section">
          <nav className="navbar navbar-expand-lg navbar-expand-sm nav1">
            <ul className="navbar-nav">
              <li className={`nav-item  ${selectedPage === 'start' ? 'activateding' : ''}`}>
                <a className="nav-link" >
                  <i className={`fa--regular ${icons.start}`}></i> &nbsp; 1. Carrier Info
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'vehicles' ? 'activateding' : ''}`}>
                <a  className="nav-link" >
                  <i className={`fa--regular ${icons.vehicles}`}></i> &nbsp; 2. Conditions
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'drivers' ? 'activateding' : ''}`}>
                <a  className="nav-link" >
                  <i className={`fa--regular ${icons.drivers}`}></i> &nbsp; 3. Agrement Info
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'about' ? 'activateding' : ''}`}>
                <a  className="nav-link" >
                  <i className={`fa--regular ${icons.about}`}></i> &nbsp; 4. Agrement
                </a>
              </li>
              <li className={`nav-item ${selectedPage === 'coverages' ? 'activateding' : ''}`}>
                <a  className="nav-link" >
                  <i className={`fa--regular ${icons.coverages}`}></i> &nbsp; 5. Done
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Forma_components">{renderPage()}</div>
      </div>
    </>
  );
}

export default Main;
