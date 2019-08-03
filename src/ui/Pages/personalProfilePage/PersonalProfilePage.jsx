//Dependencies
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

//UI
import SecondHeader from "../../reusableComponents/SecondHeader"
import ProfileCard from './ProfileCard'
import EducationPaper from './educationSection/EducationPaper'
import WorkAndProjectExperience from './workAndProjectExperienceSection/WorkAndProjectExperience'
import CV from './cvSection/CV'
import Publication from './publicationSection/Publication'
import OtherMaterial from './otherMaterialSection/OtherMaterial'

//api
import {getProfile} from '../../../api/personalProfileApi'



class PersonalProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasEducation: false,
            hasWordExperience:false,
            hasCv: false,
            hasWorkExperience: false,
            hasPublication: false,
            hasOtherMaterial:false
        };
    }

    componentDidMount(){
        getProfile()
        .then(function(response){
            
        },function(err){

        })
    }

    
    render(){
        return(
            <div>
                <SecondHeader/>
                <Grid container>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                <ProfileCard/>
                <EducationPaper/>
                <WorkAndProjectExperience/>
                <CV/>
                <Publication/>
                <OtherMaterial/> 
                </Grid>
                <Grid item xs={1}/>
                </Grid >
            </div>
        )

    }
};

export default PersonalProfilePage;