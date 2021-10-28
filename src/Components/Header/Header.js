import React from 'react';
import './Header.css'
import Typed from 'react-typed'

const Header = () => {

    return (
        <div id="header">
            <div className="home">
                <div className="main-info">
                    <div>
                    <h2><Typed strings={["Everything at one place for budding startups."]} typeSpeed={20} /></h2>
                    
                    </div>
                    <div>
                    <button className="hebn">Book a seat for free webinar</button>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;