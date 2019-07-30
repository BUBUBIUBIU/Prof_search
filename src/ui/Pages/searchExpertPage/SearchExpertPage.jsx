//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../../reusableComponents/HeadNavigator.jsx'
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
            <HeadNavigator tabValue = "SearchExpert"/>
            <SearchExpertsSection />
            </div>

        )

    }
};

export default SearchExpertPage;