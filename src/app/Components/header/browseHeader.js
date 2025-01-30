"use client";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./header.module.scss";

function browseHeader() {
    return (
        <Navbar expand="lg" className="app-bg-Dark home-header">
            <Container >
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 g-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <div className='searc-box browse-search-input'>
                            <div class="group">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                                    <g>
                                        <path
                                            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                                        ></path>
                                    </g>
                                </svg>

                                <input
                                    id="query"
                                    class="input"
                                    type="search"
                                    placeholder="Search..."
                                    name="searchbar"
                                />
                            </div>

                        </div>
                    </Nav>
                    <Form className="d-flex">

                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default browseHeader;