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
import { Paper,Button,Menu,MenuItem,withStyles,List,ListItem, Checkbox,Typography,Modal} from '@material-ui/core';
import Sort from '@material-ui/icons/Sort'

//UI
import Header from '../../reusableComponents/NewHeadNavigator'
import MiniCard from './MiniCard'
import SearchBox from '../../reusableComponents/textField/SearchBox'
import MessageModal from './MessageModal'


//api
import {GetContactList} from '../../../api/contactAPI'


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
const OFFERED = "Status"


class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList:[],
            messageList:{}, // {1: false, 2: false, 3: false, 4: true} -- the selected contacts that waiting to send message
            recieverList:[],
            sortBy:DATE
        };
    }

    async componentDidMount(){
        this.refreshContactList();
    }

    refreshContactList = () =>{
        const that = this;
        GetContactList().then(function(response){
            that.setState({contactList: response.content})   // [{Experts:{ID:0, Avatar:url, FirstName:"",LastName:""}, ID: 0, Status:0 },{}]
            that.sortContactList(that.state.sortBy) // sort agin based on previous sort value
            console.log("The contact List responsed from server:")
            console.log(response)
            let messageList = {} // use a dictionary to maintain the list that waiting for sending application message
            for(let item of response.content){
                if (item.Status === 0){ // message list only for those with status 0 (i.e. haven't send application message)
                messageList[item.ID] = false
                }
            }
            that.setState({messageList:messageList})
            console.log(messageList)
        },function(err){
        })

    }


    

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    handleCheckAll = (event) =>{
        this.setState({checkAll:event.target.checked})
        let messageList = this.state.messageList;
        if (event.target.checked){
            for(let key in messageList){
                messageList[key] = true;
            }
        }else{
            for(let key in messageList){
                messageList[key] = false;
            }
        }
        this.setState({messageList:messageList})
        console.log(this.state.messageList)
    }

    handleCheck = (ID) => event => {
        // this.setState({ [name]: event.target.checked });
        let messageList = this.state.messageList;
        if (event.target.checked){
            messageList[ID] = true
        }else{
            messageList[ID] = false
        }
        this.setState({messageList:messageList})
        console.log("individual check")
        console.log(this.state.messageList)
      };

    
    // send message to all selected professors
    // 
    handleSendAllMessageClick = () =>{
        const {contactList, messageList} = this.state

        // filter the reciver list
        let recieverList = contactList.filter((item)=>{
            if(item.ID in messageList && messageList[item.ID]){
                return true
            }else{
                return false
            }
        })
        console.log(recieverList)
        if (recieverList.length > 0){
        this.setState({recieverList:recieverList,open:true})
        }else{
            alert("You need to select at least one expert to send message")
        }
    }


    // send message to individual
    handleSendMessageClick = (ID) =>{
        // filter the reciver list
        let recieverList = this.state.contactList.filter((item)=>{
            if(item.ID  === ID){
                return true
            }else{
                return false
            }
        })
        console.log(recieverList)
        this.setState({recieverList,open:true})
    }

    handleClose = () => {
        this.setState({open:false});
        this.refreshContactList();
    }

    handleCloseMenu = () => {
        this.setState({anchorEl:null})
    }

    handleClickSortMenu = (event) =>{
        this.setState({ anchorEl: event.currentTarget });
    }


    handleSort = (sortBy) => {
        this.setState({sortBy: sortBy});
        this.sortContactList(sortBy);
        this.handleCloseMenu();
    }


    sortContactList = (sortBy) =>{
        let contactList = this.state.contactList;

        if(sortBy === NAME){
            contactList.sort(function(a,b){
                let nameA = a.Expert.FirstName.toUpperCase();
                let nameB = b.Expert.LastName.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if (nameA > nameB){
                    return 1;
                }
                return 0;
            })

        }
        else if(sortBy === OFFERED){
            contactList.sort(function(a,b){
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
            contactList.sort(function(a,b){
                return a.ID - b.ID
            })
        }
        this.setState({contactList:contactList})
    }

    render(){
        const {classes} = this.props;
        const { anchorEl } = this.state;
        const contactList = this.state.contactList.map((expert) =>
        <ListItem key={expert._id} style = {{padding:"16px 0" }}>
            <MiniCard simpleprofile = {expert} 
                        check = {this.state.messageList[expert.ID]} 
                        handleCheck = {this.handleCheck}
                        handleSendMessageClick = {this.handleSendMessageClick}
                        refreshContactList = {this.refreshContactList}/>
        </ListItem>
        );

        
        return(
            <div>
                <Header/>
                <div style = {{margin:"auto", maxWidth: 900}}>
                    <Typography variant = "h3" style = {{fontWeight:600, color: "#4a4a4a"}} >
                        Contact List
                    </Typography>
                    <Typography variant = "h3" style = {{fontWeight:"normal", color: "#4a4a4a", marginTop:5}}>
                        total {this.state.contactList.length} contacts added
                    </Typography>
                    <div style = {{display:"flex", marginTop: 15 }}>
                        <Paper className = {classes.paper} style = {{flex: "1 1 auto", display:"flex", height:60, paddingTop: 5,alignItems:"baseline"}}>
                                <div style = {{flex: "1 1 auto", maxWidth: 180, minWidth:110 }}>
                                
                                <Button aria-owns={anchorEl ? 'sort-menu' : undefined} aria-haspopup="true"
                                        onClick={this.handleClickSortMenu} >
                                <Sort style={{verticalAlign:"middle"}} />
                                    Sort by {this.state.sortBy}
                                </Button>
                                <Menu id="sort-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={this.handleClose}>
                                    <MenuItem onClick = {() => this.handleSort(DATE)}>Date</MenuItem> {/*()=> this.function 这种写法可以避免onClick事件在render时自动触发 */}
                                    <MenuItem onClick = {() => this.handleSort(NAME)}>Name</MenuItem>
                                    <MenuItem onClick = {() => this.handleSort(OFFERED)}>Status</MenuItem>
                                </Menu>
                                </div>
                                <div  style = {{flex: "2 1 auto", marginRight:"auto", maxWidth:270, height:40}}>
                                <SearchBox/>
                                </div>

                                <div style ={{flex: "0 1 auto",paddingLeft:40}}>
                                <Button variant="contained" color="primary" onClick = {this.handleSendAllMessageClick}>
                                    Message selected
                                </Button>
                                </div>

                        </Paper>
                        <Paper className = {classes.paper} style ={{maxWidth:40,flex: "0 1 auto",  flexDirection :"column", alignItems:"baseline", alignContent:"center"}} >
                            <Checkbox
                                color = 'primary'
                                checked={this.state.checkAll}
                                onChange={this.handleCheckAll}
                                value = "checkAll"
                                inputProps={{
                                'aria-label': 'primary checkbox',
                                }}
                                style = {{flex:"auto"}}
                            />
                        </Paper>
                    </div>

                    <List style = {{width: "100%"}}>
                        {contactList}
                    </List>
                </div>

                <Modal
                    aria-labe lledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <MessageModal 
                        handleClose = {this.handleClose}
                        recieverList = {this.state.recieverList}/>
                </Modal>

            </div>
        )
    }
};

export default withStyles(styles)(ContactList);