import React from "react";
import styles from './top-bar.module.css'
import {Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconFacebook from '../../../assets/images/facebook.png'
import iconTwitter from '../../../assets/images/twitter.png'
import iconInstagram from '../../../assets/images/instagram.png'
import iconWhatsapp from '../../../assets/images/whatsapp.png'
import iconPinterest from '../../../assets/images/pinterest.png'
import iconDown from '../../../assets/images/down.png'
import iconOut from '../../../assets/images/out.png'
import iconPhone from '../../../assets/images/phone-call.png'
import iconDollar from '../../../assets/images/dollar-symbol.png'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function TopBar() {

  const renderByJournal = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip JOURNAL
    </Tooltip>
  );


  const renderUsDollar = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip US DOLLAR
    </Tooltip>
  );

  return(
    <div className={styles.borderBottom}>
      <div className='app-container'>
        <div>
          <div className={`d-flex justify-content-between ${styles.container}`}>
            <div className="top-menu top-menu-2">
              <div className="d-flex">
                <li className="list-unstyled">
                  <img src={iconFacebook} alt="Icon facebook" className={styles.icon}/>
                </li>
                <li className="list-unstyled">
                  <img src={iconTwitter} alt="Icon twitter" className={styles.icon}/>
                </li>
                <li className="list-unstyled">
                  <img src={iconInstagram} alt="Icon instagram" className={styles.icon}/>
                </li>
                <li className="list-unstyled">
                  <img src={iconWhatsapp} alt="Icon whatsapp" className={styles.icon}/>
                </li>
                <li className="list-unstyled">
                  <img src={iconPinterest} alt="Icon pinterest" className={styles.icon}/>
                </li>
                <li className="list-unstyled">
                  <a className="link-secondary text-decoration-none" href="https://themeforest.net/item/journal-advanced-opencart-theme/4260361">
                    <img src={iconOut} alt="Out icon" className={styles.icon}/>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderByJournal}
                    >
                      <span className={styles.linksText}>By journal</span>
                    </OverlayTrigger>
                    <img src={iconDown} className={styles.iconDown} alt="Dropdown Icon"/>
                  </a>
                </li>
              </div>
            </div>

            <div>
              <ul>
                <li className="list-unstyled">
                  <a className="text-decoration-none" href="tel:18005559090">
                    <img src={iconPhone} className={styles.icon} alt="Phone icon"/>
                    <span className={styles.linksText}>Call now: 1800.555.9090</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="list-unstyled">
                  <img src={iconDollar} className={styles.icon} alt="Dollar icon"/>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderUsDollar}
                  >
                    <span className={styles.linksText}>Us dollar</span>
                  </OverlayTrigger>
                  <img src={iconDown} className={styles.iconDown} alt="Dropdown Icon"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TopBar