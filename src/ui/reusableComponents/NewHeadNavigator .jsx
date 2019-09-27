import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button,Tabs,Tab, withStyles,withTheme, spacing,Avatar, Menu, ClickAwayListener, Grid,ButtonBase, MenuItem, Paper} from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import PropTypes from 'prop-types';

//redux Dependencies
import { connect } from 'react-redux'
import {backToHomePage,changeLanguage, logout} from '../../redux/actions/index.js'

// RouterDependencies
import { Redirect } from 'react-router-dom'

//API
import {Logout} from '../../api/authApi'




const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'relative',
    marginLeft: 10,
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
    margin:0,

  },
  smallAvatar:{
    margin: 5,
    width: 25,
    height: 25,
    borderRadius:"5px"
  }
});


class HeadNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.tabValue,
            profileAnchorEl: null,
            toAnotherPage:"",
            openSignUpModal: false,
            openLoginModal: false,
            authValue:""         
           
        };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    }

    handleChange = (event,value) => {
        if(this.state.value != value ){
          this.setState({toAnotherPage:value});
        }
    }


    handleProfileClick = event => {
      this.setState({ profileAnchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ profileAnchorEl: null });
    };

    handleProfileClose = () => {
      this.setState({ profileAnchorEl: null });
    };

    signUp =() =>{
      this.setState({authValue:"signup"});

    }

    login = () =>{
      this.setState({authValue:"login"});
    }

    jumpToProfilePage = () => {
      this.handleClose()
      this.setState({toAnotherPage:"personalProfile"})
      
    }

    backToHomePage = () =>{
      this.setState({toAnotherPage:"home"})
    }

    signout = () =>{
      const that = this
      //method from logout api, if success, delete cookies, otherwise don't  
      Logout("student")
          .then(function(response){
            alert("successful")
            that.props.logout();          
          },function(err){
              alert("logout failed")
              console.log(err);
          })
          this.handleProfileClose()

    }


    render() {

        if(this.state.toAnotherPage == "home"){
          if (window.location.pathname != "/" && window.location.pathname != "/search"){
          return <Redirect to ="/"/>
          }
        }

        if(this.state.toAnotherPage == "personalProfile"){
          return <Redirect to ="/personalProfile"/>
        }
        if (this.state.authValue == "login") {
          return <Redirect to='../login' />
        }

        if (this.state.authValue=="signup") {
          return <Redirect to='../signup' />
        }
        
  

        const {value, profileAnchorEl} = this.state;
        const {classes, theme, intl} = this.props;
        
        return (
          <div>
              <AppBar position="static" className={classes.appBar}>
                <Toolbar>


                  <Typography variant="h4" color="inherit" className = {classes.grow} onClick = {this.backToHomePage}>
                  PROFSEARCH 
                  </Typography>


                  {this.props.userInfo.status === 0 &&
                  <Button variant="outlined" color="secondary" className={classes.button} size="small" onClick = {this.signUp}> 
                  <FormattedMessage id="navigator_sign_up" defaultMessage="Sign up" />
                  </Button>}

                  {this.props.userInfo.status === 0 &&
                  <Button variant="outlined" color="secondary" className={classes.button} size="small" onClick = {this.login}>
                  <FormattedMessage id="navigator_log_in" defaultMessage="Log in" />
                  </Button>}

                  {this.props.userInfo.status === 1 &&
                  <Button variant="outlined" 
                    color="secondary" 
                    aria-controls="personal-profile" 
                    aria-owns={profileAnchorEl ? 'personal-profile' : undefined} 
                    className={classes.button} 
                    size="small"
                    aria-haspopup="true"
                    onClick={this.handleProfileClick}>
                  {this.props.userInfo.name}
                  
                  </Button>
                }
                <Menu id="personal-profile" 
                      open={true}
                      anchorEl = {profileAnchorEl}
                      open={Boolean(profileAnchorEl)}
                      onClose={this.handleClose}>

                  <MenuItem onClick={this.jumpToProfilePage}>
                  <Avatar className={classes.smallAvatar} >
                      {this.props.userInfo.name.substring(0,1)}
                  </Avatar>
                  <Typography variant="h3" >
                    {this.props.userInfo.name}
                  </Typography>

                  </MenuItem>
                  <MenuItem onClick={this.handleProfileClose}>
                  <Typography variant="h3" >
                    Setting and privacy
                  </Typography>
                  </MenuItem>

                  <MenuItem onClick={this.signout}>
                  <Typography variant="h3">
                    Log out
                  </Typography>
                  </MenuItem>

                </Menu>
                </Toolbar>
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab value="search" label= "Search" />
                  <Tab value="browse" label= "Browse" />
                </Tabs>
              </AppBar>

          </div>
        );
    }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
    backHome: () => dispatch(backToHomePage()),
    changeLanguage: (language) => dispatch(changeLanguage(language)),
    logout: ()=> dispatch(logout()),
    dispatch
});




export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(HeadNavigator)));