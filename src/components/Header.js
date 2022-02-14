import React from "react";
import propTypes from "prop-types";


const Header = ({firstPart, lastPart, tagline}) => 
    (
        <header className="top">
                <h1>{firstPart}
                    <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                    </span>
                    {lastPart}
                </h1>
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