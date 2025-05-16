import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VerifyEmail.css'; 

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      toast.error('Invalid verification link.');
      return;
    }

    axios.get(`https://urgent2kay.onrender.com/api/auth/verify-email?token=${token}`)
    
      .then(() => {
        toast.success('✅ Email verified successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      })
      .catch(() => {
        toast.error('❌ Email verification failed. The link may be invalid or expired.');
      });
  }, [searchParams, navigate]);

  return (
    <div className="verify-container">
      <h2>Email Verification</h2>
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default VerifyEmail;
