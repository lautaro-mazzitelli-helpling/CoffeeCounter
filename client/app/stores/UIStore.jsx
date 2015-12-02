import alt from '../alt';
import UIActions from '../actions/UIActions';

class UIStore {
  constructor() {
    this.bindListeners({
      openNewBuyerForm: UIActions.OPEN_NEW_BUYER_FORM,
      closeNewBuyerForm: UIActions.CLOSE_NEW_BUYER_FORM,
      switchNewBuyerForm: UIActions.SWITCH_NEW_BUYER_FORM,
      openConfirmationModal: UIActions.OPEN_CONFIRMATION_MODAL,
      acceptConfirmationModal: UIActions.ACCEPT_CONFIRMATION_MODAL,
      cancelConfirmationModal: UIActions.CANCEL_CONFIRMATION_MODAL
    });
    this.showBuyerForm = false;
    this.showConfirmationModal = false;
    this.modalAccepted = null;
  }
  openNewBuyerForm (message){
    this.showBuyerForm = true;
  }
  closeNewBuyerForm(){
    this.showBuyerForm = false;
  }
  switchNewBuyerForm(){
    this.showBuyerForm = !this.showBuyerForm;
  }
  openConfirmationModal() {
    this.showConfirmationModal = true;
    this.modalAccepted = null;
  }
  acceptConfirmationModal() {
    this.showConfirmationModal = false;
    this.modalAccepted = true;
  }
  cancelConfirmationModal() {
    this.showConfirmationModal = false;
    this.modalAccepted = false;
  }
}

export default alt.createStore(UIStore, 'UIStore');