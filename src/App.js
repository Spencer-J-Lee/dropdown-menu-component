import React from 'react';
import classes from './App.module.css';
import DDMenu from './components/DDMenu/DDMenu';
import { links1, links2, links3 } from './assets/example-links';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.DDMenusWrapper}>
        <DDMenu text="Menu" links={links1}/>
        <DDMenu text="Profile" links={links2}/>
        <DDMenu text="Count" links={links3}/>
      </div>
    </div>
  );
}

export default App;
