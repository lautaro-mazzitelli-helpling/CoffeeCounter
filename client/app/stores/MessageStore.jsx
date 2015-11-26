import alt from '../alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindListeners({
      addMessage: MessageActions.ADD_MESSAGE,
      removeLastMessage: MessageActions.REMOVE_LAST_MESSAGE,
      getLastMessage: MessageActions.GET_LAST_MESSAGE
    });
    this.messages = [];
  }
  addMessage (message){
    this.messages.push(message);
  }
  removeLastMessage(){
    this.messages.pop();
  }
  getLastMessage(){
    if (this.messages.length) {
      return this.messages[this.messages.length];
    }
  }
}


export default alt.createStore(MessageStore, 'MessageStore');