import React,{Component}  from 'react';

import FormInput from '../../Form-input/forminput'
import CustomButton from '../../custom-button/custombutton';

import {auth , createUserProfileDecument} from '../../../fierbase/fierbase.utils';

import './singup.scss'


class SingUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email : '', 
            password : '',
            confirmpassword :''

        }
    }

    handelSubmit = async evnet => {
        evnet.preventDefault();

        const {displayName,email,password,confirmpassword} = this.state;

        if(password !== confirmpassword){
            alert("password don't match !!!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            console.log(user);
            createUserProfileDecument( user, {displayName});

            this.setState({
                displayName:'',
                email : '', 
                password : '',
                confirmpassword :''
            })

        }catch(error){
            console.error(error);
        }
    }

    handleChange = evnet => {
        const {name,value} = evnet.target ;
        this.setState({[name] : value})
      
    }

    render(){
        return(
            <div className="sing-up">
                <h2 className="titel"> i dont have an acount</h2>
                <h5 className="titel">Sing in with your email and password.</h5>
                <form className="singin-form" onSubmit={ this.handelSubmit }>

                    <FormInput 
                    type="text"
                    name="displayName"
                    label = "Display Name"
                    value = {this.state.displayName} 
                    required
                    handelchange={this.handleChange}
                    />
                    <FormInput
                     name="email"
                     type="email" 
                     label = "Email"
                     value = {this.state.email} 
                     handelchange={this.handleChange}
                     required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    label = "Password" 
                    value = {this.state.password} 
                    handelchange={this.handleChange} 
                    required/>
                    <FormInput
                     name="confirmpassword"
                     type="password"  
                     label = "Confirm Password" 
                     value = {this.state.confirmpassword} 
                     handelchange={this.handleChange}
                     required/>

                    <CustomButton type="submit" > sing up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingUp;