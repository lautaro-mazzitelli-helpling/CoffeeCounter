class CoffeeCounter extends React.Component {
  componentWillMount() {
    app.actions.BuyerActions.initData(this.props.buyers);
  }
  render () {
    return (
      <div>
        <SubHeader />
        <section className="buyers-list">
          <div className="container">
            <ShowToast />
            <AddBuyer />
            <BuyersTable />
            <AddCoffeeBoxModal />
          </div>
        </section>
      </div>
       
    )
  }
}
