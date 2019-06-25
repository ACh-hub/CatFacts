export default class ApiCall {
    constructor() {
        this.catFactsUrl = 'https://cat-fact.herokuapp.com/facts/random';
    }

    async getCatFact() {
        const response = await fetch(this.catFactsUrl);
        const responseData = await response.json();
        return responseData;
    }
}