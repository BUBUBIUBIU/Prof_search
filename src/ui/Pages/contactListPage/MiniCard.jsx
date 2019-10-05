/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th Sep 2019]
 */



//Dependencies
import React, { Component } from 'react';
import { Paper, withStyles,Avatar,Typography,Button, Checkbox, Divider} from '@material-ui/core';
import { prototype } from 'stack-utils';

//api
import {AcceptOffer,RejectOffer} from '../../../api/contactAPI'

//Router
import { Redirect } from 'react-router-dom'

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
const OFFERED = 2;
const EXPERT_REJECT = 3;
const ACCEPT = 4;
const STUDENT_REJECT = 5;

const statusDictionary = {
    0: "Added to contact List",
    1: "pending",
    2: "offered",
    3: "Rejected by expert",
    4: "accepted",
    5: "rejected"
}

class MiniCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: this.props.check || false
        };
    }

    onClickMessage = () =>{
        this.props.handleSendMessageClick(this.props.simpleprofile.ID)
    }

    acceptOffer = () => {
        const data = {
            "id": this.props.simpleprofile.ID
        }
        const that = this;
        AcceptOffer(data).then(
            function(response){
                that.props.refreshContactList();
            }, function(err){
                alert("Error happens, accept offer unsuccessful")
            }
        )
    }

    rejectOffer = () => {
        const data = {
            "id": this.props.simpleprofile.ID
        }
        const that = this;
        RejectOffer(data).then(
            function(response){
                that.props.refreshContactList();
            }, function(err){
                alert("Error happens, accept offer unsuccessful")
            }
        )
    }

    navigateToDetailProfile = () =>{
        const destinationID = "/expertProfile/" + this.props.simpleprofile.Expert.ID;
        this.setState({redirect:destinationID})

    }
    
    

    render(){
        if(this.state.redirect){
            // let history = useHistory();
            return <Redirect push to = {this.state.redirect}/>
        }

        const {classes,simpleprofile} = this.props
        const ExpertInfo = simpleprofile.Expert; //Neccessary information of expert
        const ID = simpleprofile.ID;
        const Status = simpleprofile.Status
        const switched  = this.props.check || false
        return(
            <div style={{ width: "100%"}}>
                <div style={{display:"flex", width: "100%", alignItems:"flex-start"}}>
                    <Paper className={classes.paper} style={{ padding:25, flex:"auto"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div style={{flex:"0 1 auto", maxWidth:200}}>
                                <Avatar className={classes.bigAvatar}>
                                    {ExpertInfo.FirstName[0]}
                                </Avatar>
                            </div>
                            <div style={{flex:"0 1 auto", padding: 30, marginRight:"auto"}}>
                                <Typography variant="h1"  onClick = {this.navigateToDetailProfile}>
                                    {ExpertInfo.FirstName} {" "}  {ExpertInfo.LastName}
                                </Typography>
                                <Typography variant="body1">
                                    <p style={{fontWeight:500}}> Professor</p>
                                    {/* <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p> */}
                                </Typography>
                                <Typography variant="body1">
                                    Faculty of Life science
                                </Typography>
                            </div>

                            {Status !== ADDED_TO_CONTACT_LIST &&
                            <div style={{flex:"0 1 auto", padding: 30}}>
                                <Typography style={{fontWeight:300, fontSize: 17}}>
                                    Message Sent
                                </Typography>
                            </div>
                            }

                            {Status === ADDED_TO_CONTACT_LIST &&
                            <div style={{flex:"0 1 auto", padding: 30}}>
                                <Button variant="outlined" color="primary" onClick={this.onClickMessage}>
                                    Message
                                </Button>
                            </div>}
                        </div>

                        { Status !== ADDED_TO_CONTACT_LIST &&
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
                                    {Status === OFFERED &&
                                    <div>
                                        <Button variant="contained" color="primary" style={{marginRight:10, height:30, width:50}} onClick = {this.acceptOffer}>
                                            Accept
                                        </Button>
                                        <Button variant="outlined" color="primary" style={{height:30, width:50}} onClick = {this.rejectOffer}>
                                            Reject
                                        </Button>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        }
                    </Paper>
                    

                    {/* right part */}
                    { Status === ADDED_TO_CONTACT_LIST &&
                    <Paper className={classes.paper} style={{maxWidth:40, height:220,marginLeft:5, flex: "0 1 auto", }}>
                        <Checkbox 
                            color='primary' 
                            checked={switched} // here, we did not use this.props.check, instead, we make switch = this.props.check; 
                                                //Not sure why, but if we directly use this.prop.check, it can not render correctly...
                            onChange={this.props.handleCheck(ID)}
                            style = {{top:"45%"}}
                             inputProps={{
                                'aria-label': 'primary checkbox',
                                }}  />
                    </Paper>
                    }
                </div>

            </div>
        )

    }
};



export default withStyles(styles)(MiniCard);