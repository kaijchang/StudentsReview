import React, { Component } from 'react';
import { Container } from 'reactstrap';

import SearchBar from './SearchBar';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            query: event.target.value
        });
    }

    render() {
        return (
            <Container className={ 'SearchContainer' }>
                <SearchBar
                    value={ this.state.query }
                    onChange={ this.handleInput }
                />
            </Container>);
    }
}
