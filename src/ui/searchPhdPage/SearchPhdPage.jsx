//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../reusableComponents/HeadNavigator.jsx'
import SearchPhdSection from './SearchPhdSection.jsx'

class SearchPhdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div>
            <HeadNavigator tabValue = "SearchPhd"/>
            <SearchPhdSection />
            </div>

        )

    }
};

export default SearchPhdPage;


