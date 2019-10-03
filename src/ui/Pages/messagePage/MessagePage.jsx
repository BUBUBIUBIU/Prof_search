//Dependencies
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Typography} from '@material-ui/core';
//UI
import Header from "../../reusableComponents/NewHeadNavigator"
import LeftPannel from './leftPannel/LeftPannel'
import RightPart from './rightPart/RightPart'

//api
import {getProfile} from '../../../api/personalProfileApi'



class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                FirstName: null,
                LastName: null,
                Email:null,
                Phone:null,
                Universities:[]
            },
        };
    }

    componentDidMount(){

    }

    
    render(){
        return(
        <div>
            <Header/>
            <div style = {{width:"1500" }}>
            <Typography style ={{padding:"30px 10px 10px 100px"}}>
                Home >  Message
            </Typography>
            <div style ={{padding:"20px 10px 50px 100px",float:"left"}}>
            <LeftPannel/>
            </div>
            <div style= {{padding:"20px 10px 50px 20px",float:"left"}}>
            <RightPart/>
            </div>
            </div>
        </div>
        )

    }
};

export default MessagePage;