"use strict";

class BuyerActions {
  submitBuyer(name) {
    return name;
  }
  initData(buyers) {
    return buyers;
  }
  getBuyers(){
    return {};
  }
  openAddCoffeBoxModal(buyerId){
    return buyerId;
  }
  submitCoffeeBox(buyerId){
    return buyerId;
  }
}
window.app.actions.BuyerActions = alt.createActions(BuyerActions);