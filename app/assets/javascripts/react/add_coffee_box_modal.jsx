var AddCoffeeBoxModal = React.createClass({
  getInitialState() {
    return {
      targetBuyerId: ''
    };
  },
  componentDidMount () {
    $('.modal-trigger').leanModal();
    app.stores.BuyerStore.listen(this.onChange);
  },
  componentWillUnmount() {
    app.stores.BuyerStore.unlisten(this.onChange);
  },
  onChange(state){
    if(state.openModal) {
      console.log('state', state);
      this.state.targetBuyerId = state.targetBuyerId;
      $('#modal1').openModal();
    }
  },
  sendCoffeBox () {
    app.actions.BuyerActions.submitCoffeeBox(this.state.targetBuyerId);
  },
  render () {
    return (
     <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Confirm</h4>
        <p>Are you sure you bought the coffee?</p>
      </div>
      <div className="modal-footer">
        <button className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.sendCoffeBox}>Yes!</button>
        <button className="modal-action modal-close waves-effect waves-green btn-flat">Maybe not</button>
      </div>
    </div>
    );
  }
})
