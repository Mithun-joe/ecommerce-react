import React from 'react';
import './sign-in.style.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({'email':'','password':''}) //SETTING STATE MANUALLY FOR CLEARING OUT VALUES
    };

    handleChange = (e) =>{
        const {value ,name } = e.target;

        this.setState({[name]:value}) //SETTING STATE DYNAMICALLY WHICH AUTOMATICALLY
        // CALLS FOR THE VALUE AS THE USER ENTERS THE VALUE AND SETS IT TO THE NAME OF THE STATE
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required />
                        <div className='buttons'>
                            <CustomButton type='submit'> Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                {''}
                                Sign In With{''}
                            </CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}

export default  SignIn;