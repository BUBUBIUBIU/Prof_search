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
import Header from '../../reusableComponents/NewHeadNavigator'
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



const DATE = "Date"
const NAME = "Name"
const SCORE = "Score"
const STATUS = "Status"



class ApplicationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationList: [],
            sortBy:DATE
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
                that.sortByApplicationList(that.state.sortBy)
            },function(err){
                console.log("err in application Page when getting application list")
                console.log(err)
            }
        )
    }

    handleClickSortMenu = (event) =>{
        this.setState({ anchorEl: event.currentTarget });
    }

    
    handleSort = (sortBy) => {
        this.setState({sortBy: sortBy});
        this.sortByApplicationList(sortBy);
        this.handleCloseMenu();
    }

    handleCloseMenu = () => {
        this.setState({anchorEl:null})
    }

    sortByApplicationList = (sortBy) => {
        let applicationList = this.state.applicationList;

        if(sortBy === NAME){
            applicationList.sort(function(a,b){
                let nameA = a.Student.FirstName.toUpperCase();
                let nameB = b.Student.LastName.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if (nameA > nameB){
                    return 1;
                }
                return 0;
            })

        }
        else if(sortBy === STATUS){
            applicationList.sort(function(a,b){
                let statusA = a.Status;
                let statusB = b.Status;
                if(statusA > statusB){
                    return -1;
                }
                if (statusA < statusB){
                    return 1;
                }
                return 0;
            })
            
        }

        //TODO
        //FIXME
        else if(sortBy === SCORE){
            applicationList.sort(function(a,b){
                let statusA = a.Status;
                let statusB = b.Status;
                if(statusA > statusB){
                    return -1;
                }
                if (statusA < statusB){
                    return 1;
                }
                return 0;
            })
            
        }
        else{
            applicationList.sort(function(a,b){
                return a.ID - b.ID
            })
        }
        this.setState({applicationList:applicationList})

    }
    
    render(){
        const {classes} = this.props;
        const { anchorEl } = this.state;
        const applications = this.state.applicationList.map((application) =>
        <ListItem key={application._id} style = {{padding:"16px 0" }}>
            <MiniCard simpleprofile = {application} refreshApplicationList = {this.refreshApplicationList}/>
        </ListItem>
        );

        
        return(
            <div>
                <Header/>
                <div style = {{margin:"auto", maxWidth: 900}}>
                    <div style = {{display:"flex", }}>
                        <Paper className = {classes.paper} style = {{flex: "1 1 auto", display:"flex", height:60, paddingTop: 5,alignItems:"baseline"}}>
                            <div style = {{flex: "1 1 auto", maxWidth: 180, minWidth:110, marginRight:"auto", }}>
                                <Button aria-owns={anchorEl ? 'sort-menu' : undefined} aria-haspopup="true"
                                        onClick={this.handleClickSortMenu} >
                                <Sort style={{verticalAlign:"middle"}} />
                                    Sort by {this.state.sortBy}
                                </Button>
                                <Menu id="sort-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={this.handleClose}>
                                    <MenuItem onClick = {() => this.handleSort(DATE)}>Date</MenuItem> {/*()=> this.function 这种写法可以避免onClick事件在render时自动触发 */}
                                    <MenuItem onClick = {() => this.handleSort(NAME)}>Name</MenuItem>
                                    <MenuItem onClick = {() => this.handleSort(SCORE)}>Score</MenuItem>
                                    <MenuItem onClick = {() => this.handleSort(STATUS)}>Status</MenuItem>
                                </Menu>
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