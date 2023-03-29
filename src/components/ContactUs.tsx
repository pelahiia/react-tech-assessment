import React from 'react';
import { ContactInfo } from './ContactInfo';
import { Footer } from './Footer';

export const ContactUs: React.FC = () => {
  return (
    <div className='contact-page'>
      <h1 className='title'>
        Contact Us
      </h1>
      <h2 className='text-under-title'>
        Any question or remarks? Just write us a message!
      </h2>
      <ContactInfo />
      <Footer />
    </div>
  )
};
