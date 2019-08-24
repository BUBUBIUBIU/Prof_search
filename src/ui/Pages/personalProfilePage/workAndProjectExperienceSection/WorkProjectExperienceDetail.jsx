/**
 * @file this file is for show the list of education experience
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
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
            index:0,
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
        if (this.state.open !== true)
            this.setState({ index,workExperienceWaitingForUpdate:this.state.workExperience[index], open: true});
    }

    handleCloseModal= () => {
        this.setState({open: false})
    }
    
    handleUpdate = (obj) =>{
        let tempProfile =  this.state.workExperience;
        tempProfile[this.state.index] = obj;
        this.setState({workExperience: tempProfile})
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
                                    {experience.yearAndLocation}
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {experience.Description}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>
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

            <UpdateModal handleClose={this.handleCloseModal} currentWorkExperience = {this.state.workExperienceWaitingForUpdate} handleUpdate = {this.handleUpdate}/>
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