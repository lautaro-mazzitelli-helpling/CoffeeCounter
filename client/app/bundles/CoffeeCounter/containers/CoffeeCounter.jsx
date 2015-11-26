import React from 'react';
import BuyerActions from '../actions/BuyerActions';
import BuyerStore from '../stores/BuyerStore';

import Navbar from '../components/layout/Navbar';
import SubHeader from '../components/layout/SubHeader';
import BuyersTable from '../components/buyersTable/BuyersTable';
import AddBuyer from "../components/addBuyer/AddBuyer";
import ShowToast from "../components/tools/ShowToast";

import _ from 'lodash';

// Simple example of a React "smart" component
export default class CoffeeCounter extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'onChange');
  }
  componentDidMount() {
    BuyerStore.listen(this.onChange);
    BuyerActions.initData(this.props.buyers);
  }
  componentWillUnmount() {
    BuyerStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div>
        <Navbar />
        <SubHeader />
        <div className="container">
          <AddBuyer />
          <BuyersTable />
          <ShowToast />
        </div>
      </div>
    );
  }
}
