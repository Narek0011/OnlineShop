import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './product.module.css'
import Header from "./product-header/header";
import LinkToHome from '../../pages/card/card-header/header';
import check from '../../../assets/images/check.png'
import sarah from '../../../assets/images/sarah.jpg'
import {BsFillCartCheckFill} from 'react-icons/bs';
import heart from '../../../assets/images/heart16px.png';
import compare from '../../../assets/images/compareNew.png';
import Description from "./descrtiption/description";
import Specifications from "./specifications/specifications";
import * as productAction from "../../../redux/actions/productAction";
import {connect} from "react-redux";

const Product = ({product, getProduct, addDataProductToCart}) => {

  const params = useParams();
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState({count: 1});

  useEffect(() => {
    getProduct(params.id)
  }, []);

  const addToCart = async () => {
    if(localStorage.getItem('user_id')){
      addDataProductToCart({...dataProduct,user_id:localStorage.getItem('user_id')})
        .then(() => {
          navigate('/')
        });
    }else{
      alert('Login/Signup')
    }
  };

  const handleCheck = (color) => {
    setDataProduct({...dataProduct, color_id: color.id, product_id: params.id})
  };

  const countProduct = (event) => {
    const newValue = +event.target.value;
    setDataProduct({...dataProduct, count: newValue})
  };

  return (
    <div>
      <LinkToHome/>
      <Header/>
      <div className='app-container'>
        <div>
          {
            !product ? 'loading' : (<div className='d-flex mt-5 mb-5'>
              <div className={styles.productImage}>
                <img style={{width: 572}} src={product[0].images ? product[0].images[0].image : null}
                     alt="Product image"/>
              </div>
              <div className='mx-4 w-100'>
                <div className={styles.tittle}>s
                  <h1>{product[0].model}</h1>
                </div>
                <div className={styles.rating}>
                  <span>✰✰✰✰✰<a className='mx-2' href="#">Based on 0 reviews.</a> <a
                    href="#"> -Write a review</a></span>
                </div>
                <div className={styles.dateProduct}>
                  <div>
                    <div className={styles.productPrice}>
                      ${product[0].price}
                    </div>
                    <div>
                      Ex Tax: ${product[0].price}
                    </div>
                  </div>
                  <div className={styles.block2}>
                    <div>
                      <img src={check} alt="#"/>
                      <span>IN STOCK</span>
                    </div>
                    <div>
                      <ul>
                        <li>Model: {product[0].model}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className={styles.modelContainer}>
                      <div>
                        <img src={sarah} alt="#"/>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <a className={styles.modelName} href='#'>Sarah Bloom</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.addToCart}>
                  <div className='mt-3'>
                    <div className={styles.size}>
                      <span>Color</span>
                    </div>
                    <div className='d-flex'>
                      {
                        product[0].color.length && product[0].color.map(item => (
                          <div
                            key={Math.random()}
                            className={ dataProduct.color_id === item.id ? styles.colorContainer2 + ' ' + styles.active :styles.colorContainer2}
                            style={{backgroundColor: item.color.toString()}}>
                            <input
                              onClick={() => handleCheck(item)}
                              style={{opacity: 0}}
                              type="radio"
                              name='1'
                              className='w-100 h-100'
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <input
                          type="number"
                          min="1"
                          defaultValue='1'
                          onChange={countProduct}
                          className={styles.inputNumber}
                        />
                      </div>
                      <div>
                        <button
                          className={dataProduct.color_id ? styles.addCardBtn : styles.addCardBtn + ' ' + styles.myDiv}>
                          <div onClick={addToCart} className='d-flex justify-content-center'>
                            <BsFillCartCheckFill/>
                            <span className='mx-2'>ADD TO CARD</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className={styles.byeBtn}>
                          <div className='d-flex justify-content-center'>
                            <BsFillCartCheckFill/>
                            <span className='mx-2'>BYE NOW</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className='mt-3 d-flex justify-content-between'>
                      <div>
                        <button className={styles.bottomBtn}>
                          <div className='d-flex justify-content-center'>
                            <img src={heart} alt="#"/>
                            <span>ADD TO WISH LIST</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className={styles.bottomBtn}>
                          <div className='d-flex justify-content-center'>
                            <img src={compare} alt="#"/>
                            <span>COMPARE THIS PRODUCT</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          }
          <div>
            <div className={styles.tabsContainer}>
              <div>
                <Tabs
                  defaultActiveKey="DESCRIPTION"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  style={{display: 'flex', justifyContent: 'center'}}
                >
                  <Tab eventKey="DESCRIPTION" title="DESCRIPTION">
                    <Description/>
                  </Tab>
                  <Tab eventKey="SPECIFICATIONS" title="SPECIFICATIONS">
                    <Specifications/>
                  </Tab>
                  <Tab eventKey="REVIEWS" title="REVIEWS">
                    <div className='mt-3'>There are no reviews for this product.</div>
                    <div className='mt-3'>WRITE A REVIEW</div>
                    <div className='mt-3'>Please login or register to review</div>

                  </Tab>
                  <Tab eventKey="CUSTOM TABS" title="CUSTOM TABS">
                    CUSTOM TABS
                  </Tab>
                  <Tab eventKey="VIDEOS" title="VIDEOS">
                    <video style={{width: 320, height: 200}} controls>
                      <source src="https://youtu.be/Z4uiBxkOZQo" type="video/mp4"/>
                    </video>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    product: state.product.product.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: (params) => productAction.getProduct(dispatch, params),
    addDataProductToCart: (params) => productAction.addDataProductToCart(dispatch, params),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);