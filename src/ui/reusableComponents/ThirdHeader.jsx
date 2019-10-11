/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [wiwi lin], [date 3th Oct 2019]
 */


import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,withStyles} from '@material-ui/core';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      position: 'relative',
      marginLeft: 5,
      marginRight: 40,
    },
    grow: {
      flexGrow: 2,
      padding:-2,
      margin:-20,
      fontSize:28,
      fontWeight: 800
    },
    input: {
      display: 'none',
    },
    appBar:{
      background: 'linear-gradient(45deg, #D4145A 30%, #FBB03B 90%)',
      paddingLeft:100,
      paddingRight:100,
      marginBottom: "30px"
    }
  });


class ThirdHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          anchorEl: null,
        };
        this.setEnglish = this.setEnglish.bind(this);
    this.setChinese = this.setChinese.bind(this);
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    }

    setEnglish(){
      this.props.changeLanguage('en');
      this.handleClose();

    }

    setChinese(){
      this.props.changeLanguage('zh');
      this.handleClose();

    }


    handleLanguageButtonClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    render(){
        const {classes} = this.props;
        const {value, anchorEl} = this.state;
        return(
            <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" color="inherit" className={classes.grow}>
                    PROFSEARCH 
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
        )

    }
};

export default withStyles(styles)(ThirdHeader);