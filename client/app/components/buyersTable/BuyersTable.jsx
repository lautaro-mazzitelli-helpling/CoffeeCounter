import React from 'react';

import BuyersTableHead from './BuyersTableHead';
import BuyersTableBody from './BuyersTableBody';
import ConfirmationModal from "../layout/ConfirmationModal";

class BuyersTable extends React.Component {

  render () {
    return (
      <div>
        <table className="table-animate">
          <BuyersTableHead />
          <BuyersTableBody />
        </table>
        <ConfirmationModal message="Are you sure you bought it?" />
      </div>
    )
  }
}

export default BuyersTable;
