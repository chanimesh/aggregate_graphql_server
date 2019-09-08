const { RESTDataSource } = require('apollo-datasource-rest');

class UniversitiesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://universities.hipolabs.com/';
    }

    async getUniversitiesOfBrazil() {
        return await this.get('search', {name: "monte", country: "brazil"});
    }

    async getUniversitiesOfIndia() {
        return await this.get('search', {name: "Andhra", country: "india"});
    }
}

module.exports = UniversitiesAPI;
