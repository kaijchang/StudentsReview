import React, { Component } from 'react';

import SearchContainer from './components/SearchContainer';

import SchoolStore from './domain/SchoolStore';
import SchoolService from './access/SchoolService';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.current_container = 'search';
    }

    render() {
        let container;

        if (this.current_container === 'search') {
             container = <SearchContainer
                SchoolStore={ new SchoolStore(new SchoolService('api/schools')) }
            />
        }

        return container;
    }
}

export default App;