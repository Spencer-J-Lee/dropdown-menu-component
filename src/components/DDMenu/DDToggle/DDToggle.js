import React from 'react';
import classes from './DDToggle.module.css';

const DDToggle = props => {
  return (
    <div className={classes.DDToggle} onClick={props.clicked}>
      <span>{props.text}</span>
    </div>
  )
};

export default DDToggle;
