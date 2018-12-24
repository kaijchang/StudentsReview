/*global event*/
/*eslint no-restricted-globals: 0*/

import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        history.pushState({}, this.props.NCESSCH, `/${this.props.NCESSCH}`);

        this.props.changeContainer('school');
    }

    render() {
        const { SCHNAM09, LCITY09, LSTATE09 } = this.props;
        return (
            <ListGroupItem
                className={ 'SearchResult' }
                onClick={ this.onClick }
            >
                { SCHNAM09.toLowerCase() } - { LCITY09.toLowerCase() }, { LSTATE09 }
            </ListGroupItem>
        );
    }
}
