"use strict";

class BuyerStore {
  constructor() {
    this.bindListeners({
      submitBuyer: app.actions.BuyerActions.submitBuyer,
      initData: app.actions.BuyerActions.initData,
      openAddCoffeBoxModal: app.actions.BuyerActions.openAddCoffeBoxModal,
      submitCoffeeBox: app.actions.BuyerActions.submitCoffeeBox
    });
    this.buyers = [];
    this.openModal = false;
    this.targetBuyerId = '';
  }
  openAddCoffeBoxModal(buyerId){
    this.targetBuyerId = buyerId;
    this.openModal = true;
  }
  initData (props) {
    this.buyers = props;
  }
  getBuyers (){
    return this.buyers;
  }
  submitBuyer (name) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/buyers.json',
      data: {
        buyer: {
            name: name
        }
      },
      success: (res) => {
        this.buyers.push(res.data);
        app.actions.MessageActions.addMessage({type: "success", message: "User " + res.data.name + " created successfully"});
        this.emitChange();
      },
      error: (res) => {
        app.actions.MessageActions.addMessage({type: "error", message: res.responseJSON.name[0]});
      }
    });
  }
  reorderArray (array, i) {
    if (i === 0 || array[i].coffee_boxes.length <= array[i - 1].coffee_boxes.length) {
      return array;
    } else {
      var aux = array[i];
      array[i] = array[i-1];
      array[i - 1] = aux;
      return this.reorderArray(array, i - 1);
    }
  }
  addCoffeeBox (buyerId, coffee_box) {
    var self = this;
    Array.from(this.buyers).forEach(function(buyer, i) {
      if(buyer.id === buyerId) {
        buyer.coffee_boxes.push(coffee_box);
        self.buyers = self.reorderArray(self.buyers, i);
      }
    });
  }
  submitCoffeeBox (buyerId) {
    this.openModal = false;
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/coffee_boxes.json',
      data: {
        coffee_box: {
            date: moment().toISOString(),
            buyer_id: buyerId

        }
      },
      success: (res) => {
        this.addCoffeeBox(buyerId, res.data);
        app.actions.MessageActions.addMessage({type: "success", message: "Coffee Box added successfully"});
        this.emitChange();
      }
    });
  }
}


app.stores.BuyerStore = alt.createStore(BuyerStore);