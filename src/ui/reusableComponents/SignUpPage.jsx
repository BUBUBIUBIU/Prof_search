import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close, ConsoleNetwork } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../reusableComponents/BootstrapStyleSearchBox'

//api
import {signUp} from '../../api/authApi.js'


const PASSWORD_INCORRECT= "PassWord must be at least 6 characters, and must contain one upperCase character and one number"
const FIRSTNAME_EMPTY = "First name can not leave empty"
const LASTNAME_EMPTY ="Last name can not leave empty"
const EMAIL_INCORRECT = "Email Incorrect"

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

class SignUpPage extends Component {
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

      handleChange = field => event => {
        this.setState({[field]:event.target.value})
      }

      submit = () =>{
        if(this.signUpInfoCheck()){
          const data = {
              email: this.state.email,
              password: this.state.password,
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              phoneNumber:this.state.phoneNumber,
              description:this.state.description,
              country:this.state.country,
              city:this.state.city
          };
          signUp(data);
          this.handleClose();
        }else{
            var info = "";
            if (!this.emailValidate()) info = info + EMAIL_INCORRECT;
            if (!this.firstNameValidate()) info = info + " " + FIRSTNAME_EMPTY;
            if(!this.lastNameValidate()) info = info + " " + LASTNAME_EMPTY;
            if(!this.passswordValidate()) info = info + " " + PASSWORD_INCORRECT;
            alert(info)
        }


      }

      signUpInfoCheck = () =>{
        return this.lastNameValidate() && this.firstNameValidate() && this.emailValidate() && this.passswordValidate()
      }
      
      lastNameValidate = () =>{
          return this.state.lastName.length > 0
      }

      firstNameValidate = () => {
          return this.state.firstName.length > 0
      }
      
      //validate email 
      emailValidate = () =>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
      }


      passswordValidate = () =>{
          return this.state.password !== "" && this.state.password.length >= 6
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
                 Sign Up
                </div>
                <Button style= {{float: "right",verticalAlign:"middle", color:"#000000"}} size="small" onClick = {this.handleClose}>
                <Close/>
                </Button>
                </Typography >       
                </div>
            </Paper>

            <Paper className ={classes.paper} style ={{padding:"20px 30px"}}>
                <BootstrapStyleSearchBox
                    label = "Email"
                    placeHolder = "xxx@gmail.com"
                    onChangeInput = {this.handleChange("email")}
                    compusory = {true}
                    />

                {/* todo */}
                <BootstrapStyleSearchBox    
                    label = "Password"
                    placeHolder = "At least 6 characters and at most 16 characters"
                    compusory = {true}
                    onChangeInput = {this.handleChange("password")}
                    />
                <BootstrapStyleSearchBox    
                    label = "First Name"
                    compusory = {true}
                    onChangeInput = {this.handleChange("firstName")}
                    />

                <BootstrapStyleSearchBox    
                    label = "Last Name"
                    compusory = {true}
                    onChangeInput = {this.handleChange("lastName")}
                    />
                <BootstrapStyleSearchBox    
                    label = "Phone Number"
                    compusory = {false}
                    onChangeInput = {this.handleChange("phoneNumber")}
                    />
                <BootstrapStyleSearchBox    
                    label = "Description"
                    compusory = {false}
                    onChangeInput = {this.handleChange("description")}
                    />
                <BootstrapStyleSearchBox    
                    label = "Country"
                    compusory = {false}
                    onChangeInput = {this.handleChange("country")}
                    />
                <BootstrapStyleSearchBox    
                    label = "City"
                    compusory = {false}
                    onChangeInput = {this.handleChange("city")}
                    />                

                <div style= {{float: "right"}}>
                <Button variant="contained" color="primary" size="small" onClick = {this.submit}>
                    Sign Up
                </Button>
                </div>
                    
            </Paper>
            </div>
            </Modal>
            </div>
        )
    }
    
}


export default withStyles(styles)(SignUpPage);