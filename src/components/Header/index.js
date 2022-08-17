import React from 'react'
import Navigation from '../Navigation';

function Header(props) {
  return (
    <header data-testid="header" className="App-header px-1">
      <h2>Kyle Davis - Web Developer</h2>
      <Navigation props={props}></Navigation>
    </header>
  );
}
export default Header;