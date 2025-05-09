import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { IoIosFlash, IoIosCart, IoIosSchool, IoIosHome, IoIosCall, IoIosNutrition, IoIosCloudDownload, IoIosSend } from 'react-icons/io'; // Updated icon imports
import './GenerateRequest.css';
import rectangle40 from '../assets/rectangle40.png';
import removebg from "../assets/removebg-preview.png";
import gift from "../assets/gift.png";
import woman from "../assets/woman.png";



const GenerateRequest: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-section"> 
        <Header />

        <main className="main-content">
        
          <div
            style={{
              width: '1083px',
              height: '111px',
              borderRadius: '12px',
              background: '#7F669D',
              border: '1px solid #F9FDFD',
              display: 'flex',
              alignItems: 'center',
              padding: '24px',
            }}
          >
            <div
              style={{
                width: '134.2px',
                height: '62.6px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '2px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '87px',
                    height: '15px',
                    fontFamily: 'Archivo',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#F9FDFD',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Available Balance
                </span>
                <Icon
                  icon="iconamoon:eye-light"
                  style={{ width: '19.2px', height: '19.2px', color: '#F9FDFD' }}
                />
              </div>

              <div>
                <span
                  style={{
                    width: '59px',
                    height: '39px',
                    fontFamily: 'Archivo',
                    fontWeight: 700,
                    fontSize: '28px',
                    lineHeight: '140%',
                    color: '#F9FDFD',
                  }}
                >
                  0.00
                </span>
              </div>
            </div>
          </div>

    
          <div
            style={{
              width: '1083px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginTop: '64px',
            }}
          >
       
            <div
              style={{
                width: '416px',
                height: '110px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Archivo',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                Combine bills, subscriptions, and personal needs into one simple request.
              </div>

              <button
                style={{
                  padding: '12px 24px',
                  borderRadius: '58px',
                  background: '#401A6D',
                  color: '#FFFFFF',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '140%',
                  border: 'none',
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Create a Bundle
              </button>
            </div>

            <div
              style={{
                width: '416px',
                height: '110px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Archivo',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#000000',
                }}
              >
                Review and approve bundled requests to send payments directly to service providers.
              </div>

              <button
                style={{
                  padding: '12px 24px',
                  borderRadius: '58px',
                  background: '#FFFFFF',
                  border: '1px solid #6E0AF0',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '140%',
                  color: '#2D2B2B',
                  alignSelf: 'flex-end',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Pay a Bundle
              </button>
            </div>
          </div>

          <div
            style={{
              width: '1083px',
              height: '211px',
              gap: '8px',
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: '94px',
              justifyContent: 'space-between',
              marginBottom:"-40px"
            }}
          >
        
            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosFlash style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Electricity</span>
            </div>

            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosCart style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Shop Online</span>
            </div>

            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosSchool style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>School Fees</span>
            </div>

            <div style={{ width: '68px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosHome style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>House Rent</span>
            </div>

            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosCall style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Airtime</span>
            </div>

            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosNutrition style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Food</span>
            </div>

            <div style={{ width: '72px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosCloudDownload style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Data Top Up</span>
            </div>

            <div style={{ width: '66px', height: '89px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IoIosSend style={{ fontSize: '24px', color: '#7F669D' }} />
              <span>Transfer</span>
            </div>
          </div>
          <div className="suggested-wrapper">
  <div className="suggested-header">Suggested For You</div>
  <div className="suggested-content">
  <div className="suggested-card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
 
  <div className="export40-container" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <img
      src={rectangle40}
      alt="Export 40"
      style={{
        width: '28px',
        height: '128px',
        borderRadius: '8px',
        objectFit: 'cover',
      }}
    />
    <img
      src={removebg}
      alt="Preview"
      style={{
        width: '128px',
        height: '128px',
        borderRadius: '8px',
        objectFit: 'cover',
      }}
    />
  </div>

  <div style={{ width: '167px', height: '89px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div
      style={{
        width: '167px',
        height: '36px',
     
        color: 'black',
        fontFamily: 'Archivo',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '140%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        padding: '4px',
      }}
    >
      Refer a Friend, Earn Together!
    </div>

    <div
      style={{
        width: '167px',
        height: '45px',
        
        color: 'black',
        fontFamily: 'Archivo',
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '140%',
        padding: '6px 8px',
        borderRadius: '4px',
      }}
    >
      For every successful referral, you and your friend both earn ₦1,000 in credits!
    </div>

    <button
      style={{
        width: '91px',
        height: '36px',
        background: '#401A6D',
        color: '#FFFFFF',
        borderRadius: '58px',
        padding: '6px 12px',
        fontFamily: 'Archivo',
        fontWeight: 600,
        fontSize: '12px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '4px',
      }}
    >
      Refer now
    </button>
  </div>
</div>

    
    <div
  style={{
    width: '384px',
    height: '182px',
    borderRadius: '12px',
    border: '1px solid #F9FDFD',
    background: `linear-gradient(180deg, #F9F5FF 0%, #7F669D 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))`,
    display: 'flex',
    padding: '8px',
    boxSizing: 'border-box',
  }}
>
 
  <img
    src={gift} 
    alt="purple gift"
    style={{
      width: '141px',
      height: '173.6px',
      objectFit: 'contain',
      marginRight: '16px',
    }}
  />

  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '26px' }}>

    <div
      style={{
        width: '144px',
        height: '18px',
        fontFamily: 'Archivo',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '140%',
       
        color: 'black',
        padding: '2px 6px',
        borderRadius: '4px',
      }}
    >
      Get ₦500 Free Credits!
    </div>

    <div
      style={{
        width: '167px',
        height: '30px',
        fontFamily: 'Archivo',
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '140%',
        color: '#3D3B3B',
      }}
    >
      Complete your first bundle and get ₦500 free credits.
    </div>

 
    <button
      style={{
        width: '164px',
        height: '36px',
        fontFamily: 'Archivo',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '22.7px',
        color: '#FFFFFF',
        backgroundColor: '#401A6D',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Create request now
    </button>
  </div>
</div>


<div
  style={{
    width: '284px',
    height: '182px',
    borderRadius: '12px',
    border: '1px solid #F9FDFD',
   
    display: 'flex',
    padding: '8px',
    boxSizing: 'border-box',
 
  }}
>

  <img
    src={woman} 
    alt="purple gift"
    style={{
      width: '141px',
      height: '173.6px',
      objectFit: 'contain',
      marginRight: '16px',
    }}
  />

 
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '26px' }}>
  
    <div
      style={{
        width: '144px',
        height: '18px',
        fontFamily: 'Archivo',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '140%',
        marginBottom:"20px",
        color: 'black',
        padding: '2px 6px',
        borderRadius: '4px',
      }}
    >Pay Bills, Get Cashback!
    </div>

   
    <div
      style={{
        width: '167px',
        height: '30px',
        fontFamily: 'Archivo',
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '140%',
        color: '#3D3B3B',
      }}
    >
      Get 10% cashback on all utility bills. Offer ends in 3 days!
    </div>

  </div>
</div>

  </div>
</div>

    </main>
      </div>

      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default GenerateRequest;
