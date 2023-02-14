import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/">
                        <Board />
                    </Route>
                </Routes>
                
            </BrowserRouter>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

