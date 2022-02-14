import React from "react";
import propTypes from "prop-types";


const Header = ({tagline, storeId}) => 
    (
        <header className="top">
                <h2>
                    {storeId}
                    {/* <span className="ofThe">
                {firstPart}
                    <span className="of">Of</span>
                    <span className="the">The</span>
                    </span>
                    {lastPart} */}
                </h2>
            <h3 className="tagline">
                <span>{tagline}</span>
            </h3>
        </header>
    )

    Header.propTypes = {
        tagline: propTypes.string.isRequired,
        firstPart: propTypes.string.isRequired, 
        lastPart: propTypes.string.isRequired,
    }
    
export default Header