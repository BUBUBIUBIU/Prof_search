//Dependencies
import React, { Component } from 'react';

//UI
import NewHeadNavigator from '../../reusableComponents/NewHeadNavigator'
import SearchExpertsSection from './SearchExpertsSection'

class SearchExpertPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div>
            <NewHeadNavigator tabValue = "SearchExpert"/>
            <SearchExpertsSection />
            </div>

        )

    }
};

export default SearchExpertPage;