//Dependencies
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

//UI
import SecondHeader from "../reusableComponents/SecondHeader"
import ProfileCard from './ProfileCard'
import EducationPaper from './EducationPaper'
import WorkAndProjectExperience from './WorkAndProjectExperience'
import CV from './CV'
import Publication from './Publication'
import OtherMaterial from './OtherMaterial'




class PersonalProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
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