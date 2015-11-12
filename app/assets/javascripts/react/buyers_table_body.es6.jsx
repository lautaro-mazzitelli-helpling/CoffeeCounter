class BuyersTableBody extends React.Component {
  render () {
  	 var items = this.props.buyers.map(function(buyer, i){
        return (
          <tr key={i}>
            <td>{ i+1 }</td>
            <td>{ buyer.name }</td>
            <td>{ buyer.amount }</td>
            <td>
              <a className="waves-effect waves-light btn modal-trigger brown darken-4" href="#modal1">-</a>
              <a className="waves-effect waves-light btn modal-trigger brown darken-4" href="#modal1">+</a>
            </td>
          </tr>
        );
    });
    return (
    	<tbody>
    		{items}
    	</tbody>
    );
  }
}
