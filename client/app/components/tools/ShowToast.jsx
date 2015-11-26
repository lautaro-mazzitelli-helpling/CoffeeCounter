import React from 'react';

import MessageStore from "../../stores/MessageStore";

export default class ShowToast extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = MessageStore.getState();
    _.bindAll(this, 'onChange', 'setToast');
  }

  componentDidMount () {
    MessageStore.listen(this.onChange);
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setToast(state.messages[state.messages.length-1]);
  }
  //TODO Move full message logic to MessageStore
  setToast (message) {
    var fullMessage;
    switch (message.type){
      case "error":
        fullMessage = "Error: "+ message.message;
        break;
      case "warning":
        fullMessage = "Warning: "+ message.message;
        break;
      case "success":
        fullMessage = message.message;
        break;
    }
    Materialize.toast(fullMessage, 5000);
  }

  render () {
      return <div />;
  }
}


