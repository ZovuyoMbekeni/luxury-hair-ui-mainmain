import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../assets/AuthPage.css';

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

            // Example of simple client-side validation
            if (!email || !password) {
                throw new Error('Email and password are required.');
            }

            if (!isLogin) {
                const fullName = formData.get('fullName');
                if (!fullName) {
                    throw new Error('Full name is required for sign up.');
                }
            }

            // Mock API request simulation (replace with actual API call)
            await fakeApiRequest(email, password);

            alert(isLogin ? 'Login successful!' : 'Signup successful!');
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
            setShowPopup(true); // Show the popup with the error message
        }
    };

    // Mock function to simulate an API request (for demonstration purposes)
    const fakeApiRequest = (email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate a success response
                resolve({ success: true });
            }, 1000);
        });
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
        // Handle Google OAuth success logic here (e.g., send token to backend)
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
