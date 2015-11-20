class Navbar extends React.Component {
  componentDidMount () {
    $(".button-collapse").sideNav();
  }
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

