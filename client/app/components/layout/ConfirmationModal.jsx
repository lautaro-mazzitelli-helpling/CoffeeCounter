import React from 'react';
import UIActions from "../../actions/UIActions";
import UIStore from "../../stores/UIStore";

export default class ConfirmationModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'onUIChange', 'confirmModal', 'cancelModal');
  }
  componentDidMount() {
    UIStore.listen(this.onUIChange);
  }
  onUIChange(state) {
    if(state.showConfirmationModal){
      $('#modal1').openModal();
    }
  }
  confirmModal() {
    UIActions.acceptConfirmationModal();
  }
  cancelModal() {
    UIActions.cancelConfirmationModal();
  }
  
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <p>{this.props.message}</p>
        </div>
          <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.confirmModal}>Yes</a>
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.cancelModal}>No</a>
        </div>
      </div>      
    );
  }
}