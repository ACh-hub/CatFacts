export default class Ui {
    constructor() {
        this.fact = document.querySelector("#fact");
    }

    updateUi(fact){
        this.fact.innerHTML = `${fact}`
    }
}