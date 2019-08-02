/**
 * @file this file is for showing the list of publication detail
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper,Typography, withStyles, List, ListItem, Divider } from '@material-ui/core';


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

class EducationDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            
        };
    }

    render(){
        const {classes,educationExperience} = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const publicationList = this.props.publications.map((publication, index) =>
        <ListItem key={publication._id} >
            <div style ={{width: "100%"}}>

                    <div style ={{margin:"10px"}}>
                    <Typography variant ="h2">
                        ({publication.year} ) {publication.title}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                    {publication.authors}
                    </Typography>
                    </div>

                    <div style ={{margin:"10px"}}>
                    {/* Describetion */}
                    <Typography variant ="body2">
                    {publication.magzine}
                    </Typography>
                    </div>
                    {this.props.publications.length -1 !== index && <Divider variant = "fullWidth"/>}
            </div>
        </ListItem>
        );
        

        return(
            <Paper className = {classes.paper} style ={{marginTop:"2px", padding:"20px 20px 20px 30px"}}>
            {/* title */}
            <List>
                    {publicationList}
            </List>
            </Paper>
        )

    }
};

//Todo 
EducationDetailComponent.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(EducationDetailComponent);