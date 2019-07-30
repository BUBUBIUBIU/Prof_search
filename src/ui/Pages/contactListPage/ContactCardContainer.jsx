import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {withStyles,List, ListItem} from '@material-ui/core';
import MiniCard from './MiniCard'



class ContactCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const contactList = this.props.contactList.map((simpleprofile) =>
        <ListItem key={simpleprofile._id} style={{padding:"0 0 20px 0", width:"750px"}}>
            <MiniCard simpleprofile = {simpleprofile}/>
        </ListItem>
        );
        

        return (
            <List>
                    {contactList}
            </List>
        );
    }
}

export default ContactCardContainer