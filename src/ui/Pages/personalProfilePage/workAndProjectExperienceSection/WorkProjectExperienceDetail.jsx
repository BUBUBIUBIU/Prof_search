/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:24th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button, withStyles, Avatar, List, ListItem, Divider,IconButton,Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';


//UI
import UpdateModal from './UpdateModal'

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

class WorkAndProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workExperience: this.props.workAndProjectExperiences,
            workExperienceWaitingForUpdate:{},
        };

    }

    componentDidUpdate(){
        if (this.props.workAndProjectExperiences !== this.state.workExperience) {
          this.setState({
            workExperience: this.props.workAndProjectExperiences,
          })
        }
      }

    openUpdateModal = index => event => {
        if (this.state.open !== true){
            this.setState({ 
                workExperienceWaitingForUpdate:this.state.workExperience[index], 
                open: true});
            }
    }

    handleCloseModal= () => {
        this.props.UpdateFile()
        this.setState({open: false})
    }

    
    render() {
        const { classes, workAndProjectExperiences } = this.props
        console.log(workAndProjectExperiences);

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const educationList = workAndProjectExperiences.map((experience, index) =>
            <ListItem key={experience._id} >
                <div style={{ width: "100%" }}>
                    {/* title */}
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <Avatar className={classes.purpleAvatar}>G</Avatar>
                        </Grid>

                        <Grid item xs={10}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    {experience.CompanyName}
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {experience.Title}
                                </Typography>
                            </div>


                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {experience.FromYear + "|" + experience.FromMonth + "  -  " +experience.ToYear + "|" + experience.ToMonth + "    " + experience.Location} 
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {experience.Description}
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
                    {workAndProjectExperiences.length - 1 !== index && <Divider variant="inset" />}
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

            <UpdateModal 
                handleClose={this.handleCloseModal} 
                currentWorkExperience = {this.state.workExperienceWaitingForUpdate} 
                handleUpdate = {this.handleUpdate}
                identity = {this.props.identity}
            />
            </Modal>
            </div>
        )

    }
};

//Todo 
WorkAndProjectDetail.propTypes = {
    workAndExp: PropTypes.object
}

export default withStyles(styles)(WorkAndProjectDetail);