import alt from '../alt';
import UIActions from '../actions/UIActions';

class UIStore {
  constructor() {
    this.bindListeners({
      openNewBuyerForm: UIActions.OPEN_NEW_BUYER_FORM,
      closeNewBuyerForm: UIActions.CLOSE_NEW_BUYER_FORM,
      switchNewBuyerForm: UIActions.SWITCH_NEW_BUYER_FORM
    });
    this.showBuyerForm = false;
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
}

export default alt.createStore(UIStore, 'UIStore');