import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import {hover} from "@testing-library/user-event/dist/hover";

// Import Link for navigation

const Home = () => {
    return (
        <div className='container'>
            <h1>Welcome to Our App!</h1>
            <p>Please choose an option below:</p>
            <div>
                <Link to="/signin">
                    <button className='button'>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button className='button'>Login</button>
                </Link>
            </div>
        </div>
    );
};

//Simple inline styles for layout and buttons
// const styles = {
//     container: {
//         backgroundImage: `url($'./assets/Expenses.jpg'})`,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//
//     },
//     // buttonContainer: {
//     //     marginTop: '20px',
//     // },
//     button: {
//         margin: '10px',
//         padding: '10px 20px',
//         fontSize: '18px',
//         cursor: 'pointer',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//     }
// };

export default Home;