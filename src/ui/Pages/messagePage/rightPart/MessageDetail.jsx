/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:17th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { Paper, Typography,withStyles,Avatar, IconButton, Button} from '@material-ui/core';

//UI
import ProfileSummary from './ProfileSummary'


const styles = theme => ({
    paper:{
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.common.white,
      borderRadius: "2px",
      boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
      width:"800px",
      // width:"100%"
    },
    iconButton:{
        float:"right", 
        margin:"20 5 10 3", 
        display:"inline-block"

    }
})

const message = "Dear Mr. Kim: \n\nI am attending the LL.M program at Duke University School of Law and will receive my degree in May 2009. After my graduation, I would like to work in the U.S. for up to a year before Ireturen to my law firm in Japan. I am particularly interested in the possibility of an internship position at Sullivan & Cromwell because of its preeminent U.S legal practice in Tokyo.I received my first law honor from Waseda University in Tokyo.";


class MessageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){

    }

    
    render(){
        const {classes} = this.props
        return(
            <div style={{width:"90%", display:"flex" }}>

                {/* avatar */}
                <div style= {{flexGrow:"1", padding:10}}>
                <Avatar style = {{width:"40px", height:"40px", borderRadius:'5px'}}
                src="https://pic2.zhimg.com/80/v2-d888ae1c0639ddcf1a7fdabf199a36a3_hd.jpg" />
                </div >

                {/* message part*/}
                <div style= {{flexGrow:"14" , wordWrap:"initial", padding:10}}>
                {/* sender */}
                <Typography variant= 'h3' inline style={{ marginRight: 16 , fontWeight: "bold"}}>
                    You  
                </Typography>

                <Typography variant= 'h4' inline>
                    9:17 am 
                </Typography>

                {/* subject */}
                <Typography variant= 'h2'style ={{fontWeight:"bold", margin:"5px 0 10px 0" }}>
                    Apply for project position
                </Typography>
                <Typography variant ="h2" style ={{fontSize: "16px", fontWeight:400, lineHeight:1.5}}>
                <div style = {{wordBreak:"break-word", wordWrap:"", whiteSpace: "pre-wrap"}}>
                    {message}
                </div>
                </Typography>
                <ProfileSummary/>
                </div>
            </div>
        )

    }
};

export default withStyles(styles)(MessageDetail);