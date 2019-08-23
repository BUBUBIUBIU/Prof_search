/**
 * @file this file is for show the list of education experience
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button, withStyles, Avatar, List, ListItem, Divider } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Plus } from 'mdi-material-ui';
import { Edit } from '@material-ui/icons/';



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
        };
    }

    render() {
        const { classes, educationExperience } = this.props
        console.log(educationExperience);

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const educationList = educationExperience.map((education, index) =>
            <ListItem key={education._id} >
                <div style={{ width: "100%", display: "flex"}}>
                    {/* title */}
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <Avatar className={classes.purpleAvatar}>ME</Avatar>
                        </Grid>
                        
                        <Button className={classes.modalButton} onClick={this.inputHandleClose} style={{ flexGrow: 1 }}>
                            <Edit/>
                        </Button>

                        <Grid item xs={11}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    {education.UniversityName}
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {education.Degree}
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
                    </Grid>
                    {this.props.educationExperience.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {educationList}
                </List>
            </Paper>
        )

    }
};

//Todo 
EducationDetail.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(EducationDetail);