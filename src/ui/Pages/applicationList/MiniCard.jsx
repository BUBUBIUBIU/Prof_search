/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:27th Sep 2019]
 */



//Dependencies
import React, { Component } from 'react';
import { Paper, withStyles,Avatar,Typography,Button, Checkbox, Divider} from '@material-ui/core';
import { prototype } from 'stack-utils';

//api

import {AcceptApplication, RejectApplication} from '../../../api/applicationAPI'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "2px 2px 4px 2px #d7d7d7",
        // width:"100%"
    },
    card:{
        backgroundColor: theme.palette.background.card,
        width: "100%",
        padding:10,
        borderRadius: 5,
    },
    button:{
        textTransform: 'none',
        marginTop: "10",
        fontSize: 12,
        fontFamily:'Montserrat',
        padding: '6px 12px',
    },
    bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
        borderRadius:"13px"
    },
    header:{
        marginBottom:10
    }

});

const ADDED_TO_CONTACT_LIST = 0;
const PENDING = 1;
const OFFERED_TO_STUDENT = 2;
const REFUSED_STUDENT = 3;
const ACCEPTED_BY_STUDENT = 4;
const REJECT_BY_STUDENT = 5;

const statusDictionary = {
    0: "Added to contact List",
    1: "pending",
    2: "offered, waiting for student's response",
    3: "Reject",
    4: "accepted by student",
    5: "rejected by student"
}

class MiniCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: this.props.check || false
        };
    }

    acceptApplication = () => {
        const data = {
            "id": this.props.simpleprofile.ID
        }
        const that = this;
        AcceptApplication().then(
            function(response){
                that.props.refreshApplicationList();
            }, function(err){
                alert("Error happens, accept offer unsuccessful")
            }
        )
    }

    rejectApplication = () => {
        const data = {
            "id": this.props.simpleprofile.ID
        }
        const that = this;
        RejectApplication().then(
            function(response){
                that.props.refreshApplicationList();
            }, function(err){
                alert("Error happens, accept offer unsuccessful")
            }
        )
    }
    
    
    

    render(){
        const {classes,simpleprofile} = this.props
        const StudentInfo = simpleprofile.Student; //Neccessary information of student
        const ID = simpleprofile.ID;
        const Status = simpleprofile.Status

        return(
            <div style={{ width: "100%"}}>
                <div style={{display:"flex", width: "100%", alignItems:"flex-start"}}>
                    <Paper className={classes.paper} style={{ padding:25, flex:"auto"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div style={{flex:"0 1 auto", maxWidth:200}}>
                                <Avatar className={classes.bigAvatar}>
                                    {StudentInfo.FirstName[0]}
                                </Avatar>
                            </div>
                            <div style={{flex:"0 1 auto", padding: 30, marginRight:"auto"}}>
                                <Typography variant="h1">
                                    {StudentInfo.FirstName} {" "}  {StudentInfo.LastName}
                                </Typography>
                                <Typography variant="body1">
                                    <p style={{fontWeight:500}}> Student</p>
                                    {/* <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p> */}
                                </Typography>
                                <Typography variant="body1">
                                    Master  Score:  80
                                </Typography>
                                <Typography variant="body1">
                                    Bachelor  Score: 80
                                </Typography>
                            </div>

                        </div>

                        <div>
                            <Divider style={{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}} />
                            <div style={{display:"flex",  padding: 30}}>
                                <div style={{flex:"1 0 auto", marginRight:"auto",maxWidth:480}}>
                                    <Typography variant="subtitle1" style={{color: "#9b9b9b"}} paragraph={true}>
                                        Application Message
                                    </Typography>
                                    <Typography variant="subtitle1" style={{fontSize:17,fontWeight:300 }}>
                                        {simpleprofile.Message}
                                    </Typography>
                                </div>

                                <div style={{flex:"0 0 auto", maxWidth:280}}>
                                    <Typography variant="subtitle1" style={{color: "#4a4a4a", fontWeight:600}}>
                                        status: <span style={{fontWeight:300}}>{statusDictionary[Status]}</span>
                                    </Typography>
                                    {Status === PENDING &&
                                    <div>
                                        <Button variant="contained" color="primary" style={{marginRight:10, height:30, width:50}} onClick = {this.acceptApplication}> 
                                            Accept
                                        </Button>
                                        <Button variant="outlined" color="primary" style={{height:30, width:50}} onClick = {this.rejectApplication}>
                                            Reject
                                        </Button>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </Paper>
                    

                </div>

            </div>
        )

    }
};



export default withStyles(styles)(MiniCard);