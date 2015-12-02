import React from 'react';

import BuyerActions from '../../actions/BuyerActions';
import BuyerStore from '../../stores/BuyerStore';
import UIActions from "../../actions/UIActions";
import UIStore from "../../stores/UIStore";

class BuyersTableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = BuyerStore.getState();
    _.bindAll(this, 'onChange', 'onUIChange', 'sendCoffeeBox', 'openConfirmationModal');
  }

  componentDidMount() {
    BuyerStore.listen(this.onChange);
    UIStore.listen(this.onUIChange);
  }

  componentWillUnmount() {
    BuyerStore.unlisten(this.onChange);
    UIStore.unlisten(this.onUIChange);
  }

  onChange(state) {
    this.setState(state);
  }

  onUIChange(state) {
    if(state.modalAccepted){
      setTimeout(() => {
        BuyerActions.submitCoffeeBox(this.state.targetId);
      }, 0);
    }
  }

  sendCoffeeBox(targetId) {
    BuyerActions.submitCoffeeBox(targetId);
  }

  openConfirmationModal(e) {
    UIActions.openConfirmationModal();
    this.state.targetId = parseInt(e.currentTarget.dataset.buyer, 10);
  }

  render () {
    var items = this.state.buyers.map((buyer, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{ i+1 }</td>
          <td>{ buyer.name }</td>
          <td>{ buyer.coffee_boxes.length }</td>
          <td>
            <button id={buyer.id} className="waves-effect waves-light btn brown darken-4" data-buyer={buyer.id} onClick={this.openConfirmationModal}>+</button>
          </td>
        </tr>
      );
    });
    return (
      <tbody>
        {items}
      </tbody>
    );
  }
}

export default BuyersTableBody;