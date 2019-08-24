/**
 * @file this file is for showing the list of publication detail
 * @author Chenyang Lu(clu3842@gmail.com)
 * @description 
 *       
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper,Typography, withStyles, List, ListItem, Divider,Grid,IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';

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

    openUpdateModal = index => event => {
        if (this.state.open !== true)
            this.setState({ index,educationWaitingForUpdate:this.state.educationExperience[index], open: true});
    }

    handleCloseModal= () => {
        this.setState({open: false})
    }
    
    handleUpdate = (obj) =>{
        let tempProfile =  this.state.educationExperience;
        tempProfile[this.state.index] = obj;
        this.setState({educationExperience: tempProfile})
    }


    render(){
        const {classes, publications} = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const publicationList = publications.map((publication, index) =>
        <ListItem key={publication._id} >
            <div style ={{width: "100%"}}>
            <Grid container spacing={3} style = {{flexGrow:1}}>
                    <Grid item xs={11}>

                    <div style ={{margin:"10px"}}>
                    <Typography variant ="h2">
                        {publication.Title}
                    </Typography>
                    </div>

                    {/* subtitle */}
                    <div style ={{margin:"10px"}}>
                    <Typography variant ="body2">
                    {publication.Authors}
                    </Typography>
                    </div>

                    <div style ={{margin:"10px"}}>
                    {/* Describetion */}
                    <Typography variant ="body2">
                    {publication.Url}
                    </Typography>
                    </div>
                    {publications.length -1 !== index && <Divider variant = "fullWidth"/>}
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                    </Grid>

            </Grid>
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