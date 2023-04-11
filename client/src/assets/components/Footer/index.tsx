import React from "react";
import logo from '../../images/tourstore_logo.png';
import "./css/style.css";

export function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Подбор тура</h1>
            </div>
            <span>Copyright © 2023 Web by Popov Matvey.</span>
        </footer>
    );
}