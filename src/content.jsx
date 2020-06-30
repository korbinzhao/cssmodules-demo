import React, { Component } from "react";
import {Button} from 'antd';

import styles from "./content.less";

console.log('styles', styles);

class Content extends Component {

  render(){
    return (
      <>
        <div className={styles.container}>
          <p className={styles.text}>Inner Content here!!!</p>
          <Button className={styles.button}>Click me!!!</Button>
        </div>
        <p className={styles.text}>Outer Content here!!!</p>

        <p className={styles.className}>className</p>
        <p className={styles.subClass}>subClass</p>
      </>
    );

  }
  
};

export default Content;

