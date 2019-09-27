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
import ScholarProfileFilter from '../../reusableComponents/scholarProfileFilter/ScholarProfileFilter'
import SecondHeader from "../../reusableComponents/SecondHeader"
import MiniCard from './MiniCard'
import SearchBox from '../../reusableComponents/textField/SearchBox'
import MessageModal from './MessageModal'


//api
import {GetContactList} from '../../../api/contactAPI'
import { TreasureChest } from 'mdi-material-ui';


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



class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experts:[],
            messageList:{},
            recieverList:[]
        };
    }

    async componentDidMount(){
        this.refreshContactList();
    }

    refreshContactList = () =>{
        const that = this;
        GetContactList().then(function(response){
            that.setState({experts: response.content})   // [{Experts:{ID:0, Avatar:url, FirstName:"",LastName:""}, ID: 0, Status:0 },{}]
            console.log("The contact List responsed from server:")
            console.log(response)
            // use a dictionary to maintain the list that waiting for sending application message
            let messageList = {}
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
    handleSendAllMessageClick = () =>{
        const {experts, messageList} = this.state

        // filter the reciver list
        let recieverList = experts.filter((item)=>{
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
        let recieverList = this.state.experts.filter((item)=>{
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

    render(){
        const {classes} = this.props;
        const contactList = this.state.experts.map((expert) =>
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
                <SecondHeader/>
                <div style = {{margin:"auto", maxWidth: 900}}>
                    <Typography variant = "h3" style = {{fontWeight:600, color: "#4a4a4a"}} >
                        Contact List
                    </Typography>
                    <Typography variant = "h3" style = {{fontWeight:"normal", color: "#4a4a4a", marginTop:5}}>
                        total {this.state.experts.length} contacts added
                    </Typography>
                    <div style = {{display:"flex", marginTop: 15 }}>
                        <Paper className = {classes.paper} style = {{flex: "1 1 auto", display:"flex", height:60, paddingTop: 5,alignItems:"baseline"}}>
                                <div style = {{flex: "1 1 auto", maxWidth: 180, minWidth:110 }}>
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