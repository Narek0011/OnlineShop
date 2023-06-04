import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import styles from './mid-bar.module.css'
import journalImage from '../../../assets/images/journal.png'
import {FiSearch} from 'react-icons/fi'
import {AiFillCaretDown} from 'react-icons/ai'
import "@fontsource/nunito-sans"
import {ImUserTie} from 'react-icons/im';
import {AiOutlineHeart} from 'react-icons/ai';
import {TbGitCompare} from 'react-icons/tb';
import LoginRegister from "../login-logout/login-logout";
import {Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import * as userAction from "../../../redux/actions/userAction";


function MidBar({user, getUser}) {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  useEffect(() => {
    if (localStorage.getItem('token')) {
      (async () => {
        await getUser()
      })()
    }
  }, []);

  const renderLoginLogout = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <LoginRegister/>
    </Tooltip>
  );

  return (
    <div className={styles.borderBottom}>
      <div className='app-container'>
        <div className={styles.container}>
          <div>
            <img style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={journalImage} alt="Journal Image"/>
          </div>
          <div>
            <OverlayTrigger
              placement="bottom"
              delay={{show: 250, hide: 400}}
              overlay={renderTooltip}
            >
              <div className={styles.searchSelect}>
                All
                <AiFillCaretDown/>
              </div>
            </OverlayTrigger>
            <input className={styles.searchInput} type="text" placeholder='search here...'/>
            <button className={styles.searchBtn}><FiSearch/></button>
          </div>
          <div className='d-flex'>
            <div style={{cursor: 'pointer'}} onClick={() => setShow(!show)}>
              <OverlayTrigger
                show={show}
                placement="bottom"
                delay={{show: 250, hide: 400}}
                overlay={renderLoginLogout}
              >
                <div className='d-flex'>
                  <div className='fs-2 me-2'>
                    <ImUserTie/>
                  </div>
                  <div>
                    <div className={styles.account}>{user.user.user.name ? user.user.user.name : 'Account'}</div>
                    <div className={styles.loginRegister}>Login / Register</div>
                  </div>
                </div>
              </OverlayTrigger>
            </div>

            <div className={styles.accountContainer}>
              <div className='fs-2 me-2'>
                <AiOutlineHeart/>
              </div>
              <div>
                <div className={styles.account}>Wishlist</div>
                <div className={styles.loginRegister}>Edit your wishlist</div>
              </div>
            </div>

            <div className='d-flex'>
              <div className='fs-2 me-2'>
                <TbGitCompare/>
              </div>
              <div>
                <div className={styles.account}>Compare</div>
                <div className={styles.loginRegister}>Product comparison</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => userAction.getUser(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MidBar);


