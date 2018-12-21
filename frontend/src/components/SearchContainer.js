import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.SchoolStore = this.props.SchoolStore;
        this.SchoolStore.onChange(
            results => this.setState({
                    results: results
            })
         );

        this.state = {
            query: '',
            results: []
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            query: event.target.value
        });

        this.SchoolStore.setQuery(event.target.value);
    }

    render() {
        return (
            <Container className={ 'SearchContainer' }>
                <SearchBar
                    value={ this.state.query }
                    onChange={ this.handleInput }
                />
                <ListGroup>
                    {
                        this.state.results.map(school =>
                            <SearchResult key={ this.state.results.indexOf(school) } { ...school }/>
                        )
                    }
                </ListGroup>
            </Container>
        );
    }
}
