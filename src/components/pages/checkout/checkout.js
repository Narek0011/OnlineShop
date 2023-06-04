import React, {useEffect, useState} from 'react';
import Header from "../card/card-header/header";
import styles from './checkout.module.css'
import paymentIcon from '../../../assets/images/credit-card.png'
import updateIcon from "../../../assets/images/updated.png";
import {connect} from "react-redux";
import * as productAction from "../../../redux/actions/productAction";

const Checkout = ({products, getProductsToCart, deleteProductsToCart, updateProductToCart, user}) => {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [newData, setNewData] = useState({});
  const [totalPrice, setTotalPrice,] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      getProductsToCart(userId)
    }
  }, []);

  useEffect(() => {
    setProductsList(products)
  }, [products]);

  const handleChange = (event) => {
    const {value} = event.target;
    if (value === 'login') {
      setShowLoginForm(true)
    } else {
      setShowLoginForm(false)
    }
  };

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
      updateProductToCart(newData)
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    products.forEach(({total_price}) => {
      totalPrice = totalPrice + total_price;
    });
    setTotalPrice(totalPrice)
  }, [products]);

  useEffect(() => {
    if (!user.user.id) {
      setProductsList([]);
      setTotalPrice(0)
    }
  }, [user]);

  return (
    <div>
      <Header/>
      <div className='app-container'>
        <div className='d-flex justify-content-between'>
          <div>
            <div className='mt-3'>
              <div>
                <h3 className={styles.title}>Quick Checkout</h3>
              </div>
              <div className={styles.loginRegister}>
                <div>
                  <h6 className={styles.titleLogin}>Login or register</h6>
                </div>
                <div className='mb-3'>
                  <label>
                    <input
                      name='login'
                      value='login'
                      type="radio"
                      onChange={handleChange}
                    />
                    <span className='mx-2'>Login</span>
                  </label>
                  <label className='mx-3'>
                    <input
                      name='login'
                      value='register'
                      type="radio"
                      onChange={handleChange}
                    />
                    <span className='mx-2'>Register</span>
                  </label>
                  <label>
                    <input name='login' type="radio"/>
                    <span className='mx-2'>Guest</span>
                  </label>
                </div>
                {
                  showLoginForm && (
                    <form>
                      <div className="form-outline mb-4 d-flex justify-content-between">
                        <label>Email</label>
                        <input type="email"/>
                      </div>
                      <div className="form-outline mb-4 d-flex justify-content-between">
                        <label>Password</label>
                        <input type="password"/>
                      </div>
                      <div className='mb-4'><a href="#">Forgotten Password</a></div>
                      <button type="button" className={styles.loginBtn}>LOGIN</button>
                    </form>
                  )
                }
              </div>
              <div className={styles.loginRegister}>
                <div>
                  <h6 className={styles.titleLogin}>Your Personal Details</h6>
                </div>
                <div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <label>Name <span className='text-danger'>*</span></label>
                    <input type="text" placeholder='name'/>
                  </div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <label>Email <span className='text-danger'>*</span></label>
                    <input type="email" placeholder='email'/>
                  </div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <label>Password <span className='text-danger'>*</span></label>
                    <input type="password" placeholder='password'/>
                  </div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <label>Confirm Password <span className='text-danger'>*</span></label>
                    <input type="password" placeholder='Confirm password'/>
                  </div>
                </div>
              </div>
              <div className={styles.loginRegister}>
                <div>
                  <h6 className={styles.titleLogin}>Billing Address</h6>
                </div>
                <div className="form-outline mb-4 d-flex justify-content-between">
                  <div>
                    <label>Company</label>
                  </div>
                  <div>
                    <input type="Company" placeholder='name'/>
                  </div>
                </div>
                <div className="form-outline mb-4 d-flex justify-content-between">
                  <div>
                    <label>Address 1 <span className='text-danger'>*</span></label>
                  </div>
                  <div>
                    <input type="text" placeholder='Address 1'/>
                  </div>
                </div>
                <div className="form-outline mb-4 d-flex justify-content-between">
                  <div>
                    <label>Address 2 <span className='text-danger'>*</span></label>
                  </div>
                  <div>
                    <input type="text" placeholder='Address 2'/>
                  </div>
                </div>
                <div className="form-outline mb-4 d-flex justify-content-between">
                  <div>
                    <label>City <span className='text-danger'>*</span></label>
                  </div>
                  <div>
                    <input type="text" placeholder='City'/>
                  </div>
                </div>
                <div className="form-outline mb-5 d-flex justify-content-between">
                  <div>
                    <label>Post Code <span className='text-danger'>*</span></label>
                  </div>
                  <div>
                    <input type="text" placeholder='Post Code'/>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Country <span className='text-danger'>*</span></h6>
                  </div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <div>
                      <select className={styles.selectCountries}>
                        <option defaultValue={'Romania'}>Romania</option>
                        <option value="1">One</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Region / State <span className='text-danger'>*</span></h6>
                  </div>
                  <div className="form-outline mb-4 d-flex justify-content-between">
                    <div>
                      <select className={styles.selectCountries}>
                        <option defaultValue={'Romania'}>Romania</option>
                        <option value="1">One</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-100 ms-4'>
            <div style={{marginTop: 72}} className={styles.rowLeft}>
              <div className='mx-4'>
                <div className='d-flex justify-content-start mt-4'>
                  <div className='mx-3'>
                    <div className='mb-2'>
                      <span className={styles.titleLogin}>Sopping Method</span>
                    </div>
                    <div>
                      <label className='m-0 p-0'>
                        <img src={paymentIcon} alt="#" className='mb-1'/>
                        <input type="radio" className='mx-2' defaultChecked={true}/>
                        <span>Flat Shipping Rate - $5.00</span>
                      </label>
                    </div>
                  </div>
                  <div className='mx-5'>
                    <div className='mb-2'>
                      <span className={styles.titleLogin}>Payment Method</span>
                    </div>
                    <div>
                      <label>
                        <img src={paymentIcon} alt="#" className='mx-2 mb-1'/>
                        <input type="radio" className='mx-2' defaultChecked={true}/>
                        <span>Cash On Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 16,}} className={styles.rowLeft}>
              <div className='mx-4'>
                <div className='mb-2'>
                  <span className={styles.titleLogin}>Coupon / Voucher / Reward</span>
                </div>
                <div className='d-flex mt-4 justify-content-between'>
                  <div>
                    <span className="text-nowrap mx-2">Enter your coupon here</span>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="rounded-0 form-control" placeholder="Enter Your Coupon Here"/>
                    <span style={{cursor: 'pointer'}} className="input-group-text rounded-0">SUBMIT</span>
                  </div>
                </div>
                <div className='d-flex mt-4 justify-content-between'>
                  <div className='d-flex'>
                      <span className="text-nowrap mx-2">Enter your gift certifcate <br/>
                       code here
                      </span>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="rounded-0 form-control"
                      placeholder="Enter your gift certificate code here"
                    />
                    <span style={{cursor: 'pointer'}} className="input-group-text rounded-0">SUBMIT</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 16}} className={styles.rowLeft}>
              <div className='mx-4'>
                <div className='mb-2'>
                  <span className={styles.titleLogin}>Shopping Cart</span>
                </div>
                <div>
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
                      productsList.length && productsList.map(({color, count, product, total_price, id}) => (
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
                                  onChange={(e) => onChangeCount(e, id)}
                                  value={count}
                                  className={styles.inputNumber}
                                  type="number"
                                  min='1'
                                />
                                <img onClick={updateCount} src={updateIcon} alt="Update Icon"/>
                                <div
                                  onClick={() => deleteProductsToCart(id)}
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
                  <div className={styles.totalContainer}>
                    <div className='mx-5'>
                      <div className={styles.totalText}>Sub-Total:</div>
                      <div className={styles.totalText}>Flat Shipping Rate:</div>
                      <div className={styles.totalText}>Total:</div>
                    </div>
                    <div>
                      <div>${totalPrice}</div>
                      <div>$5.00</div>
                      <div>${totalPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 16}} className={styles.rowLeft}>
              <div className='mx-4'>
                <div className='mb-2'>
                  <span className={styles.titleLogin}>Confirm Your Order</span>
                </div>
                <div>
                  <div>
                    <textarea className='form-control' rows='5' placeholder='Add Your Comments About Your Order'/>
                  </div>
                  <div>
                    <div>
                      <label>
                        <input type="checkbox"/>
                        <span className='mx-2'>I wish to subscribe to the Journal 3 Demo 9 newsletter</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"/>
                        <span className='mx-2'>I have read and agree to the Privacy Policy</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"/>
                        <span className='mx-2'>I have read and agree to the Terms & Conditions</span>
                      </label>
                    </div>
                    <div className='d-flex'>
                      <button className={styles.confirmBtn}>
                        CONFIRM ORDER
                      </button>
                    </div>
                  </div>
                </div>
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
    products: state.product.productsToCart,
    user: state.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsToCart: (userId) => productAction.getProductsToCart(dispatch, userId),
    deleteProductsToCart: (id) => productAction.deleteProductsToCart(dispatch, id),
    updateProductToCart: (data) => productAction.updateProductToCart(dispatch, data),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);