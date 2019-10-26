/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Shaochuan Luo], [date:24th Aug 2019]
 */

 
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, IconButton, Button, withStyles, Avatar, List, ListItem, Divider,Modal } from '@material-ui/core';
import { Edit } from '@material-ui/icons/';


//UI

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

class ResearchInterestDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Interest: '',
            Interests: this.props.interests
        };
    }

    componentDidUpdate(){
        if (this.props.interests !== this.state.Interests) {
          this.setState({
            Interests: this.props.interests,
          })
        }
      }
    
    

    openUpdateModal = index => event => {
        console.log('index:', index);
        if (this.state.open !== true)
            this.setState({ index,interestForUpdate:this.state.Interests[index], open: true});
    }


    // When modal is closed, update the entire profile page at the same time
    handleCloseModal= () => {
        this.setState({open: false})
        this.props.UpdateFile()
    }


    render() {
        const { classes } = this.props
        

        const researchInterestList = this.state.Interests.map((interest, index) =>
            <ListItem key={interest+index.toString()} style = {{width: "auto", paddingLeft: "0"}} >
                <div style={{width: "100%" }}>
                    {/* ?颜色 */}
                    <Button variant="outlined" color="primary">
                        {interest}
                    </Button>
                </div>
            </ListItem>
        );



        return (
            <div>
            <Paper className={classes.paper} style={{ marginTop: "2px", padding: "25px 20px 50px 30px" }}>
                {/* title */}
                <List style = {{display: 'flex', flexDirection:'row', justifyContent:"flex-start", flexWrap: 'wrap'}}>
                    {researchInterestList}
                </List>
            </Paper>
            </div>
        )

    }
};



export default withStyles(styles)(ResearchInterestDetail);