import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card,  ListItemText, Typography,Paper, Avatar, withStyles,Button, Divider, Modal} from '@material-ui/core';
import {Contacts} from '@material-ui/icons'
import { Close} from 'mdi-material-ui';
import {MailOutlined, Phone, Edit, ArrowRight} from '@material-ui/icons/';

//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'


// RouterDependencies
// import { Redirect } from 'react-router-dom'

//api
import {UploadAvatar}  from '../../../api/personalProfileApi'

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
            inputModal: false,
            Avatar:this.props.Avatar,
            FirstName:this.props.FirstName,
            LastName: this.props.LastName,
            Email:this.props.Email,
            Phone: this.props.Phone,

        };
    }

    componentDidUpdate = () =>{
        if (this.state.Avatar !== this.props.Avatar){
            this.setState({Avatar:this.props.Avatar})
        }

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

    submit = (e) =>{
        e.preventDefault();
        let formData = new FormData(e.target);
        UploadAvatar(formData);



    }

    render(){

        console.log(this.state)

        const {classes} = this.props

        return(
            <div>

            <Paper className = {classes.paper} style = {{ padding:25}}>
                <div style = {{display:"flex", alignItems:"center"}}>
                    <div style= {{flex:"0 1 auto", maxWidth:200}}>
                        <Avatar  className={classes.bigAvatar} src = {"http://" + this.state.Avatar}/>
                    </div>
                    <div  style= {{flex:"0 1 auto", maxWidth:500, padding: 30, marginRight:"auto"}}>
                        <Typography variant="h1">
                            {this.props.FirstName} {" "} {this.props.LastName}
                        </Typography>
                        <Typography variant="body1">
                            <p style={{fontWeight:500}}> Student</p>
                            {/* <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p> */}
                        </Typography>
                    </div> 

                    <div style= {{flex:"0 1 auto", maxWidth:500, padding: 30, display:"flex", flexDirection:"column", justifyContent:"center"}}>
                        <Typography style= {{margin:"auto", fontWeight:500, fontSize:18,color: "#9b9b9b"}}>
                            Completeness
                        </Typography>
                        <Typography  style ={{fontSize:48,margin:"auto", fontWeight:500,color: "#9b9b9b"}}>
                            5%
                        </Typography>
                        <Button color ="primary">
                            Detail <ArrowRight/>
                        </Button>


                    </div>
                </div>

                <div style = {{paddingLeft: 10}}>
                    <Contacts styles ={{margin:"15px", verticalAlign: "middle"}}/> 
                    <Typography variant ="h2" inline>
                        <div style ={{fontWeight:600, margin:"15px",verticalAlign: "middle",textAlign: "center", display:"inline" }}>
                        contact info
                        </div>
                    </Typography>

                </div>
            </Paper>


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
            
            </div>
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