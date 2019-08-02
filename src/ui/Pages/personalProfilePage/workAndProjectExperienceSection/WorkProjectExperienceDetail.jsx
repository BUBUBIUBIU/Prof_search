/**
 * @file this file is for show the list of education experience
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid,Paper,Typography, Button,withStyles, Avatar, List, ListItem, Divider } from '@material-ui/core';

const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "4px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      // width:"100%"
    },
    purpleAvatar: {
        margin: 10,
        width: 40,
        height:40,
      },
});

class WorkAndProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

            
        };
    }

    render(){
        const {classes,workAndProjectExperiences} = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const educationList = workAndProjectExperiences.map((experience, index) =>
        <ListItem key={experience._id} >
            <div style ={{width: "100%"}}>
                {/* title */}
                <Grid container spacing={3}>
                    <Grid item xs={1}> 
                    <Avatar className={classes.purpleAvatar}>G</Avatar>
                    </Grid>

                    <Grid item xs={11}>
                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="h2">
                    {experience.company}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                    {experience.title}
                    </Typography>
                    </div>


                    {/* year and location */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                    {experience.yearAndLocation}
                    </Typography>
                    </div>

                    <div style ={{margin:"25px 10px 25px 10px"}}>
                    {/* Describetion */}
                    <Typography variant ="body2">
                    {experience.description}
                    </Typography>
                    </div>
                    </Grid>
                </Grid>
                {workAndProjectExperiences.length -1 !== index && <Divider variant = "inset"/>}
            </div>
        </ListItem>
        );
        

        return(
            <Paper className = {classes.paper} style ={{marginTop:"2px", padding:"25px 20px 50px 30px"}}>
            {/* title */}
            <List>
                    {educationList}
            </List>
            </Paper>
        )

    }
};

//Todo 
WorkAndProjectDetail.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(WorkAndProjectDetail);