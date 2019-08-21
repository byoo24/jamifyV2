import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { openNavMobile, closeNavMobile } from '../../actions/uiActions';


// const breakpoints = {
//     xlarge: 1280,
//     large: 980,
//     medium: 736,
//     small: 480
// }


const Navbar = (props) => {
    const { mobileNavOpen, openNavMobile, closeNavMobile } = props;
    let mobileActive = mobileNavOpen ? 'mobile-active' : '';

    // useEffect(
    //     () => {
    //         closeNavMobile();
    //     },
    //     [window.innerWidth]
    // )

    
    const mobileToggle = () => {
        if(mobileNavOpen) {
            closeNavMobile();
        } else {
            openNavMobile();
        }
    }
    
    
    return (
        <header className="site_header">
            <div className="nav_main">
                <nav className="nav_main-container">

                    <div className="nav_main-left">
                        <span className="logo">LOGO</span>

                        <ul className="nav_main-desktop">
                            <li className="nav_main_item">Dashboard</li>
                            <li className="nav_main_item">item 2</li>
                            <li className="nav_main_item">item 3</li>
                        </ul>
                    </div>
                    
                    <div className="nav_main-right">
                        <div className={`hamburgerToggle ${mobileActive}`} onClick={mobileToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="session">
                            <span className="user">Welcome User</span>
                        </div>
                    </div>
                </nav>


                <div className={`nav_mobile-container ${mobileActive}`}>

                    <ul className="nav_mobile-list">
                        <li className="nav_mobile_item">Dashboard</li>
                        <li className="nav_mobile_item">item 2</li>
                        <li className="nav_mobile_item">item 3</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


const msp = (state) => {
    return {
        mobileNavOpen: state.ui.mobileMenu.open
    }
};

const mdp = (dispatch) => {
    return {
        openNavMobile: () => dispatch(openNavMobile()),
        closeNavMobile: () => dispatch(closeNavMobile())
    }
}

export default connect(msp, mdp)(Navbar);