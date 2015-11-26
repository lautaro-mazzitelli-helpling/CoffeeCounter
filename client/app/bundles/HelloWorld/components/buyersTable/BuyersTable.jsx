import React from 'react';

import BuyersTableHead from './BuyersTableHead';
import BuyersTableBody from './BuyersTableBody';

class BuyersTable extends React.Component {

  render () {
    return (
      <div>
        <table className="table-animate">
          <BuyersTableHead />
          <BuyersTableBody />
        </table>
      </div>
    )
  }
}

export default BuyersTable;
