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
import ResearchGrantUpdateModal from './ResearchGrantUpdateModal'

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

class ResearchGrantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researchGrantExperience: this.props.researchGrantExperience,
            grantWaitingForUpdate:{},
            index:0,
        };
    }

    componentDidUpdate(){
        if (this.props.researchGrantExperience !== this.state.researchGrantExperience) {
          this.setState({
            researchGrantExperience: this.props.researchGrantExperience,
          })
        }
      }
    
    

    openUpdateModal = index => event => {
        console.log('index:', index);
        if (this.state.open !== true)
            this.setState({ index,grantWaitingForUpdate:this.state.researchGrantExperience[index], open: true});
    }


    // When modal is closed, update the entire profile page at the same time
    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }


    render() {
        const { classes } = this.props
        // const { researchGrantExperience } =  this.state
        const { researchGrantExperience } = this.state
        // console.log(researchGrantExperience)

        // Note: Here we directly use this.props.researchGrantExperience, It might result in bug(no data update), use state instead
        const researchGrantList = researchGrantExperience.map((researchGrant, index) =>
            <ListItem key={researchGrant.ID} >
                <div style={{ width: "100%"}}>
                    {/* title */}
                    <Grid container spacing={2} style = {{flexGrow:1}}>

                        <Grid item xs={10}>
                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    { researchGrant.Title }
                                </Typography>
                            </div>

                            {/* subtitle */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="h2">
                                    { researchGrant.FundingBody }
                                </Typography>
                            </div>

                            {/* year and location */}
                            <div style={{ margin: "10px" }}>
                                <Typography variant="body2">
                                    {researchGrant.FromYear} - {researchGrant.ToYear}
                                </Typography>
                            </div>

                            <div style={{ margin: "25px 10px 25px 10px" }}>
                                {/* Describetion */}
                                <Typography variant="body2">
                                    {researchGrant.Description}
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={1}>
                        <IconButton onClick={this.openUpdateModal(index)} >
                                <Edit/>
                        </IconButton>
                        </Grid>
                    </Grid>
                    {this.props.researchGrantExperience.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {researchGrantList}
                </List>
            </Paper>
                                
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <ResearchGrantUpdateModal handleClose={this.handleCloseModal} currentResearchGrant = {this.state.grantWaitingForUpdate}/>
            </Modal>
            </div>
        )

    }
};



export default withStyles(styles)(ResearchGrantDetail);