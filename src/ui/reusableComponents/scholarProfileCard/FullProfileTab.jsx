import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {List, ListItem} from '@material-ui/core';

class FulProfileTab extends Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }

    render() {
        const scholarEducations = this.props.educations.map((education) =>
        <ListItem key={education.toString()}>
            {education}
        </ListItem>
        );
        
        return(
            <List component="nav">
                {scholarEducations}
            </List>
        );
    }

}

export default FulProfileTab;