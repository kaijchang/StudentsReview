import React, { Component } from 'react';
import { Container } from 'reactstrap';

import '../styles/SchoolContainer.css';

export default class SchoolContainer extends Component {
    constructor(props) {
        super(props);

        this.SchoolStore = props.SchoolStore;

        this.state = {
            school: {}
        };

        this.SchoolStore
            .getByNCESSCH(props.NCESSCH)
            .then(school => this.setState({
                school: school
            }))
    }

    render() {
        if (!Object.keys(this.state.school).length) {
            return (
                <Container className={ 'SchoolContainer' }>
                </Container>)
        }

        const { SCHNAM09 } = this.state.school;

        return (
            <Container className={ 'SchoolContainer' }>
                <h1 className={ 'SchoolName' }>{ SCHNAM09.toLowerCase() }</h1>
            </Container>
        );
    }

}
