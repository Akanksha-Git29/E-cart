import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../general/Input'
import { message } from 'antd'
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

        this.onChange = this.onChange.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps && nextProps.auth.errors && nextProps.auth.errors.length > 0){
            nextProps.auth.errors.forEach(error => {
                message.error(error.msg)
            })
        }

        if(nextProps.auth.isAuthenticated){
            message.success("Thankyou for sigining up")
            setTimeout(()=> this.props.history.push("/"),3000)
        }
    }

    onChange(e) {
        // console.log(e.target.name)
        this.setState({[e.target.name] : e.target.value})
    }

    OnSubmit(){
        const {name,email,password} = this.state
        const newUser = {
            name,
            email,
            password
        }

        if(password === this.state.password2){
            this.props.register(newUser)
        }
        else{
            console.log("password doesn't match")
        }
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
                        value={name}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                        value={email}
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
                <button className="btn btn-primary" onClick={this.OnSubmit} >Click to Register</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { register })(withRouter(Register))
