//Dependencies
import React, { Component } from 'react';

//UI
import HeadNavigator from '../../reusableComponents/HeadNavigator'
import SearchPhdSection from './SearchPhdSection'

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


