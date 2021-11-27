import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'

//importing general componenets
import NavBAr from './components/general/NavBAr';

//landing componenets
import Background from './components/landing/Background';

//user componenets
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import "./App.css"
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBAr />
        <Routes>
          <Route exact path="/" element={<Background/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </Provider>


  );
}

export default App;
