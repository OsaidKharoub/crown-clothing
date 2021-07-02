import React from 'react';
import  '../Form-input/forminput.scss'



const FormInput = ({handelchange, label, ...otherprops}) =>{
    return(
        <div className="group">
            <input className="form-input" onChange={handelchange} {...otherprops} />
           { label ? 
            (<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
           }
        </div>
    )   
}

export default FormInput ;