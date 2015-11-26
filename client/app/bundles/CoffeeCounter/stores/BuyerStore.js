import alt from '../alt';
import BuyerActions from '../actions/BuyerActions';
import MessageActions from '../actions/MessageActions';
import moment from 'moment';

class BuyerStore {
  constructor() {
    this.buyers = [
    	{
    		'id': 1,
    		'name': 'Victor',
    		'coffee_boxes' : [1,2,3]
    	}
    ];
    this.bindListeners({
      initData: BuyerActions.INIT_DATA,
      submitBuyer: BuyerActions.SUBMIT_BUYER,
      submitCoffeeBox: BuyerActions.SUBMIT_COFFEE_BOX
    });
  }
  initData (buyers) {
    this.buyers = buyers;
  }
  submitBuyer (name) {
    $.ajax({
      type: "POST",
      url: '/buyers.json',
      data: {
        buyer: {
            name: name
        }
      },
      success: (res) => {
        this.buyers.push(res.data);
        MessageActions.addMessage({
          type: "success",
          message: "User " + res.data.name + " created successfully"
        });
        this.emitChange();
      },
      error: (res) => {
        MessageActions.addMessage({
          type: "error",
          message: res.responseJSON.name[0]
        });
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
    $.ajax({
      type: "POST",
      url: '/coffee_boxes.json',
      data: {
        coffee_box: {
            date: moment().toISOString(),
            buyer_id: buyerId
        }
      },
      success: (res) => {
        this.addCoffeeBox(buyerId, res.data);
        MessageActions.addMessage({
          type: "success",
          message: "Coffee Box added successfully"
        });
        this.emitChange();
      }
    });
  }
}

export default alt.createStore(BuyerStore, 'BuyerStore');