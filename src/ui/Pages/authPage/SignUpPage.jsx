import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Paper,Divider,AppBar,Card,Tab, Tabs, CardContent, Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close, ConsoleNetwork } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import ThirdHeader from "../../reusableComponents/ThirdHeader"


//router 
import { Redirect } from 'react-router-dom'

//api
import {signUp} from '../../../api/authApi.js'


const PASSWORD_INCORRECT= "PassWord must be at least 6 characters, and must contain one upperCase character and one number"
const FIRSTNAME_EMPTY = "First name can not leave empty"
const LASTNAME_EMPTY ="Last name can not leave empty"
const EMAIL_INCORRECT = "Email Incorrect"
const PASSWORD_NOTEQUAL = "Password should euqal to confirm password"

const styles = theme => ({
      paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
      },
      typeSelectBox:{
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #cccccc',

    },
    label:{
        fontSize:14,
        fontFamily:"Montserrat",
        textAlign:"center"
    }

  });

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"signup",
            toAnotherPage:"",
            open: this.props.open,
            email: "",
            password: "",
            confirm_password: "",
            firstName:"",
            lastName:"",
            role:"",
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
              confirm_password: this.state.confirm_password,
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              phoneNumber:this.state.phoneNumber,
              description:this.state.description,
              country:this.state.country,
              city:this.state.city
          };
          signUp(data);  
          this.setState({value:"login"})
        }else{
            var info = "";
            if (!this.emailValidate()) info = info + EMAIL_INCORRECT;
            if (!this.firstNameValidate()) info = info + " " + FIRSTNAME_EMPTY;
            if(!this.lastNameValidate()) info = info + " " + LASTNAME_EMPTY;
            if(!this.passswordValidate()) info = info + " " + PASSWORD_INCORRECT;
            if(!this.passwordEqual()) info = info + " " + PASSWORD_NOTEQUAL;
            alert(info)
        }


      }

      signUpInfoCheck = () =>{
        return this.lastNameValidate() && this.firstNameValidate() && this.emailValidate() && this.passswordValidate() && this.passwordEqual()
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
      passwordEqual = () =>{
        return this.state.password == this.state.confirm_password
    }

    handleTab = (event,value) => {
        this.setState({value});

    }

    render(){
        const {classes, profile} = this.props
        const {value} = this.state

        if (this.state.value === "login") {
            return <Redirect to='../login' />
          }

        return(
<div>
    <ThirdHeader />
    <Card classes={{
               root: classes.card, // class name, e.g. `classes-nesting-root-x`
             }}style={{width:"50%",marginLeft:"300px"}}>

        <AppBar position="static" color="default" className={classes.cardAppBar}>
            <Tabs variant="fullWidth" value={value} onChange={this.handleTab} indicatorColor="primary">
                <Tab value="login" label="login" />
                <Tab value="signup" label="sign up" />
            </Tabs>
        </AppBar>
        <Divider />
            {/*
            <AuthPage authValue="signup" /> */}
            <Paper className={classes.paper} style={{padding:"20px 50px 20px 30px",marginBottom:"10px",height:"900px"}}>
                <div class="inline" style={{display:"flex", margin:"0 -5px"}}>
                    <div style={{flexGrow:1, margin:"0 5px"}}>
                        <BootstrapStyleSearchBox label="First Name" placeHolder="Xiao" compusory={true}
                            onChangeInput={this.handleChange("firstName")} />

                    </div>
                    <div style={{flexGrow:1,margin:"0 5px"}}>
                        <BootstrapStyleSearchBox label="Last Name" placeHolder="Wang" compusory={true}
                            onChangeInput={this.handleChange("lastName")} />
                    </div>
                </div>

                <FormControl required className={classes.formControl}>

                    <InputLabel htmlFor="age-required">Role</InputLabel>
                    <NativeSelect value={this.state.gpaType} onChange={this.handleChange("role")}
                        className={classes.typeSelectBox} variant="outlined" label="Role" compulsory={true}>
                        <option value={0} />
                        <option value={1}>
                            Student
                        </option>
                        <option value={2}>
                            Teacher
                        </option>
                    </NativeSelect>
                </FormControl>

                <Divider variant="middle" />

                <BootstrapStyleSearchBox label="Email" placeHolder="xxx@gmail.com"
                    onChangeInput={this.handleChange("email")} compusory={true} />

                {/* todo */}
                <BootstrapStyleSearchBox label="Password" type="password" placeHolder="At least 8 characters"
                    autoComplete="current-password" compusory={true} onChangeInput={this.handleChange("password")} />
                <BootstrapStyleSearchBox label="Confirm Password" type="password" autoComplete="current-password"
                    placeHolder="At least 8 characters" compusory={true}
                    onChangeInput={this.handleChange("confirm_password")} />

                <BootstrapStyleSearchBox label="Phone Number" compusory={false}
                    onChangeInput={this.handleChange("phoneNumber")} />
                <BootstrapStyleSearchBox label="Description" compusory={false}
                    onChangeInput={this.handleChange("description")} />
                <BootstrapStyleSearchBox label="Country" compusory={false}
                    onChangeInput={this.handleChange("country")} />

                <BootstrapStyleSearchBox label="City" compusory={false} onChangeInput={this.handleChange("city")} />
                <FormControlLabel control={<Checkbox value="pwcheck" color="Primary" />}
                classes ={{
                    label: classes.label
                }}
                label="I have read and agreed to the Service Agreement and Privacy Policy" />

                <div style={{float: "right",paddingBottom:"20px"}}>
                    <Button variant="contained" color="primary" size="small" onClick={this.submit}>
                        Sign Up
                    </Button>
                </div>

            </Paper>


    </Card>
</div>




        )
    }
    
}


export default withStyles(styles)(SignUpPage);