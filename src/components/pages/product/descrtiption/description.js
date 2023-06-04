import React, {useState} from 'react';
import styles from './description.module.css'
const Description = () => {

  const [show,setShow] = useState(false);



  return (
    <div className='d-block'>
      <div className={show ? '' : styles.styleText}>
        Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.
        You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modules.
        Optional "Show More" collapsible block content is also available as an option for large and tall descriptions or custom content.
      </div>
      <div className='d-flex justify-content-center'>
        <button
          className={styles.button}
          onClick={() => setShow(!show)}
        >{show ? '↑ Show Less' : '↓ Show More'}
        </button>
      </div>
    </div>
  );
};

export default Description;
