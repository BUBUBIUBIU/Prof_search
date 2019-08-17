/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:9th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar,ListItem, Grid,InputBase,Divider,List,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
    root:{
        '&$focusVisible': {
            backgroundColor: 'rgba(251, 175, 59, 0.13)',
          },
        '&$selected, &$selected:hover': {
            backgroundColor: 'rgba(251, 175, 59, 0.13)',
          },
    },
    listButton: {
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest,
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgba(251, 175, 59, 0.13)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      selected: {backgroundColor: 'rgba(251, 175, 59, 0.13)'},
      focusVisible: {},
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"340px",
      // width:"100%"
    },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
      itemSelected:{
          backgroundColor: "red"
      }
})


class MessageSnippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [
                {
                name:"Artem",
                place:"Professor|Melborune University",
                time:"",
                messageSnippet:"Dear doctor, I'm trying to reach you by sadljfldvnmzklkf'poJFDBA'PK[KDSAPHF'ANOINI]......"
                },
                {
                    name:"Rui Zhang",
                    place:"Professor|Melborune University",
                    time:"",
                    messageSnippet:"Hi There, I'm trying to ...."
                },
                {
                    name:"Buyya",
                    place:"Professor|Melborune University",
                    time:"",
                    messageSnippet:"Dear doctor, I'm trying to ...."
                },
            ]
        };
    }

    componentDidMount(){

    }

    pop = () =>{
        alert("clicked")
    }

    
    render(){
        const {classes, profile,educations} = this.props
        const {messageList} = this.state
                // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
                const Messages = messageList.map((message, index) =>
                <ListItem key={message._id}  button   classes={{
                    root: classes.root, //  override root style
                    button:classes.listButton, // overried button style
                  }}>
                    <div style={{width:"100%", marginBottom:"20px"}}>
                        <div style={{float:"left", width:"30%"}}>
                            <Avatar style={{width:"70px", height:"70px", borderRadius:15}}
                                src="https://pic2.zhimg.com/80/v2-d888ae1c0639ddcf1a7fdabf199a36a3_hd.jpg" />
                        </div>

                        <div style={{width:"100%", height:"100%", margin:"5px"}}>
                            <Typography variant="h3" display='block' style={{marginBottom: "5px"}} gutterBottom>
                                <div>
                                    <span style={{fontWeight:"bold"}}>
                                        {message.name}
                                    </span>
                                    <Typography variant="subtitle2" display='block' style={{float:"right"}}
                                        gutterBottom>
                                        Yesterday
                                    </Typography>
                                </div>
                            </Typography>

                            <Typography variant="subtitle2" noWrap={true} display='block'>
                                {message.place}
                            </Typography>

                            <Typography variant="subtitle2" noWrap={true} display='block' style={{fontWeight:"bold"}}
                                gutterBottom>
                                {message.messageSnippet}
                            </Typography>
                        </div>
                        <Divider />
                    </div>
                    <Divider />
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