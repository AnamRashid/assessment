import React from "react";
import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";



const Navbar = () => {

const users = useSelector ( (state) => state.app)

 

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="navlink">
                                    Create Post
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link to="/read" className="navlink">
                                    all Post 
                                </Link>

                            </li>
                        </ul>
                    </div>

                    <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search"
                    ></input>
                </div>
            </nav>

        </>
    );
};

export default Navbar;