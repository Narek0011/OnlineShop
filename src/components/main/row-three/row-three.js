import React from 'react';
import styles from './row-three.module.css'
import image1 from '../../../assets/images/row-treeimage1.jpg'
import image2 from '../../../assets/images/row3image2.jpg'
import image3 from '../../../assets/images/row3image3.jpeg'
import image4 from '../../../assets/images/row3image4.jpg'
import image5 from '../../../assets/images/row3image5.jpg'

const RowThree = () => {

  const images = [
    {img:image1,btn:'ARMCHAIR'},
    {img:image2,btn:'DECOR'},
    {img:image3,btn:'LAMPS'},
    {img:image4,btn:'SOFA'},
    {img:image5,btn:'TABLES'},
  ];
  return (

    <div className={styles.container}>
      <div className={styles.containerChild}>
        <div>
          <h3 className={styles.title}>Top Categories</h3>
        </div>
        <div className={styles.imagesContainer}>
          {
            images.map(({img,btn}) => (
              <div key={btn} className={styles.imageContainerChild}>
                <div style={{maxWidth: 239, maxHeight: '100%', overflow: 'hidden'}}>
                  <img src={img} alt="Image" className={styles.image}/>
                </div>
                <button className={styles.imageBtn}>{btn}</button>
                <div className={styles.seProduct}>
                  Se products ➞
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RowThree;
