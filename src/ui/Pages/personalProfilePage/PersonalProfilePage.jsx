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

//api
import {getProfile} from '../../../api/personalProfileApi'



class PersonalProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                FirstName: null,
                LastName: null,
                Email:null,
                Phone:null,
                Universities:[],
                Companies:[],
                Awards:[],
                Materials: [],
                Publications: []
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
        console.log("Re-render")
        console.log(this.state.profile)
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
                            Phone = {profile.Phone}/>
                {/* <ProfileCard/>          */}
                <EducationPaper educations = {profile.Universities}/>
                <WorkAndProjectExperience workAndExp = {profile.Companies}/>
                
                <CV/>
                <Award awards = {profile.Awards}/>
                <Publication publications = {profile.Publications}/>
                <OtherMaterial otherMaterial = {profile.Materials}/> 
                </Grid>
                <Grid item xs={1}/>
                </Grid >
            </div>
        )

    }
};

export default PersonalProfilePage;