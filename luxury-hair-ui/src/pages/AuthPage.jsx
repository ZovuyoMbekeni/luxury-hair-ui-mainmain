import React, { useState } from 'react';
import '../assets/AuthPage.css';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="auth-page">
            <div className="auth-tabs">
                <button
                    className={activeTab === 'login' ? 'active' : ''}
                    onClick={() => handleTabChange('login')}
                >
                    Login
                </button>
                <button
                    className={activeTab === 'signup' ? 'active' : ''}
                    onClick={() => handleTabChange('signup')}
                >
                    Sign Up
                </button>
            </div>

            <div className="auth-content">
                {activeTab === 'login' ? (
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>
                        </form>
                        <div className="social-login">
                            <button className="google-login">Sign in with Google</button>
                            <button className="facebook-login">Sign in with Facebook</button>
                        </div>
                    </div>
                ) : (
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                        <div className="social-login">
                            <button className="google-login">Sign up with Google</button>
                            <button className="facebook-login">Sign up with Facebook</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;

