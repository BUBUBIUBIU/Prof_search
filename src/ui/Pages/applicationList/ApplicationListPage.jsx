/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th Sep 2019]
 */

 /*
    The pitfall for this file is managing the contact list 
 */




//Dependencies
import React, { Component } from 'react';
import { Grid,Paper,Button,Menu,MenuItem,withStyles,List,ListItem, Checkbox,FormControlLabel,Typography,Modal} from '@material-ui/core';
import Sort from '@material-ui/icons/Sort'

//UI
import SecondHeader from "../../reusableComponents/SecondHeader"
import SearchBox from '../../reusableComponents/textField/SearchBox'
import MiniCard from './MiniCard'



//api
import {GetApplicationList} from '../../../api/applicationAPI'


const styles = theme =>({
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        background:theme.palette.common.white,
        margin:0,
    },
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "2px 2px 4px 2px #d7d7d7",
        // width:"100%"
    },

});



class ApplicationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationList: [],
        };
    }

    async componentDidMount(){
        this.refreshApplicationList();
    }

    refreshApplicationList = () => {
        const that = this
        GetApplicationList().then(
            function(response){
                console.log("Application list received")
                console.log(response.content);
                that.setState({applicationList:response.content})
            },function(err){
                console.log("err in application Page when getting application list")
                console.log(err)
            }
        )
    }
    
    render(){
        const {classes} = this.props;
        const applications = this.state.applicationList.map((application) =>
        <ListItem key={application._id} style = {{padding:"16px 0" }}>
            <MiniCard simpleprofile = {application} refreshApplicationList = {this.refreshApplicationList}/>
        </ListItem>
        );

        
        return(
            <div>
                <SecondHeader/>
                <div style = {{margin:"auto", maxWidth: 900}}>
                    <div style = {{display:"flex", }}>
                        <Paper className = {classes.paper} style = {{flex: "1 1 auto", display:"flex", height:60, paddingTop: 5,alignItems:"baseline"}}>
                                <div style = {{flex: "1 1 auto", maxWidth: 180, minWidth:110, marginRight:"auto", }}>
                                    <Sort style={{verticalAlign:"middle"}}/>
                                    <Button >
                                        Default
                                    </Button>
                                    <Menu id="simple-menu">
                                        <MenuItem >Default Sort</MenuItem>
                                        <MenuItem>Name</MenuItem>
                                        <MenuItem >Number Of Publications</MenuItem>
                                    </Menu>
                                </div>

                                <div  style = {{flex: "2 1 auto", maxWidth:270, height:40}}>
                                    <SearchBox/>
                                </div>

                        </Paper>
                    </div>
 
                      <List style = {{width: "100%"}}>
                         {applications}
                     </List> 
                </div>
            </div>
        )
    }
};

export default withStyles(styles)(ApplicationList);