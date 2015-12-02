import React from 'react';

import CoffeeCounter from '../containers/CoffeeCounter';

const CoffeeCounterApp = props => {
  var arr = $.map(props, (e) => { return e });
  const reactComponent = (
    <CoffeeCounter buyers={arr} />
  );
  return reactComponent;
};

export default CoffeeCounterApp;
