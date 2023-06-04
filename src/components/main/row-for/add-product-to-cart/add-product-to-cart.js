import React, {useEffect, useState} from 'react';
import {MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody,} from 'mdb-react-ui-kit';
import styles from './add-product-to-cart.module.css'
import addToCard from "../../../../assets/images/add-to-basket (1).png";
import * as productAction from "../../../../redux/actions/productAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import '../../../../assets/css/confirm.css'

const AddProductToCart = ({showModal, setShowModal, productColors,  productId, addDataProductToCart}) => {

  const [dataProduct, setDataProduct] = useState({count: 1});
  const navigate = useNavigate();

  const handleCheck = (color) => {
    setDataProduct({...dataProduct, color_id: color.id, product_id: productId})
  };

  const countProduct = (event) => {
    const newValue = +event.target.value;
    setDataProduct({...dataProduct, count: newValue});
  };

  const addToCart = () => {
    if(localStorage.getItem('user_id')){
      addDataProductToCart({...dataProduct,  user_id: localStorage.getItem('user_id')});
      setShowModal(false)
    }else{
      if (window.confirm('Please enter your email and password to continue.')) {
        navigate('/login')
      }
    }
  };

  useEffect(() => {
    if (!showModal) {
      setDataProduct({count: 1})
    }
  }, [showModal]);


  return (
    <div>
      <MDBModal tabIndex='-1' show={showModal} setShow={setShowModal}>
        <MDBModalDialog size='fullscreen-xl-down'>
          <MDBModalContent>
            <MDBModalBody>
              <div className='mx-5'>
                <div>
                  <h3>Available Options</h3>
                </div>
                <div>
                  <div>
                    <span>
                      Color
                    </span>
                  </div>
                  <div className='d-flex'>
                    {
                      productColors.length && productColors.map(item => (
                        <div
                          key={Math.random()}
                          className={ dataProduct.color_id === item.id ? styles.colorContainer + ' ' + styles.active :styles.colorContainer}
                          style={{backgroundColor: item.color.toString()}}
                        >
                          <input
                            onClick={() => handleCheck(item)}
                            style={{opacity: 0,cursor:'pointer'}}
                            type="radio"
                            name='1'
                            className='w-100 h-100'
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className='d-flex' style={{width: 380}}>
                  <div className='countProduct' style={{marginTop: 10}}>
                    <input
                      type="number"
                      defaultValue='1'
                      min="1"
                      onChange={countProduct}
                    />
                  </div>
                  <div
                    onClick={addToCart}
                    className={dataProduct.color_id ? styles.addToCartBtn : styles.addToCartBtn + ' ' + styles.myDiv}
                  >
                    <img
                      src={addToCard}
                      alt="Cart Image"
                    />
                    <span
                      style={{cursor: 'pointer'}}
                      className='text-white'
                    >
                      ADD TO CART
                    </span>
                  </div>
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    addDataProductToCart: (data) => productAction.addDataProductToCart(dispatch, data),
  }
};

export default connect(null, mapDispatchToProps)(AddProductToCart);