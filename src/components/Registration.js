

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Registration.css';

const Registration = () => {
    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [nextOfKinName, setNextOfKinName] = useState('');
    const [nextOfKinPhone, setNextOfKinPhone] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/passenger/sign-up", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    gender,
                    password,

                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                alert('User Created Successfully');
            } else {
                alert('Error: ' + responseData.data);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="all">
            <div>
                <p className="welcome-user">Create Your Account.!<br/><br/></p>
            </div>
            <form className="sign-up" onSubmit={handleSubmit}>
                <h2 className="sign-up-message">Signup</h2>
                <p className="some-details">Just some details to get you in.!</p>
                <div className="form-tag">
                    <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <select
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button id="submit" type="submit" className="sign-up-button">
                        Sign-Up
                    </button>
                </div>
                <Link to="/login">
                    <p>
                        Already Registered? <button className="another-login">Login</button>
                    </p>
                </Link>
            </form>
        </div>
    );
};

export default Registration;
