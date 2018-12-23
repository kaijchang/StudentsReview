import axios from 'axios';

export default class SchoolService {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    query(query) {
        return axios.get(this.serviceUrl, {
            params: query
        })
            .then(resp => resp.data);
    }
}
