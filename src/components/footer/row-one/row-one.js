import React, {useState} from 'react';
import styles from './row-one.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import img1 from '../../../assets/images/footerimg1.png'
import img2 from '../../../assets/images/fotterimg2.png'
import img3 from '../../../assets/images/4-60x60.png'
import img4 from '../../../assets/images/footerImg4.png'
import img5 from '../../../assets/images/image5.jpg'
import addToCardImg from '../../../assets/images/shop-bag16.png'
import heartImg from '../../../assets/images/heart16px.png'


const RowOne = () => {

  const handleSelect = () => {
  };

  const [recentlyViewed] = useState([
    {
      img: img1,
      model: 'Yellow Modern Armchair',
      price: '$38 000'
    },
    {
      img: img2,
      model: 'Yellow Modern Armchair',
      price: '$38 000'
    },
    {
      img: img3,
      model: 'Yellow Modern Armchair',
      price: '$38 000'
    },
    {
      img: img4,
      model: 'Yellow Modern Armchair',
      price: '$38 000'
    },
  ]);

  const [mostViewed] = useState([
    {
      img: img5,
      model: 'Yellow Modern Armchair',
      price: '$88 000'
    },
    {
      img: img2,
      model: 'Head Shoppes',
      price: '$38 000'
    },
    {
      img: img3,
      model: 'Sport Watch',
      price: '$18 000'
    },
    {
      img: img5,
      model: 'Red Formal Watch',
      price: '$39 900'
    },
  ]);

  return (
    <div className={styles.container}>
      <div className='app-container'>
        <div className={styles.tabs}>
          <div>
            <Tabs
              onSelect={handleSelect}
              defaultActiveKey="recentlyViewed"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="recentlyViewed" title="RECENTLY VIEWED">
                <div className={styles.tabChild}>
                  {
                    recentlyViewed.map(({img, model, price}) => (
                      <div key={price + Math.random()} className={styles.dataProducts}>
                        <div>
                          <img src={img} alt="Product Image"/>
                        </div>
                        <div>
                          <div className={styles.model}>{model}</div>
                          <div className={styles.price}>{price}</div>
                          <div className='d-flex'>
                            <img src={heartImg} alt="addToCard"/>
                            <img className='mx-2' src={addToCardImg} alt="addToCard"/>
                            <img src={heartImg} alt="addToCard"/>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </Tab>
              <Tab eventKey="mostViewed" title="MOST VIEWED">
                <div className={styles.tabChild}>
                  {
                    mostViewed.map(({img, model, price}) => (
                      <div key={price + Math.random()} className={styles.dataProducts}>
                        <div>
                          <img src={img} alt="Product Image"/>
                        </div>
                        <div>
                          <div className={styles.model}>{model}</div>
                          <div className={styles.price}>{price}</div>
                          <div className='d-flex'>
                            <img src={heartImg} alt="addToCard"/>
                            <img className='mx-2' src={addToCardImg} alt="addToCard"/>
                            <img src={heartImg} alt="addToCard"/>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowOne;
