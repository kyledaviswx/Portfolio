import React from 'react'
import Navigation from '../Navigation';

// props are passed from App.js for category state. This is then passed through to the Nav component to use to manage states. 
function Header(props) {
  return (
    <header data-testid="header" className="App-header px-1">
      <h2>Kyle Davis - Web Developer</h2>
      <Navigation props={props}></Navigation>
    </header>
  );
}
export default Header;