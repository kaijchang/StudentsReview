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
                </Container>
            );
        }

        const { SCHNAM09, MSTREE09, MZIP09, LCITY09, MSTATE09 } = this.state.school;

        return (
            <Container className={ 'SchoolContainer' }>
                <h1 className={ 'SchoolName' }>{ SCHNAM09.toLowerCase() }</h1>
                <iframe
                    title={ 'Map' }
                    className={ 'Map' }
                    width={ 600 }
                    height={ 500 }
                    src={ `https://maps.google.com/maps?q=${MSTREE09} ${LCITY09} ${MSTATE09} ${MZIP09}&z=15&output=embed` }/>
            </Container>
        );
    }
}
