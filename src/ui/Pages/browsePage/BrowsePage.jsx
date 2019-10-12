//Dependencies
import React, { Component } from 'react';

//UI
import NewHeadNavigator from '../../reusableComponents/NewHeadNavigator'
import BrowseComponent from './BrowseComponent'
import {Hierarchy} from '../../../config/BrowseHierarchy'

class BrowsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div style = {{background:"#fdfdfd", minHeight:1500}}>
                <NewHeadNavigator tabValue = "browse"/>
                <div style = {{ maxWidth:750, margin:"auto"}} >
                    <BrowseComponent  fileds = {Hierarchy} level = {0}/>
                </div>
            </div>

        )

    }
};

export default BrowsePage;