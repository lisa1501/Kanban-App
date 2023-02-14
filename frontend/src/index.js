import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'


function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
    }

function App() {
    const [token, setToken] = useState(() => getToken());
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={!token ? <Navigate to="/register"/>:<Board token={token}/>}></Route>
                    <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                    <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                </Routes>
                
            </BrowserRouter>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

