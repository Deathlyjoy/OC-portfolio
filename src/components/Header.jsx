import React from "react";

//---------- CSS ----------
import "../scss/header.scss";

const Header = ({ sharedData }) => {
    const name = sharedData.name;
    const address = sharedData.address;

    return (
        <header id="home" style={{ height: window.innerHeight - 140, display: "block" }}>
            <div className="row aligner" style={{ height: "100%" }}>
                <div className="col-md-12">
                    <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                    <br />
                    <h1 className="mb-0">{name}<br></br>{address}</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
