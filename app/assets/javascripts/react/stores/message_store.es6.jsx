"use strict";

class MessageStore {
  constructor() {
    this.bindListeners({
      addMessage: app.actions.MessageActions.addMessage,
      removeLastMessage: app.actions.MessageActions.removeLastMessage
    });
    this.messages = [];
  }
  addMessage (message){
    this.messages.push(message);
  }
  removeLastMessage(){
    this.messages.pop();
  }
}


app.stores.MessageStore = alt.createStore(MessageStore);