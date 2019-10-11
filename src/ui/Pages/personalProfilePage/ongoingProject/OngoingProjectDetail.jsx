/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:24th Aug 2019]
 */

 
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, IconButton, withStyles, Avatar, List, ListItem, Divider,Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';


//UI
import OngoingProjectUpdateModal from './OngoingProjectUpdateModal'

//config 
// import { gpa, findGpaType} from '../../../../config/gpaType'


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

class OngoingProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ongoingProjects: this.props.ongoingProjects,
            ProjectWaitingForUpdate:{},
            index:0,
        };
    }

    componentDidUpdate(){
        if (this.props.ongoingProjects !== this.state.ongoingProjects) {
          this.setState({
            ongoingProjects: this.props.ongoingProjects,
          })
        }
      }
    
    

    openUpdateModal = index => event => {
        console.log('index:', index);
        if (this.state.open !== true)
            this.setState({ index,ProjectWaitingForUpdate:this.state.ongoingProjects[index], open: true});
    }


    // When modal is closed, update the entire profile page at the same time
    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }


    render() {
        const { classes } = this.props
        // const { ongoingProjects } =  this.state
        const { ongoingProjects } = this.state
        // console.log(ongoingProjects)

        // Note: Here we directly use this.props.ongoingProjects, It might result in bug(no data update), use state instead
        const projectList = ongoingProjects.map((proj, index) =>
            <ListItem key={proj.ID} >
                <div style={{ width: "100%"}}>
                    {/* title */}
                    <Grid container spacing={2} style = {{flexGrow:1}}>

                        <Grid item xs={11}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h1s">
                                    { proj.ProjectName }
                                </Typography>
                            </div>

                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2s">
                                    {proj.FromYear} - {proj.ToYear}
                                </Typography>
                            </div>

                            <div style={{ margin: "10px" }}>
                                {/* Describetion */}
                                <Typography variant="p1">
                                    {proj.Description}
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>
                    </Grid>
                    {this.props.ongoingProjects.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {projectList}
                </List>
            </Paper>
                                
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <OngoingProjectUpdateModal handleClose={this.handleCloseModal} currentProjects = {this.state.ProjectWaitingForUpdate}/>
            </Modal>
            </div>
        )

    }
};



export default withStyles(styles)(OngoingProjectDetail);