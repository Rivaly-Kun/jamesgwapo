import React from 'react';

const HomeScreen = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>MyApp</div>
        <nav style={styles.navMenu}>
          <a href="#" style={styles.navItem}>Dashboard</a>
          <a href="#" style={styles.navItem}>Messages</a>
          <a href="#" style={styles.navItem}>Settings</a>
          <a href="#" style={styles.navItem}>Logout</a>
        </nav>
      </div>

      {/* Main Section */}
      <div style={styles.mainContent}>
        {/* Top Navbar */}
        <div style={styles.navbar}>
          <span style={styles.pageTitle}>Home</span>
          <div style={styles.userInfo}>
            <span>👤 gabz@gmail.com</span>
          </div>
        </div>

        {/* Main Area */}
        <div style={styles.content}>
          <h2>Welcome to the Home Screen</h2>
          <p>This is your dashboard. You can customize it as you like.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',             // Ensure it spans full width
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',         // Prevent scrollbars unless content requires it
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#1F2937',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  navItem: {
    color: '#D1D5DB',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background 0.2s',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9FAFB',
    height: '100%',
  },
  navbar: {
    height: '60px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  pageTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: '14px',
    color: '#4B5563',
  },
  content: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
};

export default HomeScreen;
