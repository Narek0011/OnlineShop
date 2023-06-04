import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './row-one.css'
import carousel1 from '../../../assets/images/carousel1.jpg'
import carousel2 from '../../../assets/images/combiune2.jpg'

const RowOne = () => {
  const images = [
    {
      src:carousel1,
      background: 'rgba(219, 232, 242, 1)',
      title:'Interior',
      text:'NEW COLLECTION',
    },
    {
      src:carousel2,
      background: 'rgb(20,92,120)',
      title:'LIGHTLINK',
      text:'MODERN LAMPS',
    },
    {
      src:carousel2,
      background: 'rgba(20,102,120,1)',
      title:'RELAXING',
      text:'ESSENTIAL COMFORT',
    }
  ];


  return (
      <div className="carousel-container">
        <Carousel interval={null}>
          {
            images.map(({src,title,text,background}) => (
              <Carousel.Item key={text} style={{backgroundColor:background}}>
                <div style={{maxWidth:1280}}>
                  <img className="image-styles" src={src} alt="First slide" />
                  <Carousel.Caption>
                    <div className='info-container'>
                      <div className='title'>
                        <h3 className='titleText'>{title}</h3>
                      </div>
                      <div className='text-container'>
                        <div className='text'>
                          {text}
                        </div>
                      </div>
                      <div className='buttons-container'>
                        <button className='learn-more'>LEARN MORE</button>
                        <button className='shop-now'>SHOP NOW</button>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>

              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
  );
};

export default RowOne;
