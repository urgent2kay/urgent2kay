import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import './Header.css';

const Header: React.FC = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifBtnRef = useRef<HTMLDivElement>(null);
  const profileBtnRef = useRef<HTMLDivElement>(null);

  const [notifPos, setNotifPos] = useState<DOMRect | null>(null);
  const [profilePos, setProfilePos] = useState<DOMRect | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node) &&
          notifBtnRef.current && !notifBtnRef.current.contains(event.target as Node)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node) &&
          profileBtnRef.current && !profileBtnRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (notificationOpen && notifBtnRef.current) {
      setNotifPos(notifBtnRef.current.getBoundingClientRect());
    } else {
      setNotifPos(null);
    }
  }, [notificationOpen]);

  useEffect(() => {
    if (profileOpen && profileBtnRef.current) {
      setProfilePos(profileBtnRef.current.getBoundingClientRect());
    } else {
      setProfilePos(null);
    }
  }, [profileOpen]);

  const toggleNotification = () => {
    setNotificationOpen(prev => {
      const newState = !prev;
      if (newState) setProfileOpen(false);
      return newState;
    });
  };

  const toggleProfile = () => {
    setProfileOpen(prev => {
      const newState = !prev;
      if (newState) setNotificationOpen(false);
      return newState;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderDropdown = (content: React.ReactNode, position: DOMRect | null) => {
    if (!position) return null;
    return ReactDOM.createPortal(
      <div
        className="portal-dropdown"
        style={{
          top: position.bottom + window.scrollY + 8,
          left: position.left + window.scrollX,
        }}
      >
        {content}
      </div>,
      document.body
    );
  };

  return (
    <header className="header">
      <div className="header-left">
        <div>
          <h2
  className="mb-0 d-none d-sm-block"
  style={{ fontSize: '16px', color: '#333' }}
>
  Hi, Ada
</h2>

        <p
  className="mb-0 text-secondary d-none d-sm-block"
  style={{ fontSize: '12px' }}
>
  Let’s simplify your finances!
</p>

        </div>

        <div className="search-bar2">
          <div className="search-input-container">
            <FaSearch className="text-muted" style={{ fontSize: '14px' }} />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        <Button
          variant="dark"
          size="sm"
          className="me-2 rounded-2"
        >
          Connect Wallet
        </Button>

        <div
          ref={notifBtnRef}
          onClick={toggleNotification}
          className="icon-button"
          aria-label="Toggle notifications"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') toggleNotification(); }}
        >
          <FaBell />
        </div>

        <div
          ref={profileBtnRef}
          onClick={toggleProfile}
          className="icon-button profile"
          aria-label="Toggle profile menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') toggleProfile(); }}
        >
          <FaUser />
        </div>

        {notificationOpen &&
          renderDropdown(
            <div ref={notifRef}>
              <p>Notification 1</p>
              <hr />
              <p>Notification 2</p>
            </div>,
            notifPos
          )}

        {profileOpen &&
          renderDropdown(
            <div ref={profileRef}>
              <p>Profile Settings</p>
              <hr />
              <p onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</p>
            </div>,
            profilePos
          )}
      </div>
    </header>
  );
};

export default Header;
