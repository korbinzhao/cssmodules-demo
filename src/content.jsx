import React, { Component } from "react";
import {Button} from 'antd';

import styles from "./content.less";

console.log('styles', styles);

class Content extends Component {

  render(){
    return (
      <div className={styles.container}>
        <p className={styles.text}>Content here!!!</p>
        <Button className={styles.button}>Click me!!!</Button>
      </div>
    );

  }
  
};

export default Content;

