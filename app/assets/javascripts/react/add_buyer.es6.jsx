class AddBuyer extends React.Component {
  render () {
    return (
      <div className="col s10 collapse" id="collapseExample">
        <form className="form-inline" id="new_buyer" action="/buyers" method="post">
          <div className="row">
            <div className="input-field col s8">
              <input placeholder="Buyer Name" name="buyer[name]" id="form-name" type="text" className="form-control" />
            </div>
            <div className="input-field col s4 submit-button">
              <input type="submit" value="Add Buyer" className="btn btn-default brown darken-2"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

