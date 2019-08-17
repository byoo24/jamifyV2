import React from 'react';
import { connect } from 'react-redux';
import { openNavMobile, closeNavMobile } from '../../actions/uiActions';

// import StudentNav from './students/StudentNav';
// import StudentHome from './students/StudentHome';
import Navbar from './Navbar';
import Mainview from './Mainview';

const Dashboard = (props) => {
    
    return (
        <section className="dashboard">
            <Navbar loggedIn={props.loggedIn}/>
            <Mainview />
        </section>
    )
}




const mdp = (dispatch) => {
    return {
        openNavMobile: () => dispatch(openNavMobile()),
        closeNavMobile: () => dispatch(closeNavMobile())
    }
}


export default connect(null, mdp)(Dashboard);
