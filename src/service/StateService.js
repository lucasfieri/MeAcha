class GlobalState {

    constructor() { 
        this.globalState = window.localStorage;
    }

    getItem(itemName) {
        return this.globalState.getItem(itemName) || "home";
    }

    setItem(itemName, itemValue) {
        this.globalState.setItem(itemName, itemValue);
    }
}

export default GlobalState;

