/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th March 2019]
 */


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