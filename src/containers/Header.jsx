import images from '../constants/images'
import React from 'react'
import './header.scss';

const Header = () => {
  return (
    <div className="app__header">
        <div className="app__header-content">
            <h1 className="app__header-content_heading"><span>PUSH</span> YOUR LIMITS</h1>
            <p className='app__header-content_slogan'>Fitness Guru will guide you in shaping your ideal body. Track your progress, adjust your workouts and find the best possible plans to suit your needs.</p>
            <button className='app__header-content_cta'>ENTER THE HUB</button>
        </div>
        <div className="app__header-image">
        <img src={images.squat2} alt="" />
        <div className="image-overlay"></div>
        </div>
    </div>
  );
};

export default Header
