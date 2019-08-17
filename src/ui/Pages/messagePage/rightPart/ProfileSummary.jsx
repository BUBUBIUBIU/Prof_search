 /* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:17th Aug 2019]
 */

//Dependencies
import React, { Component } from 'react';
import { withStyles,Divider,Typography} from '@material-ui/core';




const styles = theme => ({
})


class ProfileSummary extends Component {
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
            <div>
                <Divider/>
                <Typography style ={{fontSize: 20, fontWeight:"bold", margin:20}}>
                    Profile Summary
                </Typography>
                <Divider/>
                
            </div>
        )

    }
};

export default withStyles(styles)(ProfileSummary);