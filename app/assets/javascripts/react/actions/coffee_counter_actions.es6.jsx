"use strict";

class CoffeeBoxActions {
	submitCoffeeBox(name) {
		return name;
	}
}
window.app.actions.CoffeeBoxActions = alt.createActions(CoffeeBoxActions);