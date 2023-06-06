import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardLine, RiUserLine, RiFileListLine, RiSettingsLine,RiCheckDoubleLine } from 'react-icons/ri';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };

  return (
    <div className="navbar">
      <ul className="nav-items">
        <li>
          <Link className="nav-link" to="/dashboard">
            <span className="icon-bg">
              <RiDashboardLine />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/users">
            <span className="icon-bg">
              <RiUserLine />
            </span>
            <span>Users</span>
          </Link>
        </li>
        <li>
          <div className="nav-item-with-submenu" onClick={toggleExpand}>
              <span className="icon-bg">
                <RiFileListLine className={`arrow-icon ${expanded ? 'expanded' : ''}`}/>
              </span>
              <span  to="/ncr" activeClassName="active">NCR Entry</span>
            </div>
            {expanded && (
              <ul className="sub-menu">
                <li>
                  <Link className="sub-menu-link" to="/ncr/information">NCR Information</Link>
                </li>
                <li>
                  <Link className="sub-menu-link" to="/ncr/actions">Actions</Link>
                </li>
                <li>
                  <Link className="sub-menu-link" to="/ncr/material">Material Information</Link>
                </li>
                <li>
                  <Link className="sub-menu-link" to="/ncr/financial">Financial Information</Link>
                </li>
                <li>
                  <Link className="sub-menu-link" to="/ncr/approver">Approver/Reviewer</Link>
                </li>
              </ul>
            )}
        
        </li>
        <li>
          <Link className="nav-link" to="/approver">
            <span className="icon-bg">
              <RiCheckDoubleLine />
            </span>
            <span>NCR Approver</span>
          </Link>
        </li>
        <li>
          <div className="settings">
            <Link className="nav-link" to="/settings">
              <span className="icon-bg">
                <RiSettingsLine />
              </span>
              <span>Settings</span>
            </Link>
          </div>
        </li>
      </ul>
      <div className="brand-logo">
        <img src="https://www.linkpicture.com/q/ncr-brand.png" alt="Brand Logo" />
      </div>
    </div>
  );
};

export default Navbar;
