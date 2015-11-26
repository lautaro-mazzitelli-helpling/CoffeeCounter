import alt from '../alt';

class MessageActions {
  addMessage(message){
    this.dispatch(message);
  }
  removeLastMessage(){
    this.dispatch();
  }
  getLastMessage(){
	this.dispatch();
  }
}

export default alt.createActions(MessageActions);