import React,{Component}  from 'react';
import './singin.scss';
import FormInput from '../../Form-input/forminput'
import CustomButton from '../../custom-button/custombutton';
import {auth, singInWithGoogle} from '../../../fierbase/fierbase.utils'

class SingIN extends Component{

    constructor(props){
        super(props);

        this.state = {
            email : '', 
            password : ''
        }
    }

    handleChange =  evnet => {
        const {name,value} = evnet.target ;
        this.setState({[name] : value})
      
    }

    handleClick = async e =>{
        e.preventDefault();
        const {email,password} = this.state ;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({
                email : '',
                password : ''
    
            })
    
        }catch(error){
            console.error(error);
        }
    }


    render(){
        
        return(
            <div className="sing-in">
                <h2 className="titel">i already have an acount</h2>
                <h5 className="titel">Sing in with your email and password.</h5>
                <form className="singin-form">
                    <FormInput
                        name="email"
                        type="email" 
                        handelchange={this.handleChange} 
                        label ="email"
                        value = {this.state.email} 
                        required/>
                    <FormInput 
                        name="password"
                        type="password" 
                        handelchange={this.handleChange}
                        label = "password"
                        value = {this.state.password} 
                        required />
                    <CustomButton type="submit"  onClick={this.handleClick}> sing in</CustomButton>
                    <CustomButton onClick={singInWithGoogle} uxmode="redirect"  className ="blue"> sing in  with googel  </CustomButton>
                   
                </form>
            </div>
        )
    }
}

export default SingIN;