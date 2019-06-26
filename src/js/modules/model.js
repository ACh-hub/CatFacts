export default class Model {
    constructor() {
        this.dataUrl = 'https://cat-fact.herokuapp.com/facts/random';
    }

    async getData() {
        const response = await fetch(this.dataUrl);
        const responseData = await response.json();
        return responseData;
    }

}