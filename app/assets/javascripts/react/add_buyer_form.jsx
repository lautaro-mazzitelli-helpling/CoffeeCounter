var AddBuyerForm = React.createClass({
  componentDidMount() {
    $(document.body).on('keydown', this.handleKeyDown);
    $(this.refs.buyerName).focus();
  },
  componentWillUnmount() {
    $(document.body).unbind('keydown');
  },
  handleKeyDown(e) {
    var ENTER = 13;
    var ESC = 27;
    if( e.keyCode === ENTER ) {
        this.postBuyer();
    }
    if( e.keyCode === ESC ) {
        this.props.onUpdate();
    }
  },
  postBuyer () {
    app.actions.BuyerActions.submitBuyer(this.refs.buyerName.value);
    this.props.onUpdate();
  },
  render() {
    return (
      <div className="row add-buyer-form">
        <div className="input-field col s8">
          <input placeholder="Buyer Name" id="form-name" type="text" className="form-control" ref="buyerName" />
        </div>
        <div className="input-field col s4 submit-button">
          <input type="button" value="Add Buyer" className="btn btn-default brown darken-4" onClick={this.postBuyer}/>
        </div>
      </div>
    )
  }
})