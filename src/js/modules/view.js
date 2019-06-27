import {
    onLoad
} from "./onload";
import lottie from "lottie-web";

export default class View {
    constructor() {
        this.fact = document.querySelector("#fact");
        this.animation = document.querySelector("#animation-cat");
        this.button = document.querySelector(".btn");
    }

    renderAnimation() {
        const cat_animation = lottie.loadAnimation({
            container: this.animation,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "../../assets/SVG/cat1.json"
        })

        cat_animation.play();
    }

    render(fact) {
        this.fact.innerHTML = `${fact}`
    }
}