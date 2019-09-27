/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date 21th Sep 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, ListItem, Divider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';
import Description from '@material-ui/icons/Description';


//api
import {uploadCV} from '../../../../api/personalProfileApi'

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

class AwardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    uploadCV = (e) =>{
        e.preventDefault();
        let formData = new FormData(e.target);
        const temp = this;
        uploadCV(formData).
            then(function(response){
                temp.props.handleClose();
            },
            function(err){
                alert(err.message);
                console.log(err)
            }
            
            );

    }

    render() {
        const { classes } = this.props
        const temp =[
            {"Update Education": true},
            {"Update Your Avatar": true},
            {"Update Contact info": false},
            {"Update Work/ Project Experience": false},
            {"Update Contact Info": false}
        ]

        const completenessLise = temp.map((item, index) =>
        <ListItem key={index} >
            <div style={{ width: "100%" }}>
                <div style = {{display:"flex", padding:"10 0"}}>
                <Typography style = {{flex: "0 1 auto", marginRight:"auto"}}>
                    {Object.keys(item)[0]}
                </Typography>
                <div style = {{flex: "0 1 auto"}}>
                    <Button color ="primary" classes = {{text: classes.buttonText}} href = "#cv">
                        Upload
                    </Button>
                </div>
                </div>
                
                {temp.length - 1 !== index && <Divider/>}
            </div>
        </ListItem>
        )


        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                UpdateTask
                    </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>



                <Paper className={classes.paper} style={{ padding: "50px 30px" }}>
                    {completenessLise}
                </Paper>
                
            </div>

        )
    }

}

AwardModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AwardModal);