export default class Controller {
    constructor(model,view) {
        this.model=model
        this.view=view
    }

    updateFact(){
        this.model.getData()
        .then(fact=>this.view.render(fact.text))
        .catch(err => console.log(err));
    }

}