import React, {Component, Fragment} from 'react'
import './App.scss';
import HomePage from "./Component/HomePage/homepage";
import {Route, Redirect} from "react-router-dom";
import Hats from './Component/hats/hats';
import Jackets from './Component/jackets/jackets';
import Sneakers from './Component/Sneakers/sneakers';
import Woman from './Component/Woman/woman';
import Mens from './Component/men/men';
import Shoping from './Component/Shopping/shopping';
import Header from './Component/Header/header';
import MainSingIn from './Component/MainSingIn/MainSingIn';
import CheckOut from './Component/Check-out/checkOut';
import {auth , createUserProfileDecument} from './fierbase/fierbase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from '../src/Redux/Users/user-action';
import {selectCurrentUser} from './Redux/Users/user-selector';


class App extends Component{

 unsubiscribeFormAuth = null
  
componentDidMount() {

  const {setCurrentUser} = this.props ;

  this.unsubiscribeFormAuth = auth.onAuthStateChanged( async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDecument(userAuth);
    
    userRef.onSnapshot( snapShot => {

      setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()

        });
    });
  }
  setCurrentUser(userAuth);
  });
}

componentWillUnmount(){
  this.unsubiscribeFormAuth()
}

render(){
  return (
  <Fragment>
      <Header />
      
    <Route exact path="/">
        <HomePage/>
    </Route>
    <Route path ="/hats">
    <Hats/>
    </Route>
    <Route path ="/jackets">
    <Jackets/>
    </Route>
    <Route path ="/sneakers">
      <Sneakers/>
    </Route>
    <Route path ="/woman">
      <Woman/>
    </Route>
    <Route path ="/men">
      <Mens/>
    </Route>
    <Route path = "/shop">
    <Shoping/>
    </Route>
    <Route exact path = "/sing" render ={()=> this.props.currentUser ? ( <Redirect to ="/" /> ) : ( <MainSingIn/> )} /> 
    <Route path = "/checkout">
   <CheckOut/>
    </Route>

   </Fragment>
   
  
)}
}
const mapStateToProps = (state) =>({
  currentUser : selectCurrentUser(state)
})


const mapDispatchToProps = dispatch =>  ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
