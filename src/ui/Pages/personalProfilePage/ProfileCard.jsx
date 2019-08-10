import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card,  CardContent, ListItemText, Typography,Paper, Avatar, withStyles, CardHeader, Button, Divider, Modal} from '@material-ui/core';
import {Contacts} from '@material-ui/icons'
import { Close } from 'mdi-material-ui';
import {MailOutlined, Phone, Edit} from '@material-ui/icons/';

//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'


// RouterDependencies
// import { Redirect } from 'react-router-dom'

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
    }, 
    modalButton: {
        float: "right",
        verticalAlign:"middle", 
        color:"#000000",
    },
    icon:{
        float: 'left',
        width: "19px",
        height: '14px'
    },
    contactStyle: {
        paddingTop: '10px', 
        color: 'blue',
        paddingBottom: "15px"
    },
    paper:{
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
            toContactList: false,
            inputModal: false
        };
    }

    openContactModal = () =>{
        this.setState({contactModal:true})
    }

    openInputModal = () =>{
        this.setState({contactModal:false})
        this.setState({inputModal:true})
    }

    directToContectList = () =>{
        this.setState({toContactList:true})
    }

    contactHandleClose = () =>{
        this.setState({contactModal:false})
    }

    inputHandleClose = () => {
        this.setState({inputModal:false})
    }

    render(){

        const {classes} = this.props

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
                        {this.props.FirstName} {" "} {this.props.LastName}
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
                onClose={this.contactHandleClose}
                >
                <div className = {classes.modal}>
                    <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px", height: '40px'}} >
                        <div>
                            <Typography variant ="h1">
                                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                                    Wang Xiao
                                </div>
                                <Button className = {classes.modalButton} onClick = {this.contactHandleClose}>
                                <Close/>
                                </Button>
                            </Typography>       
                        </div>
                    </Paper>

                    <Paper className = {classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px"}} >
                        
                        <Typography variant="button" style = {{paddingBottom: "15px"}} >
                            Contact info
                            <Button className = {classes.modalButton} onClick = {this.openInputModal}>
                                <Edit/>
                            </Button>
                        </Typography>

                        <Typography variant="h3">
                            <MailOutlined className = {classes.icon}/>Email
                            <div className={classes.contactStyle}>123</div>
                            <Phone className={classes.icon}/>Phone 
                            <div className={classes.contactStyle}>123</div>
                        </Typography>

                    </Paper>
                </div>

            </Modal>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.inputModal}
                onClose={this.inputHandleClose}
                >
                <div className = {classes.modal}>
                    <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px", height:"40px"}} >
                        <div>
                            <Typography variant ="h1">
                                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                                    Edit Contact Info
                                </div>
                                <Button className = {classes.modalButton} onClick = {this.inputHandleClose}>
                                <Close/>
                                </Button>
                            </Typography >       
                        </div>
                    </Paper>

                    <Paper className ={classes.paper} style = {{paddingTop: '10px'}} >
                        <Typography variant="h3">
                            <BootstrapStyleSearchBox
                                label = "Email"
                            />
                            <BootstrapStyleSearchBox
                                label = "Phone"
                            />

                            <Button style= {{float: "right", marginBottom:"10px"}} variant="contained" color="primary" size="small">
                                    Save
                            </Button>

                        </Typography>

                    </Paper>

                </div>

            </Modal>

            </Card>
        )
    }
}

ProfileCard.propTypes = {
    FirstName: PropTypes.string,
    LastName: PropTypes.string,
    Email:PropTypes.string,
    Phone: PropTypes.string,
};



export default withStyles(styles)(ProfileCard);