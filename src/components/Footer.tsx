import React, { ChangeEvent, useState } from "react";
import phonePng from '../images/phone.png';
import mailPng from '../images/mail.png';
import locationPng from '../images/location.png';

export const Footer: React.FC = () => {
  const [subscription, setSubscription] = useState('');

  // if it was a real page I would create a new element in my API of subscriptions the following way:
  // const addSubscription = async (subscribtion: string) => {
  //   const response = await fetch('/api/subscriptions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email: subscription }),
  //   });
  // };
  
  const handleSubscriptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSubscription(e.target.value);
  };

  const handleSubscriptionSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //addSubscription(subscription);
    setSubscription('');
  };

  return (
    <footer className="footer">
      <a href="/" className="footer-title">
        Logo Here
      </a>
      <div className="footer-content">
        <div className="footer-content-links">
          <div className="reach-us">
            <h2 className="reach-us-title">
              Reach us
            </h2>
            <div className='reach-us-items'>
              <div className='reach-us-item'>
                <img src={phonePng} alt='Phone' className='contact-item-image' />
                <a href='tel:+1012 3456 789' className='reach-us-link'>
                  +1012 3456 789
                </a>
              </div>
              <div className='reach-us-item'>
                <img src={mailPng} alt='Mail' className='contact-item-image' />
                <a href='mailto:demo@gmail.com' className='reach-us-link'>
                  demo@gmail.com
                </a>
              </div>
              <div className='reach-us-item'>
                <img src={locationPng} alt='Pin' className='contact-item-image' />
                <a 
                  href='https://goo.gl/maps/rShTbs1LY4eLFL2d6' 
                  className='reach-us-link'
                  target='blank'
                >
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </a>
              </div>
            </div>
          </div>
          <div className="links">
            <h2 className="links-title">
              Company
            </h2>
            <div className="links-items">
              <a href="/" className="links-item-link">
                About
              </a>
              <a href="/" className="links-item-link">
                Contact
              </a>
              <a href="/" className="links-item-link">
                Blogs
              </a>
            </div>
          </div>
          <div className="links">
            <h2 className="links-title">
                Privacy Policy
            </h2>
            <div className="links-items">
              <a href="/" className="links-item-link">
                Privacy Policy
                </a>
               <a href="/" className="links-item-link">
                Terms & Services
              </a>
              <a href="/" className="links-item-link">
                Terms of Use
              </a>
              <a href="/" className="links-item-link">
                Refund Policy
              </a>
            </div>
          </div>
          <div className="links">
            <h2 className="links-title">
              Quick Links
            </h2>
            <div className="links-items">
              <a href="/" className="links-item-link">
                Techlabz Keybox
              </a>
              <a href="/" className="links-item-link">
                Downloads
              </a>
              <a href="/" className="links-item-link">
                Forum
              </a>
            </div>
          </div>
        </div>
        <div className="join-box">
          <h2 className="join-box-title">
            Join Our Newsletter
          </h2>
          <form className="join-box-subscribtion" onSubmit={handleSubscriptionSubmit}>
            <input 
              type="email" 
              placeholder="Your email address"
              name='email'
              className='join-box-input'
              value={subscription}
              onChange={handleSubscriptionChange}
            />
            <button className="join-box-button"
            >
              Subscribe
            </button>
          </form>
          <p className="subscribe-text">
          *  Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </footer>
  )
};
