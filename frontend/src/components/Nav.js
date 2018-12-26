import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <Navbar>
                    <Link
                        className={ 'navbar-brand' }
                        to={ '/' }
                        style={{ textDecoration: 'none', color: 'black' }}>
                        StudentsReview
                    </Link>
            </Navbar>
        );
    }
}
