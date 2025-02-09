import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './AdminLayout.module.css';
import { FaHome, FaSave, FaTachometerAlt, FaChartLine, FaChartBar, FaFileAlt, FaProjectDiagram, FaQuestionCircle, FaCog, FaTimes, FaBars } from 'react-icons/fa';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.adminLayout}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.logo}>Logo</span>
          <div className={styles.closeButton} onClick={toggleSidebar}>
            <FaTimes />
          </div>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/admin" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaHome /> Home</NavLink></li>
            <li><NavLink to="/admin/saved" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaSave /> Saved  <span className={styles.notification}>24</span> </NavLink></li>
            <li className={styles.dropdown}>
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaTachometerAlt /> Dashboard</NavLink>
              <ul className={styles.dropdownContent}>
                <li><NavLink to="/admin/trends" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaChartLine /> Trends</NavLink></li>
                <li><NavLink to="/admin/analytics" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaChartBar /> Analytics</NavLink></li>
                <li><NavLink to="/admin/historical" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaFileAlt /> Historical</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/admin/projects" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaProjectDiagram /> Projects</NavLink></li>
            <li><NavLink to="/admin/documents" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}> <FaFileAlt /> Documents</NavLink></li>
          </ul>
        </nav>
        <div className={styles.footerLinks}>
          <NavLink to="/admin/support" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaQuestionCircle /> Support</NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}><FaCog /> Settings</NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        <div className={styles.header}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
          </div>
          <div className={styles.userActions}>
            <span>🔔</span> {/* Notification icon */}
            <span>👤 Name Surname</span> {/* User info */}
          </div>
        </div>
        <div className={styles.pageContent}>
          <div className={styles.mainContent}>
            Click and paste Main Content
            <Outlet />
          </div>
          <div className={styles.secondaryContent}>
            Click and paste Secondary Content
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;