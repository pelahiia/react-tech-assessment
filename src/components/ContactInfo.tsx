import React, { useState, ChangeEvent } from 'react';
import classNames from 'classnames';
import phonePng from '../images/phone.png';
import mailPng from '../images/mail.png';
import locationPng from '../images/location.png';
import grayCircle from '../images/circleDark.png';
import twitterIcon from '../images/twitter.png';
import instaIcon from '../images/insta.png';
import twichIcon from '../images/twich.png';
import sendImage from '../images/send-image.png';

export const ContactInfo: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  //The states above were created mainly for 2 following reasons: to make controlled inputs and get the values of inputs
  //They are used addElement function, which creates a new element in API and saves user's data, which he / she entered.
  //All function starting wih "handle...Change" update state based on what the user has entered in the input.
  //Variables "...Entered" are equal true if input is not empty.
  //ClassNames  library is used to create an additional class to label and change the color if the label, when uer has entered smth.

  const handleOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleFirstNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const firstNameEntered = !!firstName;

  const handleLastNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const lastNameEntered = !!lastName;

  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const emailEntered = !!email;

  const handleTelChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };
  const telEntered = !!tel;

  const handleMessageChange = (e:ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const messageEntered = !!message;

  // if it was a real page I would create a new element in my API of contact info form the following way:
  // const addElement = async (elementData: any) => {
  //   const response = await fetch('/api/elements', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(elementData),
  //   });
  // };

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const newElement = {
    //   firstName,
    //   lastName,
    //   email,
    //   tel,
    //   selectedOption,
    //   message,
    // };
    // addElement(newElement);
    setFirstName('');
    setLastName('');
    setEmail('');
    setTel('');
    setSelectedOption('');
    setMessage('');
  };
  
  

  return (
    <div className='contact-form'>
      <div className='contact-info'>
        <h1 className='contact-title'>
          Contact Information
        </h1>
        <h2 className='contact-title-info'>
          Say something to start a live chat!
        </h2>
        <div className='contact-items'>
          <div className='contact-item'>
            <img src={phonePng} alt='Phone' className='contact-item-image' />
            <a href='tel:+1012 3456 789' className='contact-item-link'>
              +1012 3456 789
            </a>
          </div>
          <div className='contact-item'>
            <img src={mailPng} alt='Mail' className='contact-item-image' />
            <a href='mailto:demo@gmail.com' className='contact-item-link'>
              demo@gmail.com
            </a>
          </div>
          <div className='contact-item'>
            <img src={locationPng} alt='Pin' className='contact-item-image' />
            <a 
              href='https://goo.gl/maps/rShTbs1LY4eLFL2d6' 
              className='contact-item-link'
              target='blank'
            >
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
          </div>
        </div>
        <div className='social-icons'>
          <a 
            href='https://twitter.com/' 
            target='blank'
            className='social-icon'
          >
            <img src={grayCircle} alt='Twitter' className='social-icon-circle' />
            <img src={twitterIcon} alt='Twitter Icon' className='social-icon-logo twitter' />
          </a>
          <a 
            href='https://www.instagram.com/' 
            target='blank'
            className='social-icon'
          >
            <img src={grayCircle} alt='Insta' className='social-icon-circle' />
            <img src={instaIcon} alt='Insta Icon' className='social-icon-logo insta' />
          </a>
          <a 
            href='https://www.twitch.tv/' 
            target='blank'
            className='social-icon'
          >
            <img src={grayCircle} alt='Twich' className='social-icon-circle' />
            <img src={twichIcon} alt='Twich Icon' className='social-icon-logo twich' />
          </a>
        </div>
        <div className='circle'></div>
        <div className='cropped-circle'></div>
      </div>
      <form 
        className='form-to-fill'
        onSubmit={handleFormSubmit}
      >
        <div className='personal-info'>
          <div className='personal-info-field'>
            <label
              htmlFor='firstname'
              className={classNames('personal-info-label', {
                entered: firstNameEntered,
              })}
            >
              First Name
            </label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              className='personal-info-input'
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className='personal-info-field'>
            <label
              htmlFor='lastname'
              className={classNames('personal-info-label', {
                entered: lastNameEntered,
              })}
            >
              Last Name
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              className='personal-info-input'
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className='personal-info-field'>
            <label
              htmlFor='email'
              className={classNames('personal-info-label', {
                entered: emailEntered,
              })}
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='personal-info-input'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='personal-info-field'>
            <label
              htmlFor='phone'
              className={classNames('personal-info-label', {
                entered: telEntered,
              })}
            >
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='personal-info-input'
              value={tel}
              onChange={handleTelChange}
            />
          </div>
        </div>
        <div className='select-form'>
          <legend className='select-title'>Select Subject?</legend>
          <div className='radio-container'>
            <div className='input-option'>
              <input 
                type='radio' 
                id='inquiry-1' 
                name='inquiry' 
                value='general-inquiry' 
                onChange={handleOptionChange}
              />
              <label htmlFor='inquiry-1' className='input-label'>
                General Inquiry
              </label>
            </div>
            <div className='input-option'>
              <input 
                type='radio' 
                id='inquiry-2' 
                name='inquiry' 
                value='general-inquiry' 
                onChange={handleOptionChange}
              />
              <label htmlFor='inquiry-2' className='input-label'>
                General Inquiry
              </label>
            </div>
            <div className='input-option'>
              <input 
                type='radio' 
                id='inquiry-3' 
                name='inquiry' 
                value='general-inquiry' 
                onChange={handleOptionChange}
              />
              <label htmlFor='inquiry-3' className='input-label'>
                General Inquiry
              </label>
            </div>
            <div className='input-option'>
              <input 
                type='radio' 
                id='inquiry-4' 
                name='inquiry' 
                value='general-inquiry' 
                onChange={handleOptionChange}
              />
              <label htmlFor='inquiry-4' className='input-label'>
                General Inquiry
              </label>
            </div>
          </div>
        </div>
        <div className='message-form'>
          <label
            htmlFor='message'
            className={classNames('personal-info-label', {
              entered: messageEntered,
            })}
          >
            Message
          </label>
          <input
            type='text'
            id='message'
            name='message'
            className='message-input'
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className='button-container'>
          <button className='send-button'>
            Send Message
          </button>
        </div>
        <div className='send-image-container'>
          <img src={sendImage} alt='Send Image' className='send-image' />
        </div>
      </form>
    </div>
  )
};
