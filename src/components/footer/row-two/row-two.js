import React from 'react';
import styles from './row-two.module.css'
import imgFacebook from '../../../assets/images/facebook32.png'
import imgTwitter from '../../../assets/images/twitter (1).png'
import imgInstagram from '../../../assets/images/instagram (1).png'
import imgSkype  from '../../../assets/images/skype.png'
import imgWhatsapp  from '../../../assets/images/whatsapp (1).png'

const RowTwo = () => {
  return (
    <div className={styles.container}>
      <div className='app-container'>
        <div className='d-flex justify-content-between'>
          <div>
            <h4 className={styles.title}>Custom Links</h4>
            <div className={styles.customLinks}>About Us</div>
            <div className={styles.customLinks}>Delivery</div>
            <div className={styles.customLinks}>Privacy Policy</div>
            <div className={styles.customLinks}>Terms & Conditions</div>
            <div className={styles.customLinks}>Custom Links</div>
          </div>
          <div>
            <h4 className={styles.title}>My Account</h4>
            <div className={styles.customLinks}>My Account</div>
            <div className={styles.customLinks}>Newsletter</div>
            <div className={styles.customLinks}>Privacy Policy</div>
            <div className={styles.customLinks}>Terms & Conditions</div>
            <div className={styles.customLinks}>Newsletter Links</div>
          </div>
          <div>
            <h4 className={styles.title}>Customer Service</h4>
            <div className={styles.customLinks}>Contact</div>
            <div className={styles.customLinks}>Returns</div>
            <div className={styles.customLinks}>Site Map</div>
            <div className={styles.customLinks}>Brands</div>
            <div className={styles.customLinks}>Unlimited Links</div>
          </div>
          <div className={styles.partFor}>
            <h4 className={styles.title}>Newsletter</h4>
            <div className={styles.customLinks}>Don't miss any updates or promotions by signing up <br/> to our newsletter.</div>
            <div className="input-group mb-2 mr-sm-2">
              <input type="text" className="form-control rounded-0" id="inlineFormInputGroupUsername2" placeholder="Your Email"/>
              <div className="input-group-prepend">
                <button className="input-group-text rounded-0 bg-light">Send</button>
              </div>
            </div>
            <div className='d-flex mt-3 justify-content-start'>
              <input type="checkbox"/>
              <span className='text-light fs-6 mx-2'>
                I have read and agree to the <a className='text-light' href="#">Privacy Policy</a>
              </span>
            </div>
            <div className='d-flex mt-4'>
              <img className='mx-2' src={imgFacebook} alt="Image"/>
              <img className='mx-2' src={imgTwitter} alt="Image"/>
              <img className='mx-2' src={imgInstagram} alt="Image"/>
              <img className='mx-2' src={imgSkype} alt="Image"/>
              <img className='mx-2' src={imgWhatsapp} alt="Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowTwo;
