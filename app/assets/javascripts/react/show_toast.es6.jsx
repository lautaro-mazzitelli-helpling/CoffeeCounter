class ShowToast extends React.Component {
	componentDidMount () {
		if (this.props.type === 'error') {
			this.setToast(this.buildMessageFromError(this.props.errors));
		} else {
			this.setToast(this.props.message || 'default');
		}
	}
	buildMessageFromError (errors){
		var message;
		for (var value of errors.name) {
			message = value;
		}
		console.log(message);
		return message;
	}
	setToast (message) {
		Materialize.toast(message, 4000);
	}
	render () {
	    return <div />;
	}
}

