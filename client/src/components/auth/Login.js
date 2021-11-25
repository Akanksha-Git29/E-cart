import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../general/Input'


class Login extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password1:"",
            password2:"",
        }
    }
    onChange(e){
        console.log(e)
    }

    render() {
        return (
            <div className='container'>
                <h1 className="large text-primary">Sign In</h1>
                <p className="lead">
                    <i class="fas fa-user"></i>
                    Sign Into Your Account
                </p>
                <div className="form">
                    <Input 
                        type='email' 
                        placeholder='Enter Email' 
                        value='email'
                        onChange={this.onChange} 
                    />
                </div>
                <div className="form">
                    <Input 
                        type='password' 
                        placeholder='Enter Password' 
                        value='password'
                        onChange={this.onChange} 
                    />
                </div>
                <button className="btn btn-primary">Sign In</button>
                <p className="my-1">Don't Have an Account? <Link to='/register' >Sign Up</Link> </p>
            </div>
        );
    }
}

export default Login;
