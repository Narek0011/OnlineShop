import React, {useEffect, useState} from 'react';
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import styles from './card.module.css'
import Header from "./card-header/header";
import updateIcon from '../../../assets/images/updated.png'
import * as productAction from "../../../redux/actions/productAction";
import {toast} from "react-toastify";

const Card = ({products, getProductsToCart, deleteProductsToCart, updateProductToCart, user, checkout}) => {

  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  const [newData, setNewData] = useState({});
  const [totalPrice, setTotalPrice,] = useState(0);
  const [isDisabled, setIsDisabled,] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));
  const productsCart = useSelector(state => state.product.productsToCart);

  useEffect(() => {
    if (user.user.id) {
      setUserId(user.user.id);
    }
  }, [user]);

  useEffect(() => {
    let totalPrice = 0;
    productsCart.forEach(({total_price}) => {
      totalPrice = totalPrice + total_price;
    });
    setTotalPrice(totalPrice)
  }, [productsCart]);

  useEffect(() => {
    if (userId) {
      getProductsToCart(userId)
    }
  }, []);

  useEffect(() => {
    setProductsList(products)
  }, [products]);

  const onChangeCount = (e, id) => {
    setNewData({count: e.target.value, id: id});
    setProductsList((current) => current.map(item => {
      if (item.id === id) {
        item.count = e.target.value;
        return item
      }
      return item
    }))
  };

  const updateCount = () => {
    if (newData.id) {
      updateProductToCart(newData).then(() => {
        toast.success('Product updates successfully')
      })
    }
  };

  useEffect(() => {
    if (!user.user.id) {
      setProductsList([]);
      setTotalPrice(0)
    }
  }, [user]);

  const goCheckout = () => {
    checkout().then(() => {
      setIsDisabled(true)
    }).finally(() => {
      setIsDisabled(false)
    })
  }

  const deleteProduct = (id) => {
    deleteProductsToCart(id).then(() => {
      toast.success('Product deleted successfully')
    })
  }

  return (
    <>
      <Header/>
      <div className='app-container'>
        <div className='mt-3 mb-4'>
          <div className={styles.title}>
            <h1 className={styles.titleText}>Shopping Cart</h1>
          </div>
          <div className='d-flex'>
            {
              productsList.length ? (
                  <table className="table table-hover">
                    <thead>
                    <tr>
                      <th className='fs-6'>IMAGE</th>
                      <th className='fs-6'>PRODUCT NAME</th>
                      <th className='fs-6'>MODEL</th>
                      <th className='fs-6'>QUANTITY</th>
                      <th className='fs-6'>UNIT PRICE</th>
                      <th className='fs-6'>TOTAL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      productsList.map(({color, count, product, total_price, id}) => (
                          <tr key={Math.random()}>
                            <td style={{width: 60, height: 60}}>
                              <img style={{width: 70, height: 70}} src={product.images[0]?.image} alt="Product image"/>
                            </td>
                            <td>
                              <div style={{fontSize: 15}}>{product.model}
                                <div style={{fontSize: 13}}>Size: {product.size}</div>
                                <div style={{fontSize: 13}}>Color: {color.color}</div>
                              </div>
                            </td>
                            <td>{product.brand}</td>
                            <td>
                              <div className='d-flex'>
                                <div className={styles.editDelete}>
                                  <input
                                      value={count}
                                      onChange={(e) => onChangeCount(e, id)}
                                      className={styles.inputNumber}
                                      type="number"
                                      min='1'
                                  />
                                  <img onClick={updateCount} src={updateIcon} alt="Update Icon"/>
                                  <div
                                      onClick={() => deleteProduct(id)}
                                      className={styles.deleteBtn}
                                  >X
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>${product.price}</span>
                            </td>
                            <td>
                              <span>${total_price}</span>
                            </td>
                          </tr>
                      ))
                    }
                    </tbody>
                  </table>
              ) : (
                  <div className={styles.emptyList}>
                    Your Cart is Currently Empty
                  </div>
              )
            }

            {
              productsList.length > 0 && (
                    <div className={styles.productInfo}>
                      <div className={styles.containerBtn}>
                        <button><span>USE COUPON CODE</span> →</button>
                        <button><span>ESTIMATE SHIPPING & TAXES</span> →</button>
                        <button><span>USE GIF CERTIFICATE</span> →</button>
                      </div>
                      <div className={styles.totalDate}>
                        <div>
                          <p className='d-flex justify-content-end'>Sub-Total:</p>
                          <p className='d-flex justify-content-end'>Flat Shipping Rate:</p>
                          <p className='d-flex justify-content-end'>Total:</p>
                        </div>
                        <div>
                          <p className='d-flex justify-content-end'>${totalPrice}</p>
                          <p className='d-flex justify-content-end'>$3,36</p>
                          <p className='d-flex justify-content-end'>${totalPrice}</p>
                        </div>
                      </div>
                      <div className={styles.bottomButtons}>
                        <button>CONTINUE SHOPPING</button>
                        <button disable={isDisabled} onClick={goCheckout}>CHECKOUT</button>
                      </div>
                    </div>
                )
            }
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.product.productsToCart,
    user: state.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsToCart: (userId) => productAction.getProductsToCart(dispatch, userId),
    deleteProductsToCart: (id) => productAction.deleteProductsToCart(dispatch, id),
    updateProductToCart: (data) => productAction.updateProductToCart(dispatch, data),
    checkout: () => productAction.checkout(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

