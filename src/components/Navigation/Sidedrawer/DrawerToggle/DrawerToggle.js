import React from 'react';
import classses from './DrawerToggle.module.css'

const DrawerToggle = (props) => (
  <div className={classses.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
)

export default DrawerToggle
