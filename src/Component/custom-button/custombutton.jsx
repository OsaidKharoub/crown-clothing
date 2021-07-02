import React from 'react';
import '../custom-button/custombutton.scss'


const CustomButton = ({children, className ,...otherprops}) =>(

            <button className = {` ${className} custom-button`}  {...otherprops}>
                {children}
            </button>
     
    )

export  default CustomButton;