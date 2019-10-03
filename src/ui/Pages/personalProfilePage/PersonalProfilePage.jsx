/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */


//Dependencies
import { ArrowRight} from '@material-ui/icons/';
import { Typography,Paper, Avatar, withStyles,Button, Modal} from '@material-ui/core';
import {Contacts} from '@material-ui/icons'
import React, { Component } from 'react';

//UI
import EducationPaper from './educationSection/EducationPaper'
import WorkAndProjectExperience from './workAndProjectExperienceSection/WorkAndProjectExperience'
import CV from './cvSection/CV'
import Award from './awardSection/AwardPaper'
import Publication from './publicationSection/Publication'
import OtherMaterial from './otherMaterialSection/OtherMaterialPaper'
import CompletenessModal from './modals/CompletenessModal'
import ResearchInterest from './researchInterest/ResearchInterestPaper'
import ResearchGrant from './researchGrant/ResearchGrantPaper'
import OngoingProject from './ongoingProject/ongoingProjectPaper'
import AvailablePosition from './availablePosition/availablePositionPaper'
import Header from '../../reusableComponents/NewHeadNavigator'

//api
import {getProfile} from '../../../api/personalProfileApi'
import {GetExpertProfile} from '../../../api/generalAPI'
import {GetStudentProfile} from '../../../api/generalAPI'

const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 140,
        height: 140,
        borderRadius:"13px"
    },
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },


  });



class PersonalProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
            },
        };
    }


    componentDidMount(){
        console.log(this.props.identity)
        console.log(this.props.editable)
        console.log(this.props)
        const that = this;
        if (this.props.editable) {
            getProfile()
                .then(function (response) {
                    that.setState({
                        profile: response.content
                    })
                    console.log(response.content)
                }, function (err) {

                })
        }else{
            if (this.props.identity ===  "student"){
                const id = that.getID();
                console.log(id)
                GetStudentProfile(id)
                .then(function (response) {
                    that.setState({
                        profile: response.content
                    })
                    console.log(response.content)
                }, function (err) {

                })

            }
            //otherwise it will be expert 
            else if (this.props.identity ===  "expert") {
                const id = that.getID();
                console.log(id)
                GetExpertProfile(id)
                .then(function (response) {
                    that.setState({
                        profile: response.content
                    })
                    console.log(response.content)
                }, function (err) {

                })

            }

        }
    }


    UpdateFile= () => {
        const temp = this;
        getProfile()
        .then(function(response){
            temp.setState({profile: response.content})
            console.log(response.content)
        },function(err){
        })
    }

    changeAvatar = () =>{
        console.log("Hello")
    }

    getID = () => {
        let pathname = window.location.pathname;
        pathname  = pathname.split('/')
        const id = pathname[pathname.length-1] 
        return id

    }

    completeness = () => {
        let completness = 0
        if (this.state.profile.Avatar){
            completness += 15 
        }
        if (this.state.profile.Universities){
            completness += 15 
        }
        if (this.state.profile.Companies){
            completness += 15
        }
        if (this.state.profile.CV){
            completness += 15
        }
        if (this.state.profile.Awards){
            completness += 15 
        }
        if (this.state.profile.Materials){
            completness += 15 
        }
        if (this.state.profile.Publications){
            completness += 10
        }

        return completness + "%"

    }

    handleClose = field => event => {
        this.setState({ [field]: false })
    }

    handleOpen = field => event =>{
        this.setState({ [field]: true })
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // handle visibility logic for components that's only in expert profile
    showExpertComponenet= (componentName) => {
        if(this.props.identity === "expert"){
            if(this.props.editable === true){
                return true
            }else if (this.props.editable=== false && this.state.profile[componentName] ){
                return true
            }else{
                return false
            }

        }else{
            return false;
        }
    }

    // handle visibility logic for components that's only in student profile
    showStudentComponent = (componentName) => {
        if(this.props.identity === "expert"){
            if(this.props.editable === true){
                return true
            }else if (this.props.editable=== false && this.state.profile[componentName] ){
                return true
            }else{
                return false
            }

        }else{
            return false;
        }

    }

        // handle visibility logic for components that's only in both student and expert profile
    showCommonComponent = (componentName) =>{
        if(this.props.editable == true){
            return true;
        }else if (this.props.editable=== false && this.state.profile[componentName]){
            return true;
        }else{
            return false;
        }
    }

    render(){
        const {profile} = this.state
        const {classes} = this.props
        
        // console.log(profile.Materials);s
        return(
            <div>
                <Header/>
                <div style ={{maxWidth: 1000, margin: "auto"}}>
                    <Paper className = {classes.paper} style = {{ padding:25}}>
                        <div style = {{display:"flex", alignItems:"center"}}>
                            <div style= {{flex:"0 1 auto", maxWidth:200}} onClick = {this.changeAvatar}>
                                <Avatar  className={classes.bigAvatar} src = {"http://" + profile.Avatar}/>
                            </div>
                            <div  style= {{flex:"0 1 auto", maxWidth:500, padding: 30, marginRight:"auto"}}>
                                <Typography variant="h1">
                                    {profile.FirstName} {" "} {profile.LastName}
                                </Typography>
                                <Typography variant="body1" style={{fontWeight:500, marginTop: 20}}>
                                    {this.props.identity}
                                </Typography>
                            </div> 
                            {this.props.editable &&
                            <div style= {{flex:"0 1 auto", maxWidth:500, padding: 30, display:"flex", flexDirection:"column", justifyContent:"center"}}>
                                <Typography style= {{margin:"auto", fontWeight:500, fontSize:18,color: "#9b9b9b"}}>
                                    Completeness
                                </Typography>
                                <Typography  style ={{fontSize:48,margin:"auto", fontWeight:500,color: "#9b9b9b"}}>
                                    {this.completeness()}
                                </Typography>
                                <Button color ="primary" onClick = {this.handleOpen("completenessModal")}>
                                    Detail <ArrowRight/>
                                </Button>
                            </div>
                            }
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

                    {this.props.identity === 'expert' &&   <ResearchInterest/> }
                    {this.props.identity === 'expert' &&   <ResearchGrant/> }
                    {this.props.identity === 'expert' &&   <OngoingProject/> }
                    {this.props.identity === 'expert' &&   <AvailablePosition/> }
                   
                    
                    <EducationPaper 
                        educations = {profile.Universities}
                        UpdateFile = {this.UpdateFile}
                        editable = {this.props.editable}
                    />
                    
                    <WorkAndProjectExperience 
                        workAndExp = {profile.Companies}
                        UpdateFile = {this.UpdateFile}
                        editable = {this.props.editable}
                    />
                    
                    {this.props.identity === 'student' &&
                    <CV
                        id = "cv"
                        UpdateFile = {this.UpdateFile}
                        CV = {profile.CV}
                        CVName = {profile.CVName}
                        editable = {this.props.editable}
                    />
                    }

                    <Award 
                        awards = {profile.Awards}
                        UpdateFile = {this.UpdateFile}
                        editable = {this.props.editable}
                    />

                    <Publication 
                        publications = {profile.Publications}
                        UpdateFile = {this.UpdateFile}
                        editable = {this.props.editable}
                    />

                    <OtherMaterial 
                        otherMaterial = {profile.Materials}
                        UpdateFile = {this.UpdateFile}
                        editable = {this.props.editable}
                    />
                </div>

                
                <Modal
                    aria-labelledby="completeness-modal"
                    aria-describedby="show-the-completion"
                    open={this.state.completenessModal}
                    onClose={this.handleClose}
                >   
                <CompletenessModal handleClose ={this.handleClose("completenessModal")} />
                </Modal>

{/* 
                <Modal
                    aria-labelledby="completeness-modal"
                    aria-describedby="changeAvatar"
                    open={this.state.avatarModal}
                    onClose={this.handleClose}
                >   
                <CompletenessModal handleClose ={this.handleClose("completenessModal")} />
                </Modal> */}

            </div>
        )

    }
};

export default withStyles(styles)(PersonalProfilePage);