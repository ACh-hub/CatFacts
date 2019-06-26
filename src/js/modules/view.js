import { onLoad } from "./onload";

export default class View {
    constructor() {
        this.fact = document.querySelector("#fact");
        this.button = document.querySelector(".btn");
    }

    render(fact){
        this.fact.innerHTML = `${fact}`
    }
}