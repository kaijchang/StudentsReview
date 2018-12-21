import React, { Component } from 'react';

import SearchContainer from './components/SearchContainer';

import SchoolStore from './domain/SchoolStore';
import SchoolService from './access/SchoolService';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <SearchContainer
                    SchoolStore={ new SchoolStore(new SchoolService('api/schools')) }
                />
            </div>
        );
    }
}

export default App;