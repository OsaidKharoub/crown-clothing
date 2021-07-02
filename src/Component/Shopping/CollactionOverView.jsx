import React from 'react';

import CollactionsPreview from './CollactionPreview/Collactionpreview';

import {selectorCollectionForPreview} from '../../Redux/Shop/shop-selector';

import {connect} from 'react-redux';


const CollactionOverView = ({collactions}) =>{
  
    return(
        <div className="collacton-over-view">
            {
              collactions.map( collaction =>{
                       return(
                        <CollactionsPreview key={collaction.id} title={ collaction.title} items ={collaction.items}  />
                       )
                   })

            }
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("state", state);
    return{
    collactions:selectorCollectionForPreview(state)
    }
}
export default connect(mapStateToProps)(CollactionOverView) ;