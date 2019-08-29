import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button,Tabs,Tab, withStyles,withTheme, spacing, Menu, ClickAwayListener, MenuItem, Paper} from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import PropTypes from 'prop-types';
import {ContactMail,MailOutline,PermContactCalendar} from '@material-ui/icons/';
import { Plus,AccountCardDetailsOutline, EmailOutline, AccountOutline } from 'mdi-material-ui';

//redux Dependencies
import { connect } from 'react-redux'
import {backToHomePage} from '../../redux/actions/index.js'

// RouterDependencies
import { Redirect } from 'react-router-dom'

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


class SecondHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toAnotherPage: ""
            
        };
    }

    toHomePage = () =>{
      this.setState({toAnotherPage:"SearchExpert"})
    }

    componentWillUnmount = () => {
      this.setState({toAnotherPage:""})
    }
    // componentDidUpdate = () =>{
    //   this.setState({toAnotherPage:""})
    // }



    
    render(){

      if(this.state.toAnotherPage == "SearchExpert"){
        return <Redirect to ="/SearchExpert"/>
    }

    if(this.state.toAnotherPage == "profile"){
      return <Redirect to ="/personalProfile"/>
  }

        const {classes} = this.props;
        return(
            <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" color="inherit" className={classes.grow} onClick = {this.toHomePage}>
                    PROFSEARCH 
                    </Typography>

                    <Button  color="secondary" className={classes.button} size="small" onClick = {this.toProfilePage}>
                    <div style= {{float:"left", align:"middle", displa:"block",textAlign:"center"}}>
                    <AccountCardDetailsOutline/> <p style = {{padding:"0", margin:"0", fontSize:"12px"}}>contactlist</p>
                    </div>
                    </Button>

                    <Button color="secondary" className={classes.button} size="small">
                    <div style= {{float:"left", align:"middle", displa:"block",textAlign:"center"}}>
                    <EmailOutline/> <p style = {{padding:"0", margin:"0", fontSize:"12px"}}>Message</p>
                    </div>
                    </Button>

                    <Button color="secondary" className={classes.button} size="small">
                    <div style= {{float:"left", align:"middle", displa:"block",textAlign:"center"}}>
                    <AccountOutline/> <p style = {{padding:"0", margin:"0", fontSize:"12px"}}>Profile</p>
                    </div>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
        )

    }
};

export default withStyles(styles)(SecondHeader);