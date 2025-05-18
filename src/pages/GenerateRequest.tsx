
import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

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
import { Icon } from '@iconify/react';
  IoIosSend,
} from "react-icons/io";

import rectangle40 from "../assets/Rectangle40.png";
import removebg from "../assets/removebg-preview.png";
import gift from "../assets/gift.png";
import woman from "../assets/woman.png";


import './GenerateRequest.css';
import './GenerateRequestTwo.css';

import TemplatePage from './Template';

const GenerateRequest: React.FC = () => {
  return (
    <TemplatePage>
      <main className="main-content" style={{ padding: '0 20px' }}>
        <div className="balance-card">
          <div className="balance-content">
            <div className="balance-header">
              <span className="balance-text">Available Balance</span>
              <Icon icon="iconamoon:eye-light" className="icon" />

            </div>
            <span className="balance-amount">₦0.00</span>
          </div>
        </div>

          <div className="request-container">
            <div className="request-item">
              <span className="request-text">
                Combine bills, subscriptions, and personal needs into one simple
                request.
              </span>
              <Link to="/error-404-page"><div className="create-bundle-text">Create a Bundle →</div></Link>
            </div>
            <div className="request-item">
              <span className="request-text">
                Review and approve bundled requests to send payments directly to
                service providers.
              </span>{" "}
              <Link to="/error-404-page">
                <div className="create-bundle-text">
                  Sponsor a Bundle →
                </div>{" "}
              </Link>
            </div>
          </div>

          <div
            className="categories-container"
            style={{
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.334), #F9F9F9)",
              padding: "16px",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: "12px",
            }}
          >
            <Link
              to="/electricity"
              className="category-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="icon-circle">
                <IoIosFlash className="category-icon" />
              </div>
              <span>Electricity</span>
            </Link>
            <Link
              to="/jumia"
              className="category-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="icon-circle">
                <IoIosCart className="category-icon" />
              </div>
              <span>Shop Online</span>
            </Link>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosSchool className="category-icon" />
              </div>
              <span>School Fees</span>
            </div>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosHome className="category-icon" />
              </div>
              <span>House Rent</span>
            </div>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosCall className="category-icon" />
              </div>
              <span>Airtime</span>
            </div>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosNutrition className="category-icon" />
              </div>
              <span>Food</span>
            </div>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosCloudDownload className="category-icon" />
              </div>
              <span>Data Top Up</span>
            </div>
            <div className="category-item">
              <div className="icon-circle">
                <IoIosSend className="category-icon" />
              </div>
              <span>Transfer</span>
            </div>

          </div>
        </div>


        <div className="categories-container">
          <Link to="/electricity" className="category-item">
            <div className="icon-circle"><IoIosFlash className="category-icon" /></div>
            <span>Electricity</span>
          </Link>
          <Link to="/jumia" className="category-item">
            <div className="icon-circle"><IoIosCart className="category-icon" /></div>
            <span>Shop Online</span>
          </Link>
          <div className="category-item"><div className="icon-circle"><IoIosSchool className="category-icon" /></div><span>School Fees</span></div>
          <div className="category-item"><div className="icon-circle"><IoIosHome className="category-icon" /></div><span>House Rent</span></div>
          <div className="category-item"><div className="icon-circle"><IoIosCall className="category-icon" /></div><span>Airtime</span></div>
          <div className="category-item"><div className="icon-circle"><IoIosNutrition className="category-icon" /></div><span>Food</span></div>
          <div className="category-item"><div className="icon-circle"><IoIosCloudDownload className="category-icon" /></div><span>Data Top Up</span></div>
          <div className="category-item"><div className="icon-circle"><IoIosSend className="category-icon" /></div><span>Transfer</span></div>
        </div>

        <div className="suggested-wrapper">
          <div className="suggested-header">Suggested For You</div>
          <div className="suggested-content">
            <div className="suggested-card suggested-card-yellow">
              <div className="export40-container">
                <div className="image-wrapper">
                  <img src={rectangle40} alt="Export 40" className="image-rectangle" />
                  <img src={removebg} alt="Preview" className="image-preview" />
                </div>
              </div>
              <div className="suggested-info">
                <div className="suggested-title">Refer a Friend, Earn Together!</div>
                <div className="suggested-description">
                  For every successful referral, you and your friend both earn ₦1,000 in credits!

                </div>
                <button className="button-refer">Refer now</button>
              </div>
            </div>


            <div className="suggested-card suggested-card-gradient">
              <img src={gift} alt="gift" className="gift-image" />
              <div className="suggested-info">
                <div className="suggested-title">Get ₦500 Free Credits!</div>
                <div className="suggested-description">
                  Complete your first bundle and get ₦500 free credits.

                </div>
                <button className="button-create-request">Create request now</button>
              </div>
            </div>

            <div className="suggested-card suggested-card-woman">
              <img src={woman} alt="woman" className="woman-image" />
              <div className="suggested-info woman-info">
                <div className="suggested-title woman-title">
                  Pay Bills, Get Cashback!
                </div>
                <div className="suggested-description woman-description">
                  Get 10% cashback on all utility bills. Offer ends in 3 days!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </TemplatePage>
  );
};

export default GenerateRequest;
