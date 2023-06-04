import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {connect, useSelector} from "react-redux";
import styles from './bottom-bar.module.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {Tooltip} from 'react-bootstrap';
import './bottom-bar.module.css'
import cartImage from '../../../assets/images/shppinCartImg.png'
import * as productAction from "../../../redux/actions/productAction";

function BottomBar({getProductsToCart, user}) {

  const navigate = useNavigate();
  const [countProductToCart, setCountProductToCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userId,setUserId] = useState(localStorage.getItem('user_id'));
  const products = useSelector(state => state.product.productsToCart);

  useEffect(() => {
    setCountProductToCart(products.length);
    let totalPrice = 0;
    products.forEach(({total_price}) => {
      totalPrice = totalPrice + total_price;
    });
    setTotalPrice(totalPrice)
  }, [products]);

  useEffect(() => {
    setUserId(user.id);
    if(!user.id){
      setCountProductToCart(0);
      setTotalPrice(0);
    }
  },[user]);

  useEffect(() => {
    if(userId){
      getProductsToCart(userId)
    }
  },[userId]);

  const renderShopCart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Product Cart
    </Tooltip>
  );

  return (
    <div className={styles.borderBottom}>
      <div className='app-container'>
        <div className={styles.container}>
          <div className={styles.rightMenu}>
            <ul className='list-unstyled d-flex'>
              <li className='mx-2'>CATEGORIES</li>
              <li className='mx-2'>MEGAMENU</li>
              <li className='mx-2'>MULTILEVEL</li>
              <li className='mx-2'>BRANDS</li>
              <li style={{color: 'red'}} className='mx-2'>SPECIALS</li>
            </ul>
          </div>
          <div className='d-flex'>
            <div className={styles.leftMenu}>
              <ul className='list-unstyled d-flex'>
                <li className='mx-2'>ABOUT</li>
                <li className='mx-2'>FAQ</li>
                <li className='mx-2'>CONTACT</li>
                <li className='mx-2'>BLOG</li>
              </ul>
            </div>
            <div>
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                delay={{show: 250, hide: 400}}
                overlay={renderShopCart}
              >
                <div className='d-flex'>
                  <div className='me-2 mx-2 d-flex'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <span>{countProductToCart ? countProductToCart : 0}-item(s) - ${totalPrice ? totalPrice : 0}</span>
                    </div>
                    <div onClick={() => navigate('/card')} className={styles.cartImageContainer}>
                      <img src={cartImage} alt="Cart Image"/>
                    </div>
                  </div>
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
      user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsToCart: (userId) => productAction.getProductsToCart(dispatch,userId),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);