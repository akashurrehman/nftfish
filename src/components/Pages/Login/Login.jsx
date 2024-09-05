import React, { useState } from 'react';
import './Styles.scss';

const SignIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="sign-in-container">
            <div className="left-panel">
                <div className="branding">
                    <h2>This World Needs You</h2>
                    <p>Crash Game</p>
                </div>
            </div>
            <div className="right-panel">
                <div className="form-container">
                    <h1>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">
                                {isSignUp ? 'Sign Up with email address' : 'Sign In with email address and password'}
                            </label>
                            {isSignUp && (
                                <input type="text" id="name" className="form-control" placeholder="Enter Name" />
                            )}
                             {isSignUp && (
                                <input type="text" id="username" className="form-control" placeholder="Enter Username" />
                            )}
                            <input type="email" id="email" className="form-control" placeholder="email@example.com" />
                            <input type="password" id="password" className="form-control" placeholder="password" />
                            {isSignUp && (
                                <input type="password" id="confirm-password" className="form-control" placeholder="confirm password" />
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary btn-block w-100">
                            {isSignUp ? 'SIGN UP' : 'CONTINUE'}
                        </button>
                    </form>
                    <p className="or-text">
                        {isSignUp ? 'Already have an account?' : 'Or continue with open account'}
                    </p>
                    <div className="social-login">
                        <button className="btn btn-outline-primary w-100" onClick={toggleForm}>
                            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
