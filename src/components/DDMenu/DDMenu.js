import React, { Component } from 'react';
import DDToggle from './DDToggle/DDToggle';
import DDLinks from './DDLinks/DDLinks';
import classes from './DDMenu.module.css';

class DDMenu extends Component {
  state = {
    open: false,
  };
  
  toggledHangler = () => {
    this.setState(prevState => (
      { open: !prevState.open }
    ));
  };
  
  render() {
    return (
      <ul className={classes.DDMenu}>
        <DDToggle clicked={this.toggledHangler} text={this.props.text}/>
        {this.state.open ? <DDLinks links={this.props.links} /> : null}
      </ul>
    )
  }
}

export default DDMenu;
