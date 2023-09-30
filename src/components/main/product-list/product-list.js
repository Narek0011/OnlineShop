import React, {useEffect, useState} from 'react';
import './product-list.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import next from '../../../assets/images/next.png'
import prev from '../../../assets/images/back.png'
import addToCard from '../../../assets/images/add-to-basket (1).png'
import heartImg from '../../../assets/images/heart.png'
import upAndDown from '../../../assets/images/up-and-down-arrow.png'
import {Link} from "react-router-dom";
import * as productAction from "../../../redux/actions/productAction";
import {connect} from "react-redux";
import AddProductToCart from "./add-product-to-cart/add-product-to-cart";


const ProductList = ({getProducts, newProducts, pagination}) => {

  const [countPage, setCountPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [productColors, setProductColors] = useState([]);
  const [productId, setProductId] = useState(null);
  const [defaultPagesCount, setDefaultPagesCount] = useState(0);

  useEffect(() => {
    (async () => {
      await getProducts({page: countPage})
    })()
  }, [countPage]);

  useEffect(() => {
    setDefaultPagesCount(pagination.product_pages)
  }, [pagination])

  const handlePrev = () => {
    setCountPage(current => --current);
  };

  const handleNext = () => {
    if(defaultPagesCount && defaultPagesCount > countPage) {
      setCountPage(current => ++current);
    }
  };

  const handleSelect = (key) => {
    if (key === "ALL PRODUCTS") {
      console.log(1)
    }
  };

  const getProductById = (id, color) => {
    setShowModal(true);
    setProductColors(color);
    setProductId(id);
  };

  return (
    <div className="app-container">
      <div className='container'>
        <Tabs defaultActiveKey="LATEST" onSelect={handleSelect}>
          <Tab tabClassName="coloredTab" eventKey="LATEST" title="LATEST"/>
          <Tab eventKey="BESTSELLERS" title="BESTSELLERS"/>
          <Tab eventKey="BEST RATED" title="BEST RATED"/>
          <Tab eventKey="SPECIALS" title="SPECIALS"/>
          <Tab eventKey="ALL PRODUCTS" title="ALL PRODUCTS"/>
        </Tabs>
        <div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{height: 370}}>
                <div className="cards-wrapper">
                  <AddProductToCart
                    productId={productId}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    productColors={productColors}
                  />
                  {
                    newProducts.length > 0 && newProducts.map(({images, price, id, brand, model, color}) => (
                      <div key={price + Math.random()} className="rowCard" style={{width: '18rem'}}>
                        <div className='imgContainer'>
                          <div>
                            <Link to={`/product/${id}`}>
                              <img src={images[0]?.image} className="card-img-top" alt="Product Image"/>
                            </Link>
                          </div>
                          <button className='newBtn'><b>NEW</b></button>
                          <button className='hotBtn'><b>HOT</b></button>
                          <div className='animationText'>
                            <div className='countProduct'>
                              <input type="number" min='1' defaultValue='1'/>
                            </div>
                            <div>
                              <img src={addToCard} alt="Cart Image"/>
                              <span
                                onClick={() => getProductById(id, color)}
                                style={{cursor: 'pointer'}}
                                className='text-white'
                              > ADD TO CART</span>
                            </div>
                            <div>
                              <img src={heartImg} alt="Heart Image"/>
                            </div>
                            <div>
                              <img src={upAndDown} alt="Heart Image"/>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="cardTitle">
                          <span className='cardTitleText'>
                             {brand}
                          </span>
                          </div>
                          <div className="cardText">
                          <span className='cardTextChild'>
                            {model}
                          </span>
                          </div>
                          <div className="cardPrice">
                          <span className='cardPriceChild'>
                            {price}
                          </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='buttonsDisplayNone'>
              <div className={countPage !== 1 ? 'prevBtn' : 'prevBtn myDiv'} onClick={handlePrev}>
                <img src={prev} alt="Prev btn"/>
              </div>
              <div className={'nextBtn'} onClick={handleNext}>
                <img src={next} alt="Btn next"/>
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
    newProducts: state.product.products,
    pagination: state.product.pagination,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: (params) => productAction.getProducts(dispatch, params),
    getProduct: (id) => productAction.getProduct(dispatch, id),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
