"use client";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <div className='Hero-section app-bg-Dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 text-center'>
                        <div className='Hero-Label'>
                            <p>Growing Collection</p>
                        </div>
                        <h1 className='hero-title'>The creators library of <span className='gradient-text'> components & templates</span></h1>
                        <p className='f-18 mt-28'>Flowbase is the world's largest premium library of Webflow, Figma & Framer components and tools. Build better, faster with Flowbase.
                        </p>

                        <div className='searc-box mt-28'>
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



                    </div>
                </div>
                <hr className='divider'></hr>

                <div className='partners-sec text-center'>
                    <p>Over 100K+ designers, developers, entrepreneurs, and businesses choose Unlimited UI</p>
                </div>
            </div>

        </div>
    );
}

export default NavScrollExample;