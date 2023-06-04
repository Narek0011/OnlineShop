import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./top-bar/top-bar";
import MidBar from "./mid-bar/mid-bar";
import BottomBar from "./bottom-bar/bottom-bar";
import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <TopBar/>
      <MidBar/>
      <BottomBar/>
    </div>
  )
}

export default Header