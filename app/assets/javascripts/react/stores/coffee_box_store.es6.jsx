"use strict";

class CoffeeBoxStore {
  constructor() {
    this.bindListeners({
      submitCoffeeBox: app.actions.CoffeeBoxActions.submitCoffeeBox
    });
    this.buyers = [];
  }
  addCoffeeBox (buyerId, coffee_box) {
    Array.from(this.buyers).forEach(function(buyer) {
      if(buyer.buyer_id === buyerId) {
        buyer.coffee_boxes.push(coffee_box);
      }
    });
  }
  submitCoffeeBox (buyerId) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/coffee_boxes.json',
      data: {
        coffee_box: {
            date: moment().format('YYYY-mm-dd'),
            buyer_id: buyerId
        }
      },
      success: (res) => {
        this.addCoffeeBox(res.data);
        this.emitChange();
      }
    });
  }
}


app.stores.CoffeeBoxStore = alt.createStore(CoffeeBoxStore);
