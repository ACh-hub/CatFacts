export default class Ui {
    constructor() {
        this.fact = document.querySelector("#fact");
        this.button = document.querySelector(".btn");
    }

    updateUi(fact){
        this.fact.innerHTML = `${fact}`
    }
}