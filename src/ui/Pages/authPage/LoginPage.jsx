//redundancy
import React, { Component } from 'react'
import cookie from 'react-cookies';
import PropTypes from 'prop-types';

//@materail design
import { Paper,Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close, ConsoleNetwork } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'

//api
import {Login} from '../../../api/authApi.js'

//redux
import { connect } from 'react-redux'
import {loginSuccess} from '../../../redux/actions/index'


const styles = theme => ({
      paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
        
      },

  });

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
      };
    
      emailInput(text){
          console.log(text)
      }

      handleChange = field => event => {
        this.setState({[field]:event.target.value})
      }

      submit = () =>{
          if(this.emailValidate() && this.passswordValidate()){
            const data = {
                email:this.state.email,
                password: this.state.password
            }
            const loginSuccessful =(name) => this.props.loginSuccess(name);

            //method from login API, if succcusss, then store cookie, otherwise don't  
            Login(data)
                .then(function(response){
                    cookie.save('userId', response.content.id);
                    cookie.save('token', response.content.token);
                    let name = response.content.FirstName + response.content.LastName
                    loginSuccessful(name);
                    alert("login successful");
                    
                },function(err){
                    alert("login failed")
                    console.log(err);
                })
                this.handleClose();
          }else{
            alert("email address or password incorrect")
          }
      }
      
      emailValidate = () =>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
      }


      passswordValidate = () =>{
          return this.state.password !== "" && this.state.password.length > 5
      }


    render(){
       
        const {classes, profile} = this.props
        return(
            <div>
             


            <Paper className ={classes.paper} style ={{padding:"20px 30px",height:"200px"}}>
                <BootstrapStyleSearchBox
                    label = "Email Adress"
                    placeHolder = "xxx@gmail.com"
                    onChangeInput = {this.handleChange("email")}
                    compusory = {true}
                    />

                {/* todo */}
                <BootstrapStyleSearchBox    
                    label = "Password"
                    type="password"
                    autoComplete="current-password"
                    placeHolder = "Please enter your password"
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
           
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    loginSuccess: (name)=> dispatch(loginSuccess(name)),
    dispatch
});

export default connect(null,mapDispatchToProps)(withStyles(styles)(LoginPage));