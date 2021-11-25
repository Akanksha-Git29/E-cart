import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../general/Input'
import { register } from '../../actions/authAction'
import { useNavigate } from 'react-router-dom'
export const withRouter = (Component) => { //works only for react6
    const Wrapper = (props) => { 
        const history = useNavigate(); //userNavigator ~ useHistory ~withRoutes

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};


class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
        }
    }
    onChange(e) {
        console.log(e)
    }

    render() {
        const { name, password, password2, email } = this.state
        return (
            <div className="container">
                <h1 className="large text-primary">Register</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Create Your Account
                </p>
                <div className="form">
                    <Input
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        value='name'
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                        value='email'
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name='password'
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name='password2'
                        type='password'
                        placeholder='Confirm Password'
                        value={password2}
                        onChange={this.onChange}
                    />
                </div>
                <button className="btn btn-primary">Click to Register</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { register })(withRouter(Register))
