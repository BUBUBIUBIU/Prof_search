/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th Sep 2019]
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Paper, Typography, Button, withStyles,InputBase ,Avatar, Divider} from '@material-ui/core';
import { Close } from 'mdi-material-ui';
import  {SendApplication} from '../../../api/contactAPI'


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
        top: "10%",
        left: "25%",
        borderRadius: "4px",
    },
    textarea :{
        border:0,
        borderRadius:5,
        backgroundColor: theme.palette.common.white,
        width: "100%",
        height: 500,
        // padding: "10px 20px 10px 10px",
        resize: "none",
        fontSize: 16,
        fontFamily: "Montserrat",
        outline: "none"
    }
});

class MessageModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:""
        };
    }


    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }

    apply = () =>{
        let ExpertID =  this.props.recieverList.map(reciever => reciever.ID)
        console.log(ExpertID)
        const applicationMessage = {
            ExpertID,
            Message:this.state.message
        }
        const that = this;
        SendApplication(applicationMessage).then(function(response){
            console.log(response);
            that.props.handleClose();
        }, function(reject){
            alert(reject)
        })

    }



    render() {
        const { classes} = this.props
        // for(let item in expert){
        //     if (item.ID in messageList && messageList[item.ID] === true){
        //         recieverListInfo.push(item)
        //     }
        // }
        console.log(this.props.recieverList)

        const recieverList = this.props.recieverList.map((reciever, index) =>
        <div>
            <div style = {{display:"flex", alignItems:"center", marginTop:10}}> 

                {index !== 0 &&
                <Typography style = {{flex:"0 1 auto", marginRight:"10px", fontWeight:"bold", visibility:"hidden"}}> 
                    To
                </Typography>}

                {index === 0 &&
                <Typography style = {{flex:"0 1 auto", marginRight:"10px", fontWeight:"bold"}}> 
                    To
                </Typography>}
                <div style = {{maxWdith: "20px", padding:"0 10px"}}>
                <Avatar style ={{width:40, height:40, borderRadius:4}}>
                    T
                </Avatar>
                </div>
                <div style = {{display: "flex", flex:"0 1 auto", flexDirection:"column"}}>
                <Typography style = {{flex:"0 1 auto", fontSize: "16px", fontWeight: 600}}> 
                    {reciever.Expert.FirstName}  {" "}  {reciever.Expert.LastName}
                </Typography>
                <Typography style = {{flex:"0 1 auto", fontSize: "12px"}}> 
                    Professor | University of Melbourne
                </Typography>
                </div>
            </div>
            {index ===  this.props.recieverList.length - 1 && <Divider style = {{margin:20}}/>}
            </div>

        );
        return (
            <div className={classes.modal}>

                <Paper className={classes.paper} style={{ padding: "20px 30px 0px 30px", marginBottom: "3px", height: "40px" }} >
                    <div>
                        <Typography variant="h1">
                            <div style={{ verticalAlign: "middle", height: "100%", float: "left" }}>
                                Message
                            </div>
                            <Button style={{ float: "right", verticalAlign: "middle", color: "#000000" }} size="small" onClick={this.props.handleClose}>
                                <Close />
                            </Button>
                        </Typography >
                    </div>
                </Paper>

                <Paper className={classes.paper} style={{ padding: "50px 30px", height: 600 , overflow:"auto"}}>
                    <div style = {{maxHeight:200, overflow:"auto"}}>
                    {recieverList}
                    </div>
                    <textarea className = {classes.textarea} value = {this.state.message} onChange = {this.handleChange("message")}
                    placeholder="Write your application description">

                    </textarea>
                    <Button variant = "contained" color = "primary" style = {{float:"right"}} onClick = {this.apply}>
                        Send
                    </Button>
                </Paper>
                
            </div>

        )
    }

}


export default withStyles(styles)(MessageModal);