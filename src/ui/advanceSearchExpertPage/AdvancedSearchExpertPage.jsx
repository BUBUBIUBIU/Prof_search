//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../reusableComponents/HeadNavigator.jsx'
import AdvancedSearchExpertsSection from './AdvancedSearchExpertsSection'

class AdvancedSearchExpertPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div>
            <HeadNavigator tabValue = "SearchExpert"/>
            <AdvancedSearchExpertsSection />
            </div>

        )

    }
};

export default AdvancedSearchExpertPage;