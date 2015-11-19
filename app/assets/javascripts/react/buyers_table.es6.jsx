class BuyersTable extends React.Component {
  componentWillMount() {
    app.actions.BuyerActions.initData(this.props.buyers);
  }
  render () {
    return (
      <div>
        <table className="table-animate">
              <BuyersTableHead />
              <BuyersTableBody />
          </table>
      </div>
       
    )
  }
}
