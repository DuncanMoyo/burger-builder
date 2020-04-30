import React from 'react';
import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div>{classes.label}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  )
}

export default BuildControl
