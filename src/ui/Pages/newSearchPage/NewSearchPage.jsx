//Dependencies
import React, { Component } from 'react';

//UI
import NewHeadNavigator from '../../reusableComponents/NewHeadNavigator'
import SearchSection from './SearchSection'

class NewSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div style = {{background:"#fdfdfd",minWidth:900}}>
            <NewHeadNavigator tabValue = "search"/>
            <SearchSection />
            </div>

        )

    }
};

export default NewSearchPage;