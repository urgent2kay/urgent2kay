import { urgent2Kay } from '../../../assets';
import { padlock } from '../../../assets';
import { arrow } from '../../../assets';
import { chaticon } from '../../../assets';
import './login.css'
const LoginPage  = () => {
    return(
    <div className='login-container'>
       <section className='left-content'>
        <div className="left-box">
            <div className="urgent2Kay chat-icon">
                <img src={chaticon} alt="urgent2Kay chat icon" />
            </div>
            <div className="login-head">
                <div className='urgent2Kay logo'>
                    <img src={urgent2Kay} alt="urgent2Kay logo" />
                </div>
                <div className='login-header'>
                    <h1>Login</h1>
                </div>
            </div>
            <div className="login-details">
                <div className="log-num">
                    <input type="number" id='number' placeholder='+234' /> 
                    <div className="line"></div>
                </div>
                
                <div className="log-forgot">
                    <img src={padlock} alt="lock" className='padlock' />
                    <input type="password" id='password' />
                    <a className="forgot">FORGOT</a>
                </div>
            </div>

            <div className="login-btn">
                <button type='submit'>Login</button>
                <img src={arrow} alt="arrow key" className="arrow-key" />
            </div>
            <div className="No-account">
                <p>Don't have an account? <a href="#" id='sign'>Click here to Sign Up</a></p>

            </div>
        </div>
        
       </section>

       <section className='right-content'>
        
        <section className='glassmorphism'>
        <div className='upper-content'>
            <h2>Welcome to Urgent 2k</h2>
           <div>
           <p>Skip the hassle. Send & pay bills in one click.</p>
           <p>No more scattered requests or late fees—just simple, direct payments.</p>
           </div>
           
        </div>
        <div className="No-rt-account">
            <p>Don't have an account? <br/>
            <a href="#"> Sign Up</a></p>
        </div>
        </section>
    
       </section>
    </div>       
    )
}

export default LoginPage;