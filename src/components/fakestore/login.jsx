import React from 'react';
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';
import { useState,  useEffect } from "react";

function Login() {
    const navigate = useNavigate();

    function navigateToHome(event) {
        event.preventDefault(); 
        navigate('/'); 
    }
const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

useEffect(() => {
localStorage.setItem('inputValue', JSON.stringify(inputValue));

}, [inputValue]);
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>My Store</h2>
                <form onSubmit={navigateToHome}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange = {handleInputChange} type="text" id="username" name="username" value={inputValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
