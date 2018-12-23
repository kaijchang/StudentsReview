/*global event*/
/*eslint no-restricted-globals: 0*/

import React, { Component } from 'react';

import SearchContainer from './components/SearchContainer';
import SchoolContainer from './components/SchoolContainer';

import SchoolStore from './domain/SchoolStore';
import SchoolService from './access/SchoolService';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.changeContainer = this.changeContainer.bind(this);

        if (location.pathname !== '/') {
            this.state = {
                current_container: 'school'
            };
        } else {
            this.state = {
                current_container: 'search'
            };
        }

        this.SchoolService = new SchoolService('api/schools');
        this.SchoolStore = new SchoolStore(this.SchoolService);
    }

    changeContainer(container_name) {
        this.setState({
            current_container: container_name
        });
    }

    render() {
        let container;

        if (this.state.current_container === 'search') {
             container = <SearchContainer
                SchoolStore={ this.SchoolStore }
                changeContainer={ this.changeContainer }
             />
        } else if (this.state.current_container === 'school') {
             container = <SchoolContainer
                 SchoolStore={ this.SchoolStore }
             />
        }

        return container;
    }
}

export default App;
