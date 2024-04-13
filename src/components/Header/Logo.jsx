import React from 'react';
import './logo.css';
import profileimg from '../../images/Trackin-Logo.jpg';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    
    }
  return (
    <div className='d-flex align-items-center justify-content-between' >
        <a href="/" className='logo d-flex align-items-center'>
            <span className='d-none d-lg-block'><img src={profileimg} alt="" /></span>
        </a>
        <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}></i>
    </div>
  )
}

export default Logo