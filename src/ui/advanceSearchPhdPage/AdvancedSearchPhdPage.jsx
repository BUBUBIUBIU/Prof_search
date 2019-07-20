//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../reusableComponents/HeadNavigator.jsx'
import AdvancedSearchPhdSection from './AdvancedSearchPhdSection'

class AdvancedSearchPhdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div>
            <HeadNavigator tabValue = "SearchPhd"/>
            <AdvancedSearchPhdSection />
            </div>

        )

    }
};

export default AdvancedSearchPhdPage;