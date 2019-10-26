/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:29th Oct 2019]
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles } from '@material-ui/core';

import { Close } from 'mdi-material-ui';

import ProjectDetail from '../../ProjectPage/ProjectDetail'



const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    },
    modal: {
        position: 'absolute',
        width: "800px",
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[5],
        outline: 'none',
        top: "20px",
        left: "300px",
        borderRadius: "4px",
    },
});

class ProjectDetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        const { classes } = this.props
        return (
            <div className={classes.modal}>
                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Fill Detail for Project Application
                </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>


                <Paper className={classes.paper} style={{ padding: "30px",overflow:"auto", height:600}}>
                    <ProjectDetail isInsideModal = {true} handleClose = {this.props.handleClose}/>
                </Paper>
            </div>

        )
    }

}

ProjectDetailModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(ProjectDetailModal);