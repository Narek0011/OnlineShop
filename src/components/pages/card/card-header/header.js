import React from 'react';
import styles from "./header.module.css";
import homeIcon from "../../../../assets/images/home (2).png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className='app-container'>
            <div className='d-flex'>
              <div className='d-block'>
                <Link to='/' className='text-decoration-none'>
                  <img src={homeIcon} alt="Home Icon"/>
                </Link>
              </div>
              <span className='mx-2'>
               → Shopping Cart
          </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
