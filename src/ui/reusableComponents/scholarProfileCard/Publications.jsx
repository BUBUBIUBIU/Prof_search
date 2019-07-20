import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {List, Typography, ListItem} from '@material-ui/core';

class Publications extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
 
    }  

    render() {
        const listItems = this.props.items.map((item) =>
        <ListItem key={item.toString()}>
            <Typography variant = "body1">
            - {item.Title}
            </Typography>
        </ListItem>
        );
        
        return(
            <List component="nav">
                {listItems}
            </List>
        ); 
    }

}

export default Publications; 