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

        const { SCHNAM09, Location } = this.state.school;
        const [_, long, lat] = /\((-?\d{2,3}.\d{6}), (-?\d{2,3}.\d{6})\)/.exec(Location);

        return (
            <Container className={ 'SchoolContainer' }>
                <h1 className={ 'SchoolName' }>{ SCHNAM09.toLowerCase() }</h1>
                <iframe
                    title={ 'Map' }
                    className={ 'Map' }
                    width={ 600 }
                    height={ 500 }
                    src={ `https://maps.google.com/maps?q=@${ long },${ lat }&z=15&output=embed` }/>
            </Container>
        );
    }
}
