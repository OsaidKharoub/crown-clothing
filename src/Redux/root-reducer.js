import {combineReducers} from 'redux';

import userReducer from './Users/user-reducer';

import cartReducer from './Cart/cart-reducer';

import {directoryReducer} from  './Directory/Directory-reducer';

import { shpoReducer } from './Shop/shop-reducer' ;

import { persistReducer } from 'redux-persist';


import storage from 'redux-persist/lib/storage';





const persistConfig ={
    key : 'root',
    storage,
    whitelist:['cart']
}



const rootReducer = combineReducers({
    user: userReducer,
    cart : cartReducer,
    directory: directoryReducer,
    shop: shpoReducer
    
 })

export default persistReducer(persistConfig, rootReducer);

