import React  from 'react' ;
import './directory.scss';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectorDirectorySections} from '../../Redux/Directory/Directory-selector';


const Directory = ({ sections , history, match}) => {
    
        return(       
            <div className= "directory">
                {sections.map(item => {
                  return(
                 
                   <div key={item.id} className= {`${item.size} menu-items`} onClick = {() => history.push(`shop${match.url}${item.link}`) }>
                      
                         <div style = {{ 
                             backgroundImage : `url(${item.image})` 
                             }} className ="background"/>
                            <div className="content">
                                <h1>{item.title}</h1>
                                <span>Shop Now</span>
                            </div>
                           </div> 
                   
                  )
                })}
               
            </div>

        )
    }

    const mapStateToProps = (state) =>( {
        sections: selectorDirectorySections(state)
    })

export default withRouter(connect(mapStateToProps)(Directory)) ;