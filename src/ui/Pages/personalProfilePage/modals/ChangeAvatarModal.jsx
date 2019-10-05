/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date 3th Oct 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles, ListItem, Divider, Avatar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Close } from 'mdi-material-ui';
import Description from '@material-ui/icons/Description';


//api
import {UploadAvatar} from '../../../../api/personalProfileApi'

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

    uploadAvatar = (e) =>{
        if (this.state.url){
        e.preventDefault();
        let formData = new FormData(e.target);
        const temp = this;
        UploadAvatar(formData).
            then(function(response){
                temp.props.handleClose();
            },
            function(err){
                alert(err.message);
                console.log(err)
            }
            
            );
        }else{
            alert("please choose a picture first!")
        }

    }
    
    pictureChosen = event => {
        console.log(event.target.files[0]);
        let file = event.target.files[0];
        let url = window.webkitURL.createObjectURL(file); // get the url of picture that uploaded 
        this.setState({url});
    }


    

    render() {
        console.info(document.getElementById("avatar-form"))
        const { classes } = this.props
        const temp =[
            {"Update Education": true},
            {"Update Your Avatar": true},
            {"Update Contact info": false},
            {"Update Work/ Project Experience": false},
            {"Update Contact Info": false}
        ]



        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Change Avatar
                    </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>



                <Paper className={classes.paper} style={{ padding: "20px 30px" }}>
                    {this.state.url  &&
                    <Avatar src = {this.state.url} style={{margin:"auto", width:200, height:200, borderRadius:"13px"}}/>}
                    {!this.state.url  &&
                    <Typography variant = "h2" style = {{fontWeight:"normal", marginLeft:5}}  >
                        Choose your Avatar file to upload
                    </Typography>
                    }



                    <div style = {{marginTop:20}}>

                    <form onSubmit={this.uploadAvatar} id = "avatar-form" encType="multipart/form-data">
                        {/* choose avatar button */}
                        <input accept="image/*"  style={{ display: 'none' }} id="choose-avatar" name="avatar" type="file" onChange={this.pictureChosen}/>
                        <label htmlFor="choose-avatar">
                            <Button 
                                color="primary" 
                                size="small" 
                                component="span"
                            >
                                Add File
                            </Button> 
                        </label>

                        {/* upload avatar form */}
                        <div style = {{marginBottom:20}}>
                        <input type="submit" value="Upload" id="submit-file" style={{ display: 'none' }}/>
                        <label htmlFor="submit-file">
                            <Button 
                                color="primary" 
                                style= {{float:"right",verticalAlign:"middle"}} 
                                size="small" 
                                // onClick = {this.props.uploadCV}
                                component="span"
                                variant="contained"
                            >
                                Save
                            </Button> 
                        </label>
                        </div>

                    </form> 
                </div>
                </Paper>
                
            </div>

        )
    }

}

AwardModal.propTypes = {
    handleClose: PropTypes.object
}


export default withStyles(styles)(AwardModal);