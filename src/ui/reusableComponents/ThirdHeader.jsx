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

                    <Button variant="outlined" color="secondary" className={classes.button} size="small" 
                    aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true"
                    onClick={this.handleLanguageButtonClick}>
                    <FormattedMessage id="navigator_changeLangugae" defaultMessage="English" />
                  </Button>
                  <Menu id="simple-menu" color="secondary" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.setEnglish}>English</MenuItem>
                    <MenuItem onClick={this.setChinese}>简体中文</MenuItem>
                  </Menu>
                </Toolbar>
            </AppBar>
        </div>
        )

    }
};

export default withStyles(styles)(ThirdHeader);