import React from 'react';
import styles from './row-two.module.css'
import image1 from '../../../assets/images/row2image1.jpeg'
import image2 from '../../../assets/images/row2image2.jpg'
import image3 from '../../../assets/images/row2image3.jpg'
import image4 from '../../../assets/images/row2image4.png'
import image5 from '../../../assets/images/row2image5.png'

const RowTwo = () => {
  return (
    <div className='app-container'>
      <div className={styles.container}>
        <div className={styles.containerChild}>
          <div className={styles.imageOne}>
            <img src={image1} alt="Image"/>
            <button className={styles.imageOneBtn}>SOFA</button>
          </div>
          <div className={styles.imageTwo}>
            <img src={image2} alt="Image"/>
            <button className={styles.imageTwoBtn}>LAMP</button>
          </div>
          <div>
            <div className={styles.imageThree}>
              <img src={image3} alt="Image"/>
              <button className={styles.imageThreeBtn}>DESK</button>
            </div>
            <div style={{display:"flex"}}>
              <div className={styles.imageFor}>
                <img src={image4} alt="Image"/>
                <button className={styles.imageForBtn}>SALE</button>
              </div>
              <div className={styles.imageFife}>
                <img src={image5} alt="Image"/>
                <button className={styles.imageFifeBtn}>ACCESSORIES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RowTwo;
