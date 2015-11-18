class BuyersTable extends React.Component {
  componentWillMount() {
    CoffeeActions.initData(this.props.buyers);
  }
  render () {
    return (
       <table>
            <BuyersTableHead />
            <BuyersTableBody />
        </table>
    )
  }
}
