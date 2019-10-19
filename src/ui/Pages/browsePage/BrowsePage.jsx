/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [ Chenyang Lu], [date 18th Oct 2019]
 */



//Dependencies
import React, { Component } from 'react';

//UI
import NewHeadNavigator from '../../reusableComponents/NewHeadNavigator'
import BrowseComponent from './BrowseComponent'
// import {Hierarchy} from '../../../config/BrowseHierarchy'

//api
import {getBrowseTree} from '../../../api/staticFileApi'

class BrowsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        const that = this;
        getBrowseTree().then(function(response) {
            const fields = response["fields"]
            console.info(fields)
            console.info(response)
            that.setState({fields})
        },function(reject){

        }
        )
        
    }


    render(){
        return(
            <div style = {{background:"#fdfdfd", minHeight:1500}}>
                <NewHeadNavigator tabValue = "browse"/>
                <div style = {{ maxWidth:750, margin:"auto"}} >
                    <BrowseComponent  fields = {this.state.fields} level = {0}/>
                </div>
            </div>

        )

    }
};

export default BrowsePage;