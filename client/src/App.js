import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './util/setAuthToken';
import { setCurrentUser } from './actions/authAction';

//importing general componenets
import ProtectedRoute from './components/general/ProtectedRoute'; //wrapper under routes

//landing componenets
import Landing from './components/landing';

//dashboard componenets
import Dashboard from './components/dashboard/index'
import AddProduct from './components/dashboard/components/AddProduct';
import Home from './components/dashboard/components/Home';
import Product from './components/dashboard/components/Product';

//user componenets
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import "./App.css"
import 'antd/dist/antd.css'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App(props) {
  useEffect(() => {
    store.dispatch(setCurrentUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/" element={<ProtectedRoute/>}>  
            <Route  
              path="/dashboard" 
              element={<Dashboard {...props} nestedRoute={Home} />} 
            />
            <Route  
              path="/dashboard/addProduct" 
              element={<Dashboard {...props} nestedRoute={AddProduct} />} 
            />
            <Route  
              path="/dashboard/products" 
              element={<Dashboard {...props} nestedRoute={Product} />} 
            />
          </Route>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
