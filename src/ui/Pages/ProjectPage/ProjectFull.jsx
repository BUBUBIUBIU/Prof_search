

import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Paper,Divider,AppBar,Card,Tab, Tabs, CardContent, Typography,Collapse, Button, withStyles,ToolBar, Modal,FormControl,NativeSelect,InputBase  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Plus, Close, ConsoleNetwork } from 'mdi-material-ui';

//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'
import BootstrapStyleMultiBox from '../../reusableComponents/BootstrapStyleMultiBox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import ThirdHeader from "../../reusableComponents/ThirdHeader"
import SelectorOne from '../../reusableComponents/textField/SelectorOne'


//api


//config
import {degreeName} from '../../../config/degreeName'
import {subjectCode} from '../../../config/subjectCode'
import {creditPoints} from '../../../config/creditPoints'
import {projectStart} from '../../../config/projectStart'
import {projectType} from '../../../config/projectType'
import {plannedCompletion} from '../../../config/plannedCompletion'
import {supervisorName} from '../../../config/supervisorName'

const FIRSTNAME_EMPTY = "First name can not leave empty"
const LASTNAME_EMPTY ="Last name can not leave empty"
const EMAIL_INCORRECT = "Email Incorrect"

const styles = theme => ({
      paper:{
        // ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        // boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        boxShadow: "none",
        // width:800,
        width:"60%",
        margin:"auto"

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


const role = {
    
}

class ProjectFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.authValue,
            toAnotherPage:"",
            open: this.props.open,
            email: "",
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
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              phoneNumber:this.state.phoneNumber,
              description:this.state.description,
              country:this.state.country,
              city:this.state.city
          };

          this.setState({value:"login"})
        }else{
            var info = "";
            if (!this.emailValidate()) info = info + EMAIL_INCORRECT;
            if (!this.firstNameValidate()) info = info + " " + FIRSTNAME_EMPTY;
            if(!this.lastNameValidate()) info = info + " " + LASTNAME_EMPTY;
            alert(info)
        }


      }

      signUpInfoCheck = () =>{
        return this.lastNameValidate() && this.firstNameValidate() && this.emailValidate() && this.descriptionValidate()
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

      descriptionValidate = () =>{
        return this.state.description.replace(/(^s*)|(s*$)/g, "").length !== 0
      }

    handleTab = (event,value) => {
        this.setState({value});
    }

    render(){
        const {classes, profile} = this.props
        const {value} = this.state


        return(
        <div>
            <ThirdHeader />


            <Paper className={classes.paper} style = {{marginTop:2, paddingTop:30,paddingRight:200}}>

                       
                <Typography variant="h1">
                    <div style={{ verticalAlign: "middle", height: "100%",paddingBottom:40}}>
                        Add Degree
                    </div>
                </Typography>

                <BootstrapStyleSearchBox label="Student's Unimelb Username" 
                            compusory={true}
                            onChangeInput={this.handleChange("Student's Unimelb Username")} 
                />
                <BootstrapStyleSearchBox 
                            label="First Name" 
                            // placeHolder="Xiao" 
                            compusory={true}
                            onChangeInput={this.handleChange("FirstName")} 
                />
                <BootstrapStyleSearchBox 
                            label="Last Name" 
                            // placeHolder="Wang" 
                            compusory={true}
                            onChangeInput={this.handleChange("lastName")} 
                />

                <BootstrapStyleSearchBox 
                    label="Student ID" 
                    onChangeInput={this.handleChange("Student ID")} 
                    compusory={true} />

                <BootstrapStyleSearchBox 
                    label="Email" 
                    // placeHolder="xxx@gmail.com"
                    onChangeInput={this.handleChange("email")} 
                    compusory={true} />
            
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Degree Name"
                    items={degreeName}
                    onChangeSelect={this.handleChange("Degree Name")}
                    value = {this.state.degreeName}/>

                <BootstrapStyleSearchBox 
                    label="Degree Name(if other)" 
                    onChangeInput={this.handleChange("Degree Name(if other)")}/>

                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Subject Code"
                    items={subjectCode}
                    onChangeSelect={this.handleChange("Subject Code")}
                    value = {this.state.subjectCode}/>

                <div class="inline" style={{display:"flex", margin:"0 -5px"}}>
                    <div style={{flexGrow:1, margin:"0 10px"}}>
                    <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Project Start"
                    items={projectStart}
                    onChangeSelect={this.handleChange("Project Start")}
                    value = {this.state.toYear}/>
                    </div>

                    <div style={{flexGrow:1,margin:"0 10px"}}>
                    <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Planned  Project Completion"
                    items={plannedCompletion}
                    onChangeSelect={this.handleChange("plannedCompletion")}
                    value = {this.state.toYear}/>
                    </div>
                </div>
                <BootstrapStyleSearchBox 
                    label="Planned Project Completion （if other）" 
                    onChangeInput={this.handleChange("Planned Project Completion （if other）")} />
                
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Project Type"
                    items={projectType}
                    onChangeSelect={this.handleChange("Project Type")}
                    value = {this.state.subjectCode}/>
                
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Credit Points"
                    items={creditPoints}
                    onChangeSelect={this.handleChange("Credit Points")}
                    value = {this.state.subjectCode}/>
                
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Superviser Name"
                    items={supervisorName}
                    onChangeSelect={this.handleChange("Superviser Name")}
                    value = {this.state.supervisorName}/>

                <BootstrapStyleSearchBox 
                    label="Co-supervisor(if any)" 
                    onChangeInput={this.handleChange("Co-supervisor(if any)")} />

                    
                <BootstrapStyleMultiBox 
                    label="Other Information" 
                    multiline
                    rows="4"
                    onChangeInput={this.handleChange("confirm_password")} />
{/* 
                <TextField
                    label="Other Information"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                /> */}
                <Typography variant= 'h4'style ={{fontWeight:"bold", margin:"5px 0 10px 0",fontSize:12,color:"#fbaf3b" }}>
                In the future, you can update the above information in the section “Details of<br/>
                Coursework Master Project” in your profile.
                </Typography>
                <div style={{ paddingBottom:20,paddingLeft:750,marginTop:20}}>
               
                    <Button variant="contained" color="primary" size="large" onClick={this.submit}>
                        Next
                    </Button>
                </div>

            </Paper>

        </div>


        )
    }
    
}


export default withStyles(styles)(ProjectFull);