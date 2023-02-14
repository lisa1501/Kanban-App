import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
    const navigate = useNavigate();

    function logoutUser(){
        localStorage.removeItem('token');
        navigate.push("/login")
    }
    return (
        <button onclick={logoutUser}>Log Oout</button>
    )
}

export default Logout
