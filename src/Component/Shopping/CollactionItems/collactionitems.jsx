import React from 'react';
import './collactionitems.scss';
import CustomButton from '../../custom-button/custombutton'
import {connect} from 'react-redux';
import {addCartItem} from '../../../Redux/Cart/cart-action';

const CollactionsItems = ({item , addCartItem}) =>{
    const {name,price,imageUrl} = item
    return(
            <div className="collaction-items">
                <div style ={{
                    backgroundImage: `url(${imageUrl})`
    
                }}
                 className="image">

                </div>
                <div className="over"> 
                <CustomButton className ="shop-now" onClick={()=> addCartItem(item)} > Add To Cart </CustomButton>
                </div>
                <div className="collaction-footer">
                    <span className ="name">{name}</span>
                    <span className="price">{price}$</span>
                </div>
            </div> 
        )
}

const mapDispatchToProps = dispatch =>({
    addCartItem: item =>{ dispatch(addCartItem(item)) }
})

export default connect(null,mapDispatchToProps)(CollactionsItems) ;