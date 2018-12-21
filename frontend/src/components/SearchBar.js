import React, { Component } from 'react';
import { Input } from 'reactstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <Input className={ 'SearchBar' }
                value={ this.props.value }
                onChange={ this.props.onChange }
                placeholder={ 'Search for your High School...' }
            />
        );
    }
}
