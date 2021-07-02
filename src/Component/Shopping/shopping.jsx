import React from 'react';

import {withRouter} from 'react-router-dom';

import { Route } from 'react-router-dom';

import CollactionOverView from './CollactionOverView';

import CollactionPage from '../Collaction/collaction';


const Shopping = ({ match }) => {
    console.log("match", match);
            return(
                <div className ="shop-page"> 
                    <Route exact path={`${match.path}`}  component={CollactionOverView}/>
                    <Route path={`${match.path}/:collectionId`}  component={CollactionPage}/>
                </div>
            )
    }


export default withRouter(Shopping);