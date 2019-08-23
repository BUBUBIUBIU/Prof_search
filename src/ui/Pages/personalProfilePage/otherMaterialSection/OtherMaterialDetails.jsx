/**
 * @file this is Award section
 * @author Shaochuan Luo(shaochuanl@student.unimelb.edu.au)
 * @description    
 */

//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button, withStyles, Avatar, List, ListItem, Divider } from '@material-ui/core';

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
        };
    }

    render() {
        const { classes, otherMaterial } = this.props

        // Note: Here we directly use this.props.educationExperience, It might result in bug(no data update), use state instead
        const materialList = otherMaterial.map((materials, index) =>
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
                    </Grid>
                    {otherMaterial.length - 1 !== index && <Divider variant="inset" />}
                </div>
            </ListItem>
        );


        return (
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List>
                    {materialList}
                </List>
            </Paper>
        )

    }
};

//Todo 
OtherMaterialDetails.propTypes = {
    isCompulsory: PropTypes.bool,
    title: PropTypes.string,
}

export default withStyles(styles)(OtherMaterialDetails);