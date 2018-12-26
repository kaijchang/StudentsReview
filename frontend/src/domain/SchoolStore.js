import MicroEmitter from 'micro-emitter';

export default class SchoolStore {
    constructor(dataService) {
        this.dataService = dataService;

        this.schools = [];

        this.eventEmitter = new MicroEmitter();

        this.fetch = this.fetch.bind(this);
        this.setSchools = this.setSchools.bind(this);
    }

    fetch() {
        if (this.query === '') {
            return this.setSchools([]);
        }

        this.dataService.query({
            SCHNAM09: this.query,
            fuzzy: true,
            limit: 10
        })
            .then(this.setSchools);
    }

    setSearchQuery(query) {
        this.query = query;
        clearTimeout(this.timer);
        this.timer = setTimeout(this.fetch, 500);
    }

    getByNCESSCH(NCESSCH) {
        const schoolIndex = this.schools.findIndex(school => school.NCESSCH === NCESSCH);

        if (schoolIndex !== -1) {
            return new Promise(resolve => resolve(this.schools[schoolIndex]));
        }

        return this.dataService.query({
            NCESSCH: NCESSCH
        })
            .then(data => data[0])
    }

    setSchools(newSchools){
        this.schools = newSchools;
        this.eventEmitter.emit('change');
    }

    onChange(handler) {
        this.eventEmitter.on('change', () => handler(this.schools));
    }
}
