import React from 'react';

import CoffeeCounter from '../containers/CoffeeCounter';

const CoffeeCounterApp = props => {
  var arr = $.map(props, function(el) { return el });
  const reactComponent = (
    <CoffeeCounter buyers={arr} />
  );
  return reactComponent;
};

export default CoffeeCounterApp;
