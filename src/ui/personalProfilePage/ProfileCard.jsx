import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card,  CardContent, ListItemText,Typography,Paper, Avatar, withStyles, CardHeader, Button, Divider, Modal} from '@material-ui/core';
import {Contacts} from '@material-ui/icons'
import { Close } from 'mdi-material-ui';

// RouterDependencies
import { Redirect } from 'react-router-dom'

const styles = theme => ({
    card:{
        backgroundColor: theme.palette.background.card,
        // width: "100%",
        padding:10,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"
    },
    bigAvatar: {
        margin: 10,
        width: 140,
        height: 140,
        borderRadius:"13px"
      },
      button:{
        textTransform: 'none',
        marginTop: "10",
        fontSize: 12,
        fontFamily:'Montserrat',
        padding: '6px 12px',
    },      paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      },
      modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top:"20px"  ,
        left:"300px",
        borderRadius: "4px"
      },

  });

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "projects",
            contactModal: false,
            toContactList: false

        };
    }

    openContactModal = () =>{
        this.setState({contactModal:true})
    }

    directToContectList = () =>{
        this.setState({toContactList:true})
    }

    render(){

        const {classes, profile} = this.props


        return(
            <Card      classes={{
                root: classes.card, // class name, e.g. `classes-nesting-root-x`
              }}>
                <CardHeader 
                    avatar={ 
                    <Avatar className={classes.bigAvatar} src = "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-0/p370x247/50229562_10157302245734739_2837044079051669504_n.jpg?_nc_cat=109&amp;_nc_ht=scontent.fcbr1-1.fna&amp;oh=9af7e41fe295e20bf12794a74726716b&amp;oe=5D53A962"> 
                    </Avatar>
                    }
                    action={
                    <Button color="primary" variant="contained" className ={classes.button} variant="outlined" onClick={this.directToContectList}>
                        Add Profile section
                    </Button>
                    }

                    title = {
                        <Typography variant="h1">
                        Chenyang Lu
                        </Typography>
                    }
                    subheader={ 
                        <Typography variant="body1">
                        <p style={{fontWeight:500}}> Student of University of Melbourne </p>
                        <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p>
                        </Typography>
                    }

                    />

                    <CardContent styles ={{verticalAlign: "middle"}}>
                        <Button onClick ={this.openContactModal}>
                        <Contacts styles ={{margin:"15px", verticalAlign: "middle"}}/> 
                        <Typography variant ="h2" inline>
                            <div style ={{fontWeight:600, margin:"15px",verticalAlign: "middle",textAlign: "center", display:"inline" }}>
                            contact info 
                            </div>
                        </Typography>
                        </Button>
                    </CardContent>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.contactModal}
                onClose={this.handleClose}
                >
                <div className = {classes.modal}>
                    <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"40px"}} >
                    <div>
                    <Typography variant ="h1">
                    <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                    Chenyang Lu
                    </div>
                    <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                    <Close/>
                    </Button>
                    </Typography >       
                    </div>
                    </Paper>
                </div>
            </Modal>
            </Card>
        )
    }
    
    

}

export default withStyles(styles)(ProfileCard);