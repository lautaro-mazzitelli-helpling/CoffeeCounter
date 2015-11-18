"use strict";

class CoffeeStore {
  constructor() {
    this.bindListeners({
      submitBuyer: CoffeeActions.submitBuyer,
      initData: CoffeeActions.initData,
      getBuyers: CoffeeActions.getBuyers
    });
    this.buyers = [];
  }
  initData (props) {
    this.buyers = props;
  }
  getBuyers (){
    return this.buyers;
  }
  submitBuyer (name) {
    var self = this;
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/buyers.json',
      data: {
        buyer: {
            name: name
        }
      },
      success: (res) => {
        self.buyers.push(res);
        this.emitChange();
      }
    });
  }
}


window.CoffeeStore = alt.createStore(CoffeeStore);