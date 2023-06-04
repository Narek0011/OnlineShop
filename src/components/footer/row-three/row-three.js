import React from 'react';
import styles from './row-three.module.css'
import cart from '../../../assets/images/discover.png'

const RowThree = () => {
  return (
    <div className={styles.container}>
      <div className='app-container'>
        <div className='d-flex justify-content-between'>
          <div>
            <span className='fs6'>Copyright © 2019, Your Store, All Rights Reserved</span>
          </div>
          <div className='d-flex'>
            <img className='mx-2' src={cart} alt="Image"/>
            <img className='mx-2' src={cart} alt="Image"/>
            <img className='mx-2' src={cart} alt="Image"/>
            <img className='mx-2' src={cart} alt="Image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowThree;
