/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:24th Aug 2019]
 */

 
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, IconButton, withStyles, Avatar, List, ListItem, Divider,Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';


//UI
import EducationUpdateModal from './EducationUpdateModal'

//config 
import { gpa, findGpaType} from '../../../../config/gpaType'


const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
    purpleAvatar: {
        margin: 10,
        width: 40,
        height: 40,
    },
});

class EducationDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationExperience: this.props.educationExperience,
            educationWaitingForUpdate:{},
            index:0,
        };
        console.log(this.props.educationExperience)
    }

    componentDidUpdate(){
        if (this.props.educationExperience !== this.state.educationExperience) {
          this.setState({
            educationExperience: this.props.educationExperience,
          })
        }
      }
    
    

    openUpdateModal = index => event => {
        if (this.state.open !== true)
            this.setState({ index,educationWaitingForUpdate:this.state.educationExperience[index], open: true});
    }


    // When modal is closed, update the entire profile page at the same time
    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }


    render() {
        const { classes} = this.props
        const { educationExperience } =  this.state
        console.log(educationExperience)

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const educationList = educationExperience.map((education, index) =>
            <ListItem key={education.ID} >
                <div style={{ width: "100%"}}>
                    {/* title */}
                    <Grid container spacing={3} style = {{flexGrow:1}}>

                        <Grid item xs={1}>
                            <Avatar className={classes.purpleAvatar}>ME</Avatar>
                        </Grid>
                        

                        <Grid item xs={10}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    { education.UniversityName + "    (" + education.GPA + "/" + findGpaType(education.GPAType) + ")"}
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                {education.Major} | {education.Degree}
                                </Typography>
                            </div>

                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {education.FromYear} - {education.ToYear}
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {education.Description}
                                </Typography>
                            </div>
                        </Grid>
                        {this.props.editable && 
                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>}
                    </Grid>
                    {this.props.educationExperience.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {educationList}
                </List>
            </Paper>
                                
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >

            <EducationUpdateModal handleClose={this.handleCloseModal} currentUniversity = {this.state.educationWaitingForUpdate} identity={this.props.identity}/>
            </Modal>
            </div>
        )

    }
};



export default withStyles(styles)(EducationDetail);