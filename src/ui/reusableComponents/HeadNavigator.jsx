import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button,Tabs,Tab, withStyles,withTheme, spacing,Avatar, Menu, ClickAwayListener, Grid,ButtonBase, MenuItem, Paper} from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';

//redux Dependencies
import { connect } from 'react-redux'
import {backToHomePage,changeLanguage, logout} from '../../redux/actions/index.js'

// RouterDependencies
import { Redirect } from 'react-router-dom'

//API
import {LoginCheck, Logout} from '../../api/authApi'




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
            anchorEl: null,
            profileAnchorEl: null,
            toAnotherPage:"",
            openSignUpModal: false,
            openLoginModal: false,
            authValue:""         
           
        };
    this.handleChange = this.handleChange.bind(this);
    this.setEnglish = this.setEnglish.bind(this);
    this.setChinese = this.setChinese.bind(this);
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    }

    handleChange = (event,value) => {
        if(this.state.value != value ){
          this.setState({toAnotherPage:value});
        }
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

    handleProfileClick = event => {
      this.setState({ profileAnchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
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
      this.setState({toAnotherPage:"SearchExpert"})
    }

    logout = () =>{
      const temp = this
    //method from login API, if succcusss, then store cookie, otherwise don't  
    Logout()
        .then(function(response){
          alert("successful")
          temp.props.logout();
            cookie.remove('userId');
            cookie.remove('token');            
        },function(err){
            alert("login failed")
            console.log(err);
        })
        this.handleClose();

    }


    render() {
        if(this.state.toAnotherPage == "SearchExpert"){
            return <Redirect to ="/SearchExpert"/>
        }

        if(this.state.toAnotherPage == "home"){
          return <Redirect to ="/SearchExpert"/>
        }

        if(this.state.toAnotherPage == "SearchPhd"){
            return <Redirect to ="/SearchPhdPosition"/>
        }
        if(this.state.toAnotherPage == "SearchResearchProjects"){
            return <Redirect to ="/SearchResearchProjects"/>
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
        
  

        const {value, anchorEl,profileAnchorEl} = this.state;
        const {classes, theme, intl} = this.props;
        const searchExperts = intl.formatMessage({id: 'navigator_search_experts'});
        const search_phd = intl.formatMessage({id: 'navigator_search_phd'});
        const search_projects = intl.formatMessage({id: 'navigator_search_projects'});
        
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
                    aria-owns={anchorEl ? 'personal-profile' : undefined} 
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
                  <Avatar className={classes.smallAvatar} 
                      src = "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-0/p370x247/50229562_10157302245734739_2837044079051669504_n.jpg?_nc_cat=109&amp;_nc_ht=scontent.fcbr1-1.fna&amp;oh=9af7e41fe295e20bf12794a74726716b&amp;oe=5D53A962"> 
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

                  <MenuItem onClick={this.handleProfileClose}>
                  <Typography variant="h3" onClick = {this.logout}>
                    Log out
                  </Typography>
                  </MenuItem>

                </Menu>

                  <Button variant="outlined" 
                    color="secondary" 
                    className={classes.button} 
                    size="small" 
                    aria-owns={anchorEl ? 'simple-menu' : undefined} 
                    aria-haspopup="true"
                    onClick={this.handleLanguageButtonClick}>
                    <FormattedMessage id="navigator_changeLangugae" defaultMessage="English" />
                  </Button>
                  <Menu id="simple-menu" color="secondary" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.setEnglish}>English</MenuItem>
                    <MenuItem onClick={this.setChinese}>简体中文</MenuItem>
                  </Menu>
                </Toolbar>
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab value="SearchExpert" label={searchExperts} />
                  <Tab value="SearchPhd" label={search_phd}  />
                  <Tab value="SearchResearchProjects" label={search_projects}  />
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