import React from 'react';
import { Link } from 'react-router-dom';
import "./BillPage.css"
import {
  IoIosFlash,
  IoIosCart,
  IoIosSchool,
  IoIosHome,
  IoIosCall,
  IoIosNutrition,
  IoIosCloudDownload,
  IoIosSend
} from 'react-icons/io';

import '../GenerateRequest.css';
import '../GenerateRequestTwo.css';

import TemplatePage from '../Template';

const BillPage: React.FC = () => {
  return (
    <TemplatePage>
      <main className="main-content" style={{ padding: '0 20px' }}>
        {/* Most Popular Section */}
        <h3>Most Popular</h3>
        <div className="most-popular-container">
          <Link to="/electricity" className="category-item">
            <div className="icon-circle"><IoIosFlash className="category-icon" /></div>
            <span className='spans'>Electricity</span>
          </Link>
          <Link to="/jumia" className="category-item">
            <div className="icon-circle"><IoIosCart className="category-icon" /></div>
            <span className='spans'>Shop Online</span>
          </Link>
        </div>

        {/* All Services Section */}
        <h3>All Services</h3>
        <div className="categories-container">
          <div className="category-item">
            <div className="icon-circle"><IoIosSchool className="category-icon" /></div>
            <span className='spans'>School Fees</span>
          </div>
          <div className="category-item">
            <div className="icon-circle"><IoIosHome className="category-icon" /></div>
            <span className='spans'>House Rent</span>
          </div>
          <div className="category-item">
            <div className="icon-circle"><IoIosCall className="category-icon" /></div>
            <span className='spans'>Airtime</span>
          </div>
          <div className="category-item">
            <div className="icon-circle"><IoIosNutrition className="category-icon" /></div>
            <span className='spans'>Food</span>
          </div>
          <div className="category-item">
            <div className="icon-circle"><IoIosCloudDownload className="category-icon" /></div>
            <span className='spans'>Data Top Up</span>
          </div>
          <div className="category-item">
            <div className="icon-circle"><IoIosSend className="category-icon" /></div>
            <span className='spans'>Transfer</span>
          </div>
        </div>
      </main>
    </TemplatePage>
  );
};

export default BillPage;
