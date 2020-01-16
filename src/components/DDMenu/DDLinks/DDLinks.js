import React from 'react';
import classes from './DDLinks.module.css';

const DDLinks = props => {
  let links = null
  
  if (props.links) {
    links = props.links.map(link => {
      return (
        <li>
          <a href={link.href}>{link.text}</a>
        </li>
      );
    });
  }

  return (
    <ul className={classes.DDLinks}>
      {links}
    </ul>
  )
};

export default DDLinks;
