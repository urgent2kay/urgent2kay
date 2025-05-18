import React, { useState, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import TemplatePage from '../Template';
import './Electricity.css';

import { useCreateBillMutation } from '../../features/bills/billsApi';

const Electricity: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Existing states
  const [provider, setProvider] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');

  // New states for category and priority
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low'); 

  const [createBill, { isLoading, isError }] = useCreateBillMutation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleBack = () => {
    navigate('/generate-request');
  };

  const handleCreate = async () => {
    if (!provider || !amount || !category) {
      alert('Please fill all required fields: Service Provider, Amount, and Category');
      return;
    }
    if (isNaN(Number(amount))) {
      alert('Please enter a valid number for amount');
      return;
    }

    const userId = 'demo-user-id'; 

    const merchantMap: Record<string, string> = {
      eedc: '68251c852af4abb328d7ea24',
      portharcourt: '68251c852af4abb328d7ea25',
      abakaliki: '68251c852af4abb328d7ea26',
    };

    const merchantId = merchantMap[provider];
    if (!merchantId) {
      alert('Invalid provider selected');
      return;
    }

    const referenceNumber = `ELEC-${Date.now()}`;

    const billPayload = {
      owner: userId,
      merchant: merchantId,
      amount: Number(amount),
      referenceNumber,
      category,
      priority,
    };

    try {
      const createdBill = await createBill(billPayload).unwrap();
      console.log('Created bill:', createdBill);
      navigate('/bill-details', { state: { bill: createdBill } });
    } catch (err) {
      console.error('Create bill failed:', err);
      alert('Failed to create bill. Please try again.');
    }
  };


  const mobileStyles: Record<string, CSSProperties> = {
    main: { padding: '10px 20px' },
    electricityLayout: { display: 'flex', flexDirection: 'column', width: '100%', gap: '15px' },
    electricityRow: { display: 'flex', flexDirection: 'column', gap: '10px' },
    electricitySection: { width: '100%', padding: 0 },
    selectWrapper: { height: '56px', padding: '10px' },
    selectInput: { width: '100%', fontSize: '14px' },
  };

  const desktopCategoryPriorityRow: CSSProperties = { display: 'flex', gap: '20px' };

  return (
    <TemplatePage>
      <div style={{ padding: '10px 20px' }}>
        <button onClick={handleBack} className="back-button">
          ← Back
        </button>
      </div>

      <main className="main-content" style={isMobile ? mobileStyles.main : {}}>
        <div className="electricity-layout" style={isMobile ? mobileStyles.electricityLayout : {}}>
          <div className="electricity-row" style={isMobile ? mobileStyles.electricityRow : {}}>
            <div className="electricity-section" style={isMobile ? mobileStyles.electricitySection : {}}>
              <p className="electricity-label">Service Provider</p>
              <div className="electricity-select-wrapper" style={isMobile ? mobileStyles.selectWrapper : {}}>
                <select
                  className="electricity-select"
                  style={isMobile ? mobileStyles.selectInput : {}}
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                >
                  {isMobile ? (
                    <>
                      <option value="">Select provider</option>
                      <option value="eedc">EEDC</option>
                      <option value="portharcourt">PHEDC</option>
                      <option value="abakaliki">Abakaliki EDC</option>
                    </>
                  ) : (
                    <>
                      <option value="">Select a service provider</option>
                      <option value="eedc">Enugu Electricity Distribution Company (EEDC)</option>
                      <option value="portharcourt">Port Harcourt Electricity Distribution Company (PHEDC)</option>
                      <option value="abakaliki">Abakaliki Electricity Distribution Company</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="electricity-section" style={isMobile ? mobileStyles.electricitySection : {}}>
              <p className="electricity-label">Meter Number (Optional)</p>
              <div className="electricity-select-wrapper" style={isMobile ? mobileStyles.selectWrapper : {}}>
                <input
                  type="text"
                  className="electricity-select"
                  placeholder="Enter meter number"
                  style={isMobile ? mobileStyles.selectInput : {}}
                  value={meterNumber}
                  onChange={(e) => setMeterNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          
          <div
            className="electricity-row"
            style={isMobile ? mobileStyles.electricityRow : desktopCategoryPriorityRow}
          >
            <div className="electricity-section" style={isMobile ? mobileStyles.electricitySection : { flex: 1 }}>
              <p className="electricity-label">Category</p>
              <div className="electricity-select-wrapper" style={isMobile ? mobileStyles.selectWrapper : {}}>
                <select
                  className="electricity-select"
                  style={isMobile ? mobileStyles.selectInput : {}}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select category</option>
                  <option value="rent">Rent</option>
                  <option value="utility">Utility</option>
                  <option value="e-com">E-commerce</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="electricity-section" style={isMobile ? mobileStyles.electricitySection : { flex: 1 }}>
              <p className="electricity-label">Priority</p>
              <div className="electricity-select-wrapper" style={isMobile ? mobileStyles.selectWrapper : {}}>
                <select
                  className="electricity-select"
                  style={isMobile ? mobileStyles.selectInput : {}}
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <p className="electricity-caption">Select Amount</p>

          <div className="amount-container">
            {['1000', '2000', '3000', '4000', '5000', '6000', '7000'].map((amt) => (
              <div
                key={amt}
                className={`amount-box ${selectedAmount === amt ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAmount(amt);
                  setAmount(amt);
                }}
              >
                ₦{amt}
              </div>
            ))}
          </div>

          <div className="enter-amount-wrapper">
            <span className="naira-symbol">₦</span>
            <input
              type="text"
              placeholder="Enter Amount"
              className="enter-amount-box"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedAmount('');
              }}
            />
          </div>

          <div className="create-request-wrapper">
            <button
              className="create-request-button"
              onClick={handleCreate}
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Request Bundle'}
            </button>
          </div>

          {isError && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
              Error creating bill. Please try again.
            </p>
          )}
        </div>
      </main>
    </TemplatePage>
  );
};

export default Electricity;
