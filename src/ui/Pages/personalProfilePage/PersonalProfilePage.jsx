/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */


//Dependencies
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

//UI
import SecondHeader from "../../reusableComponents/SecondHeader"
import ProfileCard from './ProfileCard'
import EducationPaper from './educationSection/EducationPaper'
import WorkAndProjectExperience from './workAndProjectExperienceSection/WorkAndProjectExperience'
import CV from './cvSection/CV'
import Award from './awardSection/AwardPaper'
import Publication from './publicationSection/Publication'
import OtherMaterial from './otherMaterialSection/OtherMaterialPaper'

import ResearchInterest from './researchInterest/ResearchInterestPaper'
import ResearchGrant from './researchGrant/ResearchGrantPaper'
import OngoingProject from './ongoingProject/ongoingProjectPaper'
import AvailablePosition from './availablePosition/availablePositionPaper'

//api
import {getProfile} from '../../../api/personalProfileApi'



class PersonalProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                Avatar: "",
                FirstName: "",
                LastName: "",
                Email:"",
                Phone: "",
                Universities:[],
                Companies:[],
                Awards:[],
                Materials: [],
                Publications: [],
                // new variable
                Who: ''
            },
        };
    }

    componentDidMount(){
        const temp = this;

        getProfile()
        .then(function(response){
            // return new Promise(function(resolve, reject) {
            //       resolve(response.content);
            //   });
            // profile = response.content;
            temp.setState({profile: response.content})
            console.log(response.content)
        },function(err){

        })
        // const profile1 = await profile;

        // this.setState({profile1})
    }

    UpdateFile= () => {
        const temp = this;

        getProfile()
        .then(function(response){
            // return new Promise(function(resolve, reject) {
            //       resolve(response.content);
            //   });
            // profile = response.content;
            temp.setState({profile: response.content})
            console.log(response.content)
        },function(err){

        })
    }

    
    render(){
        const {profile} = this.state
        // console.log(profile.Materials);
        return(
            <div>
                <SecondHeader/>
                <Grid container>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                <ProfileCard FirstName = {profile.FirstName} 
                            LastName = {profile.LastName}
                            Email = {profile.Email}
                            Phone = {profile.Phone}
                            Avatar = {profile.Avatar}/>
                {/* <ProfileCard/>          */}

                <ResearchInterest/>
                <ResearchGrant/>
                <OngoingProject/>
                <AvailablePosition/>

                <EducationPaper educations = {profile.Universities}
                UpdateFile = {this.UpdateFile} who = {profile.Who}/>
                
                <WorkAndProjectExperience workAndExp = {profile.Companies}
                 UpdateFile = {this.UpdateFile}
                />
                
                <CV/>
                <Award awards = {profile.Awards}
                UpdateFile = {this.UpdateFile}/>
                <Publication publications = {profile.Publications}
                UpdateFile = {this.UpdateFile}/>
                <OtherMaterial otherMaterial = {profile.Materials}
                 UpdateFile = {this.UpdateFile}/> 
                </Grid>
                <Grid item xs={1}/>
                </Grid >
            </div>
        )

    }
};

export default PersonalProfilePage;