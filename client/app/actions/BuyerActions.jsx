import alt from '../alt';

class BuyerActions {
  initData(buyers) {
    this.dispatch(buyers);
  }
  submitBuyer(name) {
    this.dispatch(name);
  }
  // openAddCoffeBoxModal(buyerId){
  //   return buyerId;
  // }
  submitCoffeeBox(buyerId){
    this.dispatch(buyerId);
  }
}

export default alt.createActions(BuyerActions);
