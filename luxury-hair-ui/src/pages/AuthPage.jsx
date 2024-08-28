import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../assets/AuthPage.css';
import axios from 'axios';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setErrorMessage(''); // Clear error message when toggling
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(''); // Reset error message before submission

        try {
            const formData = new FormData(event.target);
            const email = formData.get('email');
            const password = formData.get('password');

            // Simple client-side validation
            if (!email || !password) {
                throw new Error('Email and password are required.');
            }

            if (!isLogin) {
                const fullName = formData.get('fullName');
                if (!fullName) {
                    throw new Error('Full name is required for sign up.');
                }


                await axios.post('http://localhost:8080/LuxuryHairVendingSystemDB/userlogin/create', {
                    fullName,
                    email,
                    password
                });

                alert('Signup successful!');
            } else {
                // API call for login
                await axios.post('http://localhost:8080/LuxuryHairVendingSystemDB/userlogin/read', {
                    email,
                    password
                });

                alert('Login successful!');
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || error.message || 'An unexpected error occurred. Please try again.');
            setShowPopup(true); // Show the popup with the error message
        }
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
        // Handle Google OAuth success logic here (e.g., send token to backend)
        // Example API call to your backend
        axios.post('http://localhost:8080/LuxuryHairVendingSystemDB/userlogin/google-login', { token: response.credential })
            .then(res => {
                alert('Google login successful!');
            })
            .catch(err => {
                setErrorMessage('Google login failed. Please try again.');
                setShowPopup(true);
            });
    };

    const handleGoogleLoginError = (error) => {
        console.log('Google login error:', error);
        setErrorMessage('Google login failed. Please try again.');
        setShowPopup(true); // Show the popup with the error message
    };

    const closePopup = () => {
        setShowPopup(false);
        setErrorMessage('');
    };

    return (
        <GoogleOAuthProvider clientId="116310698020-3tjps2m44tu1vgl6nh6phvt91l0l1mf8.apps.googleusercontent.com">
            <div className="container">
                {showPopup && (
                    <div className="popup">
                        <div className="popup-inner">
                            <p>{errorMessage}</p>
                            <button className="close-btn" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
                <div className="form-container">
                    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <input type="text" name="fullName" placeholder="Full Name" className="input-field" />
                        )}
                        <input type="email" name="email" placeholder="Email" className="input-field" />
                        <input type="password" name="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="submit-btn">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                        <button type="button" className="toggle-btn" onClick={toggleForm}>
                            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                        </button>
                    </form>
                    <div className="social-login">
                        <p>Or {isLogin ? 'login' : 'sign up'} with:</p>
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginError}
                        />
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default AuthPage;
