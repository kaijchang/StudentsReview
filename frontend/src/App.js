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

        this._mounted = false;

        this.changeContainer = this.changeContainer.bind(this);
        this.decideContainer = this.decideContainer.bind(this);

        this.SchoolService = new SchoolService('api/schools');
        this.SchoolStore = new SchoolStore(this.SchoolService);

        this.decideContainer();

        window.onpopstate = this.decideContainer;
    }

    componentDidMount() {
        this._mounted = true;
    }

    decideContainer() {
        let container_name;

        if (location.pathname === '/') {
            container_name = 'search';
        } else if (location.pathname.split('/').length === 2) {
            container_name = 'school';
        }

        if (this._mounted) {
            this.setState({
                current_container: container_name
            });
        } else {
            this.state = {
                current_container: container_name
            };
        }

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
