/*global event*/
/*eslint no-restricted-globals: 0*/

import React, { Component } from 'react';

export default class SchoolContainer extends Component {
    constructor(props) {
        super(props);

        this.SchoolStore = props.SchoolStore;

        this.state = {
            school: {}
        };

        this.SchoolStore
            .getByNCESSCH(location.pathname.split('/')[1])
            .then(school => this.setState({
                school: school
            }))
    }

    render() {
        const { SCHNAM09 } = this.state.school;

        return (
            <div>
                This is the page for: { SCHNAM09 }
            </div>
        );
    }

}
