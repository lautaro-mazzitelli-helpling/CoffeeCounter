import React from 'react';

class Navbar extends React.Component {
  render () {
    return (
      <nav className="fixed-header">
        <div className="nav-wrapper brown darken-4">
          <img src="/assets/counter_logo.png" className="brand-logo" />
        </div>
      </nav>
    );
  }
}

export default Navbar;