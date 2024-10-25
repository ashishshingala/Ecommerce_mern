import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login'
import ProductList from './component/ProductList'
//import Login from './pages/Login';

const App = () => {
    return (
      
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} /> 
                    <Route exact path="/register" element={<Register/>} />
                    <Route exact path="/products" element={<ProductList/>} /> 
                </Routes>
            </Router>
        
    );
};

export default App;