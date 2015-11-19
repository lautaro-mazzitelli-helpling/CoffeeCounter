var ShowToast = React.createClass ({
  getInitialState() {
    return app.stores.MessageStore.getState();
  },
  componentDidMount () {
    app.stores.MessageStore.listen(this.onChange);
  },
  onChange(state){
    this.setToast(state.messages[state.messages.length-1]);
  },
  componentWillUnmount() {
      app.stores.MessageStore.unlisten(this.onChange);
  },
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
  },
  render () {
      return <div />;
  }
});

