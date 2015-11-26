import React from 'react';

import AddBuyerForm from "./AddBuyerForm";
import BuyerStore from "../../stores/BuyerStore";
import UIActions from "../../actions/UIActions";
import UIStore from "../../stores/UIStore";

export default class AddBuyer extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = UIStore.getState();
    _.bindAll(this, 'onUpdate', 'onUiChange', 'switchState');
  }
  
  componentDidMount() {
    UIStore.listen(this.onUiChange);
  }

  componentWillUnmount() {
    UIStore.unlisten(this.onUiChange);
  }

  onUiChange(state){
    this.setState(state);
  }

  switchState(){
    UIActions.switchNewBuyerForm();
  }

  render() {
    return (
      <div className="col s10">
        <a className="floating-button btn-floating btn-large waves-effect waves-light brown darken-4"
           data-toggle="collapse"
           onClick={this.switchState}>
            <i className="material-icons">perm_identity</i>
        </a>
        { this.state.showBuyerForm ? <AddBuyerForm /> : null }
      </div>

    );
  }
}
