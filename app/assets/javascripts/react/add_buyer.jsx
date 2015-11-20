var AddBuyer = React.createClass({
  componentDidMount() {
    $(document.body).on('keydown', this.handleKeyDown);
    app.stores.BuyerStore.listen(this.onChange);
    var p = $( "p:last" );
  },
  componentWillUnmount() {
    app.stores.BuyerStore.unlisten(this.onChange);
  },
  getInitialState() {
    return { showBuyerForm: false };
  },
  onChange(state){
    this.setState(state);
  },
  switchState(){
    this.setState({ showBuyerForm: !this.state.showBuyerForm });
  },
  onUpdate(){
    this.setState({
      showBuyerForm: false
    });
  },
  render: function() {
    return (
      <div className="col s10">
        <a className="floating-button btn-floating btn-large waves-effect waves-light brown darken-4"
           data-toggle="collapse"
           onClick={this.switchState}>
            <i className="material-icons">perm_identity</i>
        </a>
        { this.state.showBuyerForm ? <AddBuyerForm onUpdate={this.onUpdate} /> : null }
      </div>

    );
  }
});
