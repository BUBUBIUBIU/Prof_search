/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [wiwi lin, Chenyang Lu], [date 3th Oct 2019]
 */


import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types';
import { Paper,Typography, Button, withStyles, } from '@material-ui/core';


//Ui
import BootstrapStyleSearchBox from '../../reusableComponents/BootstrapStyleSearchBox'
import ThirdHeader from "../../reusableComponents/ThirdHeader"
import SelectorOne from '../../reusableComponents/textField/SelectorOne'
import {PutProjectDetail, GetProjectDetail} from '../../../api/personalProfileApi'

//redux
import { connect } from 'react-redux'

//router
import { Redirect } from 'react-router-dom'


//config
import {degreeName,subjectCode,creditPoints,projectStart,projectType, plannedCompletion, } from '../../../config/projectDetailLists'
import {validateSelected,validateEmail,validateInputString,validateInputNumber} from '../../../service/validateInputs'

const styles = theme => ({
      paper:{
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "none",
        maxWidth:1000,
        margin:"auto",
        padding:30
      },
  });




class ProjectFull extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        this.getProjectDetail();
    }

    handleChange = field => event => {
    this.setState({[field]:event.target.value})
    }


    //validate email 
    emailValidate = (email) =>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
    }

    notEmptyString = (inputStr) =>{
    return inputStr.replace(/(^s*)|(s*$)/g, "").length !== 0
    }

    validate = () => {
        // if (this.state.Email && this.emailValidate(this.state.Email) && 
        //     this.state.FirstName && this.notEmptyString(this.state.FirstName) &&
        //     this.state.LastName && this.notEmptyString(this.state.LastName) &&
        //     this.state.StudentID && this.notEmptyString(this.state.StudentID) )
        //     return true;
        //  alert("Please check your input")
        // return false
        let selectedValidation = validateSelected(["Degree Name",this.state.DegreeName ],["SubjectCode",this.state.SubjectCode], 
                                            ["Project Start", this.state.ProjectStart], ["Project Complete",this.state.ProjectComplete], 
                                            ["Project Type", this.state.ProjectType], ["Credit Points", this.state.CreditPoints])
        if (selectedValidation !== true){
            alert(selectedValidation)
            return false;
        }

        let emailValidation = validateEmail(this.state.Email)
        
        if (emailValidation !== true){
            alert(emailValidation)
            return false;
        }
        let  inpuStringValidation = validateInputString(["User name", this.state.Username],["First Name", this.state.FirstName], 
                                                    ["Last Name", this.state.LastName], ["Student ID", this.state.StudentID])
        
        if (inpuStringValidation !== true){
            alert(inpuStringValidation)
            return false;
        }
        let inputNumberValidation = validateInputNumber(["Student ID", this.state.StudentID ])
        
        if (inputNumberValidation !== true){
            alert(inputNumberValidation)
            return false;
        }


        return true
    }


    updateProjectDetail = () => {
        if (this.validate()){
            const data = {
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Username: this.state.Username,
                StudentID: this.state.StudentID,
                DegreeName: parseInt(this.state.DegreeName),
                DegreeNameOther: this.state.DegreeNameOther,
                SubjectCode:  parseInt(this.state.SubjectCode),
                ProjectStart: parseInt(this.state.ProjectStart),
                ProjectComplete: parseInt(this.state.ProjectComplete),
                ProjectCompleteOther: this.state.ProjectCompleteOther,
                ProjectType: parseInt(this.state.ProjectType),
                CreditPoints: parseInt(this.state.CreditPoints)
            }
            const that = this;
            console.log(data)
            console.log(this.state)
            PutProjectDetail(data).then(function(resolve){
                console.log(resolve)
                    that.setState({backToPersonalProfile:true})
            }, function(reject){

            })
        }
    }

    checkSelected = () => {

    }

    getProjectDetail = () => {
        const that = this
        GetProjectDetail().then(
            function(resolve){
                console.log(resolve.content)
                const responsedProjectDetail = resolve.content;

                that.setState({
                    FirstName: responsedProjectDetail.FirstName,
                    LastName: responsedProjectDetail.LastName,
                    Username: responsedProjectDetail.Username,
                    StudentID: responsedProjectDetail.StudentID,
                    DegreeName: responsedProjectDetail.DegreeName,
                    DegreeNameOther: responsedProjectDetail.DegreeNameOther,
                    SubjectCode:  responsedProjectDetail.SubjectCode,
                    ProjectStart: responsedProjectDetail.ProjectStart,
                    ProjectComplete: responsedProjectDetail.ProjectComplete,
                    ProjectCompleteOther: responsedProjectDetail.ProjectCompleteOther,
                    ProjectType: responsedProjectDetail.ProjectType,
                    CreditPoints: responsedProjectDetail.CreditPoints
                })
            },function(reject){
                console.log(reject)
            }
        )

    }
    // componentDidUpdate(){
    //     console.log(this.state)
    // }


    render(){
        if(this.state.backToPersonalProfile) {
            return <Redirect push to = "/personalProfile"/>
        }

        const {classes} = this.props

        return(
        <div>
            <ThirdHeader />
            <Paper className={classes.paper}>

                       
                <Typography variant="h1">
                    <div style={{ verticalAlign: "middle", height: "100%",paddingBottom:40}}>
                        Add Degree
                    </div>
                </Typography>

                <BootstrapStyleSearchBox label="Student's Unimelb Username" 
                            compusory={true}
                            onChangeInput={this.handleChange("Username")}
                            value = {this.state.Username}
                />
                <BootstrapStyleSearchBox 
                            label="First Name" 
                            value = {this.state.FirstName}
                            compusory={true}
                            onChangeInput={this.handleChange("FirstName")} 
                />
                <BootstrapStyleSearchBox 
                            label="Last Name" 
                            value = {this.state.LastName}
                            compusory={true}
                            onChangeInput={this.handleChange("LastName")} 
                />

                <BootstrapStyleSearchBox 
                    label="Student ID" 
                    onChangeInput={this.handleChange("StudentID")} 
                    value = {this.state.StudentID}
                    compusory={true} />

                <BootstrapStyleSearchBox 
                    label="Email" 
                    // placeHolder="xxx@gmail.com"
                    onChangeInput={this.handleChange("Email")} 
                    value = {this.state.Email}
                    compusory={true} />
            
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Degree Name"
                    items={degreeName} // Imported from config file
                    onChangeSelect={this.handleChange("DegreeName")}
                    value = {this.state.DegreeName}/>

                <BootstrapStyleSearchBox 
                    label="Degree Name(if other)" 
                    onChangeInput={this.handleChange("DegreeNameOther")}
                    value = {this.state.DegreeNameOther}
                    />

                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Subject Code"
                    items={subjectCode}
                    onChangeSelect={this.handleChange("SubjectCode")}
                    value = {this.state.SubjectCode}/>

                <div class="inline" style={{display:"flex", margin:"0 -5px"}}>
                    <div style={{flexGrow:1, margin:"0 10px"}}>
                    <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Project Start"
                    items={projectStart}
                    onChangeSelect={this.handleChange("ProjectStart")}
                    value = {this.state.ProjectStart}/>
                    </div>

                    <div style={{flexGrow:1,margin:"0 10px"}}>
                    <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Planned  Project Completion"
                    items={plannedCompletion}
                    onChangeSelect={this.handleChange("ProjectComplete")}
                    value = {this.state.ProjectComplete}/>
                    </div>
                </div>

                <BootstrapStyleSearchBox 
                    label="Planned Project Completion (if other)" 
                    onChangeInput={this.handleChange("PlannedCompleteOther")} 
                    value = {this.state.PlannedCompleteOther}/>
                
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Project Type"
                    items={projectType}
                    onChangeSelect={this.handleChange("ProjectType")}
                    value = {this.state.ProjectType}/>
                
                <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Credit Points"
                    items={creditPoints}
                    onChangeSelect={this.handleChange("CreditPoints")}
                    value = {this.state.CreditPoints}/>
                
                {/* <SelectorOne 
                    style={{ flexGrow: 1, width:"120%"}}
                    isCompulsory = {true}
                    label= "Superviser Name"
                    items={supervisorName}
                    onChangeSelect={this.handleChange("Superviser Name")}
                    value = {this.state.supervisorName}/>

                <BootstrapStyleSearchBox 
                    label="Co-supervisor(if any)" 
                    onChangeInput={this.handleChange("Co-supervisor(if any)")} /> */}

{/*                     
                <BootstrapStyleMultiBox 
                    label="Other Information" 
                    multiline
                    rows="4"
                    onChangeInput={this.handleChange("confirm_password")} /> */}
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
               
                    <Button variant="contained" color="primary" size="large" onClick={this.updateProjectDetail}>
                        submit
                    </Button>
                </div>

            </Paper>

        </div>


        )
    }
    
}

const mapStateToProps = state => ({
    userInfo: state.userInfo,
  })
  
  


export default  connect(mapStateToProps, null)(withStyles(styles)(ProjectFull));