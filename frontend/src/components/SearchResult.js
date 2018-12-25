import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ListGroupItem } from 'reactstrap';

export default class SearchResult extends Component {
    render() {
        const { NCESSCH, SCHNAM09, LCITY09, LSTATE09 } = this.props;
        return (
            <Link to={ `school/${NCESSCH}` } style={{ textDecoration: 'none', color: 'black' }}>
                <ListGroupItem
                    className={ 'SearchResult' }
                >
                    { SCHNAM09.toLowerCase() } - { LCITY09.toLowerCase() }, { LSTATE09 }
                </ListGroupItem>
            </Link>
        );
    }
}
