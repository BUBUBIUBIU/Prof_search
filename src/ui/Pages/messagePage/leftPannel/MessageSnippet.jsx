/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar,ListItem, Grid,Divider,List } from '@material-ui/core';



const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"340px",
      // width:"100%"
    },
})


class MessageSnippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [
                {
                name:"Artem",
                place:"Professor|Melborun University",
                time:"",
                messageSnippet:"Dear doctor, I'm trying to ...."
                },
                {
                    name:"Rui Zhang",
                    place:"Professor|Melborun University",
                    time:"",
                    messageSnippet:"Hi There, I'm trying to ...."
                },
                {
                    name:"Buyya",
                    place:"Professor|Melborun University",
                    time:"",
                    messageSnippet:"Dear doctor, I'm trying to ...."
                },
            ]
        };
    }

    componentDidMount(){

    }

    
    render(){
        const {classes, profile,educations} = this.props
        const {messageList} = this.state
                // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
                const Messages = messageList.map((message, index) =>
                <ListItem key={message._id}>
                    <div style = {{width:"100%", display:"flex"}}>
                        <div style ={{float:"left", width:"30%"}}>
                            <Avatar style={{width:"70px", height:"70px", borderRadius:'5px'}}
                                src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-0/p370x247/50229562_10157302245734739_2837044079051669504_n.jpg?_nc_cat=109&amp;_nc_ht=scontent.fcbr1-1.fna&amp;oh=9af7e41fe295e20bf12794a74726716b&amp;oe=5D53A962" />
                        </div>
                        <div style={{width:"70%", padding:"5px", margin:"5px"}}>
                        <Typography variant ="h3">
                            {message.name} <br/>
                            {message.place} <br/>
                            {message.messageSnippet}
                        </Typography>
                        </div>
                    </div>
                    <div style ={{clear:"left"}}>
                    <Divider variant = "inset" component="li"/>
                    </div>
                </ListItem>
                );

        return(
            <List>
            {Messages}
            </List>
        )

    }
};

export default withStyles(styles)(MessageSnippet);