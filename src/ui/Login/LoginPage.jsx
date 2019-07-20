import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close, ConsoleNetwork } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../reusableComponents/BootstrapStyleSearchBox'

//api
import {signUp} from '../../api/api.js'


const styles = theme => ({
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

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            email: "",
            password: "",
            firstName:"",
            lastName:"",
            phoneNumber:"",
            description:"",
            country:"",
            city:""

        };
        this.emailInput = this.emailInput.bind(this);
    }

    componentDidUpdate(){
        if(this.props.open != this.state.open){
            this.setState({open:this.props.open})
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
        this.props.close();
      };
    
      emailInput(text){
          console.log(text)
      }

      handleChange = field => input => {
        this.setState({[field]:input})
        console.log(this.state.email)
      }

      submit = () =>{


      }


    render(){
        const {classes, profile} = this.props
        return(
            <div>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            <div className = {classes.modal}>

            <Paper className ={classes.paper} style ={{padding:"20px 30px 0px 30px", marginBottom:"3px",height:"40px"}} >
                <div>
                <Typography variant ="h1">
                <div style ={{verticalAlign:"middle",height:"100%", float: "left"}}>
                 Log in 
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                <Close/>
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"20px 30px"}}>
                <BootstrapStyleSearchBox
                    label = "Email Adress"
                    placeHolder = "xxx@gmail.com"
                    onChangeInput = {this.handleChange("email")}
                    compusory = {true}
                    />

                {/* todo */}
                <BootstrapStyleSearchBox    
                    label = "Password"
                    placeHolder = "Please enter yout password"
                    compusory = {true}
                    onChangeInput = {this.handleChange("password")}
                    />


                <div style= {{float: "right"}}>
                <Button variant="contained" color="primary" size="small" onClick = {this.submit}>
                    Log in 
                </Button>
                </div>
                    
            </Paper>
            </div>
            </Modal>
            </div>
        )
    }
    
}


export default withStyles(styles)(LoginPage);