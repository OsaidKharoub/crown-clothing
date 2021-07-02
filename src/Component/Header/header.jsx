import React from 'react';
import './header.scss';
import  Logo  from '../Header/crown.svg';
import Cart from '../Cart-Icon/cart';
import CartDropdown from '../Cart-dropdown/cart-dropdown';
import {Link} from "react-router-dom";
import { auth } from '../../fierbase/fierbase.utils';
import {connect} from 'react-redux';
import {selectorCartHidden} from '../../Redux/Cart/cart-reselect';
import {selectCurrentUser} from '../../Redux/Users/user-selector';




const Header =  ({currentUser, hidden})  => {
    
    console.log(currentUser);

    return(
        <div className="header">
             <Link to= "/">
             <img src={Logo} alt=""  className="logo"/>
            </Link>
           <div className="options">
                <Link to= "/shop" className="option">
                Shop
                </Link>
                <Link to= "/" className="option">
                Contact
                </Link>
                {
                    currentUser 
                    ? 
                    <div className ="option" onClick={()=> auth.signOut()}> Sing out </div>
                    :
                    <Link to= "/sing" className="option">
                    Sing in
                    </Link>
                    
                }
               {
                   
                   <Cart/>
               }
               
                
           </div>
           {    hidden ? null :
                <CartDropdown/>
           }
          
        </div>
    )};

    const mapStateToProps = (state) =>({
        currentUser : selectCurrentUser(state),
        hidden:selectorCartHidden(state)
       
      })
      
export default connect(mapStateToProps)(Header);