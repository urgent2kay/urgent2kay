import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import smiling from '../../assets/smiling.png';
import Frame from '../../assets/Frame4507.png';
import './LandingPage.css'





const LandingPage: React.FC = () => {
    const howItWorksRef = useRef<HTMLElement | null>(null);
     
    const scrollToSection = () => {
        howItWorksRef.current?.scrollIntoView({ behavior: 'smooth'});
    };


  return (
    <div className='landingpage-container'>
        <section className='navbar' >
        <img className='urgent2kay-logo' src={logo} alt='urgent2kay logo'/>
            <div className='nav-buttons'>  
                <Link to='/login'><button className='sign-btn'>Sign In</button></Link>   
                <Link to='/sign-up'><button className='join-btn'>Join Urgent2kay</button></Link>   
            </div>
        </section>


        <section className='hero' id='hero'>
            <div>
              <h1>Bundle Bills, Send Requests, Track Payments— <span style={{color:'#E8BF31'}}>All in One Place.</span></h1>
              <p>Simplify your finances with URGENT 2KAY. Combine expenses, request funds from sponsors, and ensure payments go exactly where they’re needed.</p>
                    <div className='cta-buttons'>
                      <Link to='/sign-up'><button className='get-started-btn'>Get Started</button></Link> 
                      <button onClick={scrollToSection} className='learn-more-btn'>Learn More</button>
                    </div>
            </div>
            <div className='hero-images'>
                <img src={smiling} alt='Smiling person' className='smiling-img'/>
                <img src={Frame} alt='Frame' className='frame-img'/>
            </div>
        </section>


        <section className='how-it-works' id='how-it-works' ref={howItWorksRef}>
                <div className='how-it-works-details'>
                    <p>How  urgent  2KAY Works</p>
                    <div className='how-it-works-icons'>
                        <img/>
                        <img/>
                        <img/>
                    </div>
                    <div className='how-it-works-texts'>
                        <p>Make a Request- Tell us what bill you need help with (school, fees, rent, hospital bills, etc).</p>
                        <p>Sponsors pay directly to the service provider. no middleman wahala</p>
                        <p>Bill Settled!- You’re stress-free. No begging. No embarrassment.</p>
                    </div>
                </div>
                <img/>
        </section>


        <section className='why-choose' id='why-choose'>
        <div className='why-choose-container'>
                <img/>
                <div className='why-choose-details'>
                    <p>Why Choose Urgent 2KAY?</p>
                    <div className='why-choose-icons'>
                        <img/>
                        <img/>
                        <img/>
                        <img/>
                    </div>
                    <div className='why-choose-texts'>
                        <p>No More Awkwardness:
                        Ask for help the smart way.</p>
                        <p>Secure Transactions:
                        Money goes straight to the bills- not through the requester.</p>
                        <p>Fast & Easy:
                        Request, sponsor, and settle bills in minutes.</p>
                        <p>Made for Every Nigeria:
                        Whether it’s school fees, hospital bills, or rent- we’ve got you.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='get-started' id='get-started'>
            

        </section>


        <section className='partner' id="partner">

        </section>
        <footer>

        </footer>


    </div>
  );
};

export default LandingPage;