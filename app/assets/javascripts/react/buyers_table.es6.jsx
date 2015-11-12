class BuyersTable extends React.Component {
  render () {
    return (
       <table>
	        <BuyersTableHead />
	        <BuyersTableBody buyers={this.props.buyers} />
	    </table>
    )
  }
}
