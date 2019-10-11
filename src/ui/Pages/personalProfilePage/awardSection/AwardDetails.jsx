/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [shaochuan Luo], [date:20th Aug 2019]
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button, withStyles, Modal,Avatar, List, ListItem, Divider,IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';
import UpdateModal from './UpdateModal'

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
    }
});

class AwardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awards: this.props.awards,
            awardForUpdate: {}
        }
    }

    openUpdateModal = index => event => {
        console.log(this.state.awards)
        if (this.state.open !== true)
            this.setState({ index, awardForUpdate:this.state.awards[index], open: true});
    }

    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }

    componentDidUpdate(){
        if(this.props.awards !== this.state.awards)
            this.setState({awards: this.props.awards})
    }

    render() {
        const { classes, awards } = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const awardList = awards.map((award, index) =>
            <ListItem key={award.ID} >
                <div style={{ width: "100%" }}>
                    {/* title */}
                    <Grid container spacing={3}>

                        <Grid item xs={11}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    {award.Name}
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {award.Organization}
                                </Typography>
                            </div>


                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {award.Date}
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {award.Description}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>
                    </Grid>
                    {awards.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {awardList}
                </List>
            </Paper>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >

                <UpdateModal handleClose={this.handleCloseModal} currentAward= {this.state.awardForUpdate} identity={this.props.identity}/>
            </Modal>
            </div>
        )

    }
};

//Todo 
AwardDetail.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(AwardDetail);