import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import SearchContainer from './components/SearchContainer';
import SchoolContainer from './components/SchoolContainer';

import SchoolStore from './domain/SchoolStore';
import SchoolService from './access/SchoolService';


class App extends Component {
    constructor(props) {
        super(props);

        this.SchoolService = new SchoolService('/api/schools');
        this.SchoolStore = new SchoolStore(this.SchoolService);
    }

    render() {
        return(
            <Container>
                <Router>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route
                                path='/'
                                exact
                                component={ function() {
                                    return <SearchContainer
                                        SchoolStore={ this.SchoolStore }
                                    />}.bind(this) }/>
                            <Route
                                path='/school/:NCESSCH(\d{12})'
                                component={ function({ match }) {
                                    return <SchoolContainer
                                        SchoolStore={ this.SchoolStore }
                                        NCESSCH={ match.params.NCESSCH }
                                    />}.bind(this) }
                            />
                        </Switch>
                    </div>
                </Router>
            </Container>
        );
    }
}

export default App;
