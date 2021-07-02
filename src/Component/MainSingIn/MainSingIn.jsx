import React from 'react';
import SingIn from "./SingIn/singin"
import SingUp from './SingUp/singup'
import '../MainSingIn/MainSingIn.scss'


const MainSingIn = () =>{
    return(
        <div className="main-sing-in">
            <SingIn/>
            <SingUp/>
        </div> 
       
        
    )
}

export default MainSingIn ;