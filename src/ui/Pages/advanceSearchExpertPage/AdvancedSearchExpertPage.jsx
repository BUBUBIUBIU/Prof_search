//Dependencies
import React, { Component } from 'react';

//UI
import NewHeadNavigator from '../../reusableComponents/NewHeadNavigator '
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
            <NewHeadNavigator tabValue = "search"/>
            <AdvancedSearchExpertsSection />
            </div>

        )

    }
};

export default AdvancedSearchExpertPage;