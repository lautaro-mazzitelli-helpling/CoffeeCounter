var AddBuyer = React.createClass({

  postBuyer () {
    console.log('name', this.refs.buyerName.value);
    console.log('CoffeeActions', CoffeeActions);
    CoffeeActions.submitBuyer(this.refs.buyerName.value);
  },
  render: function() {
    return (
      <div className="col s10 collapse" id="collapseExample">
        <div className="row">
          <div className="input-field col s8">
            <input placeholder="Buyer Name" id="form-name" type="text" className="form-control" ref="buyerName" />
          </div>
          <div className="input-field col s4 submit-button">
            <input type="button" value="Add Buyer" className="btn btn-default brown darken-2" onClick={this.postBuyer}/>
          </div>
        </div>
      </div>
    );
  }
});