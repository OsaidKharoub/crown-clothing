import React from 'react';

import CollactionsItems from '../Shopping/CollactionItems/collactionitems';

import {connect} from 'react-redux';

import { selectorCollection } from '../../Redux/Shop/shop-selector';

import './collaction-style.scss'

const CollactionPage = ({ collections }) => {
    const {title, items} = collections
return(

    <div className="collction-page">
        <h2>{title}</h2>
         <div className="items">
         {
            items.map( item => {
                return (
                    
                    <CollactionsItems key={item.id}  item={item} />
                   );
            })
        }
         </div>
       
    </div> 
)}   

const mapStateToProps = (state,ownprops) => {
    console.log("state", state);
    console.log("ownprops", ownprops);
    return {
        collections :selectorCollection(ownprops.match.params.collectionId)(state)
      }
};


export default connect(mapStateToProps)(CollactionPage) ;