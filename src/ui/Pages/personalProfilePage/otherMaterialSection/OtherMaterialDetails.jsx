/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:28th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Modal, Button,IconButton, withStyles, Avatar, List, ListItem, Divider } from '@material-ui/core';
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

class OtherMaterialDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otherMaterials: this.props.otherMaterials,
            materialsWaitingForUpdate:{},
            index: 0
        };
    }


    componentDidUpdate(){
        if (this.props.otherMaterials !== this.state.otherMaterials) {
          this.setState({
            otherMaterials: this.props.otherMaterials,
          })
        }
      }
    

    openUpdateModal = index => event => {
        if (this.state.open !== true)
            this.setState({ index,materialsWaitingForUpdate:this.state.otherMaterials[index], open: true});
    }


    // When modal is closed, update the entire profile page at the same time
    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }



    render() {
        const { classes, otherMaterials } = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const materialList = otherMaterials.map((materials, index) =>
            <ListItem key={materials._id} >
                <div style={{ width: "100%" }}>
                    {/* title */}
                    <Grid container spacing={3}>

                        <Grid item xs={11}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    {materials.Title}
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {materials.Year}
                                </Typography>
                            </div>


                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {materials.Description}
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {materials.Url}
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>

                    </Grid>
                    {otherMaterials.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {materialList}
                </List>
            </Paper>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >

                <UpdateModal handleClose={this.handleCloseModal} currentMaterial = {this.state.materialsWaitingForUpdate}/>
            </Modal> 
            </div>
        )

    }
};

//Todo 
OtherMaterialDetails.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
    UpdateFile: PropTypes.object
    
}

export default withStyles(styles)(OtherMaterialDetails);