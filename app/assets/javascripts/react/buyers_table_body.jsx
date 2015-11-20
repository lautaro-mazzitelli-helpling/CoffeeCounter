var BuyersTableBody = React.createClass({
  getInitialState() {
    return app.stores.BuyerStore.getState();
  },
  componentDidMount() {
    app.stores.BuyerStore.listen(this.onChange);
  },
  componentWillUnmount() {
    app.stores.BuyerStore.unlisten(this.onChange);
  },
  onChange(state){
    this.setState(state);
  },
  openModal(e){
    app.actions.BuyerActions.openAddCoffeBoxModal(parseInt(e.currentTarget.dataset.buyer));
  },
  render () {
  	 var items = this.state.buyers.map((buyer, i) => {
        return (
          <tr key={i} className="table-row">
            <td>{ i+1 }</td>
            <td>{ buyer.name }</td>
            <td>{ buyer.coffee_boxes.length }</td>
            <td>
              <button id={buyer.id} className="waves-effect waves-light btn brown darken-4" onClick={this.openModal} data-buyer={buyer.id}>+</button>
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
});
