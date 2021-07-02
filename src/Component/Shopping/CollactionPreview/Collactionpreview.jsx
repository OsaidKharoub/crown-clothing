import React from 'react';
import './collactionpreview.scss'
import CollactionsItems from '../CollactionItems/collactionitems'

const CollactionsPreview = (props) =>{
    const { title, items} = props
    return(
            <div className="collactions-preview">
                <h1 className="title">{title}</h1>
                <div  className="perniew">
                    {
                        items
                        .filter((item,index) => index < 4)
                        .map( item =>(
                            <CollactionsItems  key={item.id}  item={item} />
                        )
                        )}
                </div>
            </div> 
        )
} 

export default CollactionsPreview ;