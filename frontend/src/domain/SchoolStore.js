import MicroEmitter from 'micro-emitter';

export default class SchoolStore {
    constructor(dataService) {
        this.dataService = dataService;

        this.schools = [];

        this.eventEmitter = new MicroEmitter();
    }

    fetch() {
        return this.dataService.get(this.query)
            .then(this.setSchools.bind(this));
    }

    setQuery(query) {
        this.query = query;
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetch.bind(this), 500);
    }

    setSchools(newSchools){
        this.schools = newSchools;
        this.eventEmitter.emit('change');
    }

    onChange(handler) {
        this.eventEmitter.on('change', () => handler(this.schools));
    }
}
