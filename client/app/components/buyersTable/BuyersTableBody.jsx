import React from 'react';

import BuyerActions from '../../actions/BuyerActions';
import BuyerStore from '../../stores/BuyerStore';

class BuyersTableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = BuyerStore.getState();
    _.bindAll(this, 'onChange', 'sendCoffeeBox');
  }

  componentDidMount() {
    BuyerStore.listen(this.onChange);
  }

  componentWillUnmount() {
    BuyerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  sendCoffeeBox(e) {
    BuyerActions.submitCoffeeBox(parseInt(e.currentTarget.dataset.buyer));
  }

  render () {
    var items = this.state.buyers.map((buyer, i) => {
      return (
        <tr key={i} className="table-row">
          <td>{ i+1 }</td>
          <td>{ buyer.name }</td>
          <td>{ buyer.coffee_boxes.length }</td>
          <td>
            <button id={buyer.id} className="waves-effect waves-light btn brown darken-4" data-buyer={buyer.id} onClick={this.sendCoffeeBox}>+</button>
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