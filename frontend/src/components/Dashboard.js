import React from 'react';

// import StudentNav from './students/StudentNav';
// import StudentHome from './students/StudentHome';
import Navbar from './Navbar';
import Mainview from './Mainview';

const Dashboard = () => {

    return (
        <section className="dashboard">
            <Navbar />
            <Mainview />
        </section>
    )
}

export default Dashboard;