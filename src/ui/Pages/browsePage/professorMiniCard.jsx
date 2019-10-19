/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [ Chenyang Lu], [date 18th Oct 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper ,withStyles, Typography,Divider,Button} from '@material-ui/core';

//UI

//ENUM
import {TitleDict} from '../../../config/enum'

//Router
import { Redirect } from 'react-router-dom'

//api
import {AddToContactList} from '../../../api/contactAPI'

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "2px 2px 4px 2px #d7d7d7",
        marginLeft:"auto",
        marginTop:5,
        padding:"15px 25px"
        // width:"100%"
    },

});


class professorMiniCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    viewProjectDetail = () =>{
        const destinationURL = "/expertProfile/" + this.props.professor.ID;
        this.setState({redirect:destinationURL})

    }

    addToContactList = () =>{
        AddToContactList([this.props.professor.ID]);

    }

    sendMessage= () =>{


    }



    render(){
        if(this.state.redirect){
            // let history = useHistory();
            return <Redirect push to = {this.state.redirect}/>
        }

        const {classes,professor,width} = this.props
        return(
            <Paper className={classes.paper} style = {{width:width}}>
                 <div onClick = {this.navigateToDetailProfile}>
                            <div style = {{marginBottom:5}}>
                                <Typography variant = "subtitle1" style = {{fontWeight:600}}>
                                    {professor.FirstName}  {professor.LastName}
                                </Typography>
                                <Typography variant = "h3">
                                    {TitleDict[professor.Title]}
                                </Typography>
                            </div>
                                <Divider />
                                <div style = {{display:"flex", justifyContent:"Space-between"}}>
                                    <Button color= "primary" onClick = {this.viewProjectDetail}> View Projects</Button>
                                    <Button color= "primary" onClick = {this.addToContactList}> Add to list to contact</Button>
                                    <Button color= "primary" onClick = {this.sendMessage}> Message </Button>
                                </div>
                </div>
            </Paper>
        )
    }
};

export default withStyles(styles)(professorMiniCard);