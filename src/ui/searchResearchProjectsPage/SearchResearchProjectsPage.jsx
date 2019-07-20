//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../reusableComponents/HeadNavigator.jsx'
import SearchResearchProjectsSection from './SearchResearchProjectsSection.jsx'

class SearchPhdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div>
            <HeadNavigator tabValue = "SearchResearchProjects"/>
            <SearchResearchProjectsSection />
            </div>

        )

    }
};

export default SearchPhdPage;