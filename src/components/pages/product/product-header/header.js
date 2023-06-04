import React from 'react';
import styles from './header.module.css'
import car from '../../../../assets/images/pickup-car.png'
import answerIcon from '../../../../assets/images/faq.png'
import callIcon from '../../../../assets/images/phone-call (2).png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className='app-container'>
        <div className={styles.headerTittles}>
          <div>
            <img className='mx-2' src={car} alt="Car Image"/>
            <span>FREE SHIPPING</span>
          </div>
          <div>
            <img className='mx-2' src={callIcon} alt="Call Image"/>
            <span>COLL US NOW</span>
          </div>
          <div>
            <img className='mx-2' src={answerIcon} alt="Answer Image"/>
            <span>ASK A QUESTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
