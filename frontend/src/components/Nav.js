import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <Navbar>
                <NavbarBrand>
                    <Link
                        to={ '/' }
                        style={{ textDecoration: 'none', color: 'black' }}>
                        StudentsReview
                    </Link>
                </NavbarBrand>
            </Navbar>
        );
    }
}
