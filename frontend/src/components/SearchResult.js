import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

export default class SearchResult extends Component {
    render() {
        const { SCHNAM09, LCITY09, LSTATE09 } = this.props;
        return (
            <ListGroupItem className={ 'SearchResult' }>
                { SCHNAM09.toLowerCase() } - { LCITY09.toLowerCase() }, { LSTATE09 }
            </ListGroupItem>
        );
    }
}
