class Navbar extends React.Component {
  componentDidMount () {
    $(".button-collapse").sideNav();
  }
  render () {
    return (
      <nav>
        <div className="nav-wrapper brown darken-4">
          <a href="/" className="brand-logo">Lautario's Coffee Counter</a>
          <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="buyers">Buyers</a></li>
            <li><a href="coffee_boxes">Coffee boxes</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            <li><a href="buyers">Buyers</a></li>
            <li><a href="coffee_boxes">Coffee boxes</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

