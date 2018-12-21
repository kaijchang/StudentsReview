import axios from 'axios';

export default class SchoolService {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    get(query) {
        return axios.get(this.serviceUrl, {
            params: {
                name: query
            }
        })
            .then(resp => resp.data);
    }
}
