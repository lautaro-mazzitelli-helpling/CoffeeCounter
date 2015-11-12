class AddCoffeeBoxModal extends React.Component {

  componentDidMount () {
    $('.modal-trigger').leanModal();
  }

  render () {
    return (
     <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Confirm</h4>
        <p>Do you want to buy a box of coffee?</p>
      </div>
      <div className="modal-footer">
        <button className=" modal-action modal-close waves-effect waves-green btn-flat">Buy!</button>
        <button className=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</button>
      </div>
    </div>
    );
  }
}
