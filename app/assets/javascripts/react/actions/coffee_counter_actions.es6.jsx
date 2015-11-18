"use strict";
// class CoffeeActions {
// 	contructor(){
// 		this.generateActions('initData', 'submitBuyer');
// 	}
// }
// window.CoffeeActions = alt.createActions(CoffeeActions);


class CoffeeActions {
	submitBuyer(name) {
		return name;
	}
	initData(buyers) {
		return buyers;
	}
	getBuyers(){
		return {};
	}
}
window.CoffeeActions = alt.createActions(CoffeeActions);