import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button,Tabs,Tab, withStyles,Avatar, Menu, MenuItem} from '@material-ui/core';
import { FormattedMessage, injectIntl } from 'react-intl';
import { AccountCardDetailsOutline} from 'mdi-material-ui';


//redux Dependencies
import { connect } from 'react-redux'
import {backToHomePage, logout} from '../../redux/actions/index.js'

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
    marginBottom: "30px"

  },
  smallAvatar:{
    margin: 5,
    width: 25,
    height: 25,
    borderRadius:"5px"
  },
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

    toContactListPage = () => {
      if(this.props.userInfo.identity === "student"){
        this.setState({toAnotherPage:"contactList"})
      }else{
        this.setState({toAnotherPage:"applicationList"})
      }
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

    displayTabs = () => {
      if (window.location.pathname === '/' || window.location.pathname === '/search' || 
      window.location.pathname === '/browse'|| window.location.pathname === '/search/searchResult' ){
        return true;
      }else{
        return false;
      }

    }

    onMouseEnter = () => {
      this.setState({
        hover:true
      })
    }

    onMouseLeave = () =>{
      this.setState({
        hover:false
      })

    }


    render() {

        if(this.state.toAnotherPage === "home" || this.state.toAnotherPage === "search"){
          if (window.location.pathname !== "/" && window.location.pathname != "/search"){
          return <Redirect push to ="/"/>
          }
        }


        if(this.state.toAnotherPage === "personalProfile"){
          if (window.location.pathname !== "/personalProfile" && window.location.pathname != "/search"){
            return <Redirect push to ="/personalProfile"/>
          }
        }

        if (this.state.toAnotherPage === "contactList") {
          if (window.location.pathname !== "/contactList")
            return <Redirect push to = "/contactList" />
        }
  
  
        if (this.state.toAnotherPage === "applicationList") {
          if (window.location.pathname !== "/applicationList")
            return <Redirect push to = "/applicationList" />
        }
        if (this.state.toAnotherPage === "browse") {
          if (window.location.pathname !== "/browse")
            return <Redirect push to = "/browse" />
        }
  
        if (this.state.authValue === "login") {
          return <Redirect to='../login' />
        }

        if (this.state.authValue==="signup") {
          return <Redirect to='../signup' />
        }
        
  

        const {value, profileAnchorEl} = this.state;
        const {classes, theme, intl} = this.props;
        
        return (
          <div>
              <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="h4" 
                  color="inherit" 
                  className = {classes.grow} 
                  onClick = {this.backToHomePage} 
                  style = {{marginRight: "auto", cursor:(this.state.hover)? 'pointer': 'default'}}
                  onMouseEnter={this.onMouseEnter} 
                  onMouseLeave={this.onMouseEnter} 
                  >
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
                  <Button color="secondary" className={classes.button} size="small" onClick={this.toContactListPage}>
                    <div style={{float:"left", align:"middle", display:"block",textAlign:"center"}}>
                      <AccountCardDetailsOutline />
                      <p style={{padding:"0", margin:"0", fontSize:"12px"}}>
                        {this.props.userInfo.identity === "student" && "Contact List"}
                        {this.props.userInfo.identity === "expert" && "Application List"}
                      </p>
                    </div>
                  </Button>
                  }


                  {this.props.userInfo.status === 1 &&
                  <Button 
                    color="secondary" 
                    aria-controls="personal-profile" 
                    aria-owns={profileAnchorEl ? 'personal-profile' : undefined} 
                    className={classes.button} 
                    size="small"
                    aria-haspopup="true"
                    onClick={this.handleProfileClick}>
                    <div style={{align:"middle", display:"block",textAlign:"center"}}>
                    <Avatar style = {{width:27, height:27, marginBottom:6}}>
                      {this.props.userInfo.firstName.substring(0,1) + this.props.userInfo.lastName.substring(0,1)}
                    </Avatar>
                      <p style={{padding:"0", margin:"0", fontSize:"12px"}}>
                        Me
                      </p>
                    </div>
                  </Button>
                }
                <Menu id="personal-profile" 
                      open={true}
                      anchorEl = {profileAnchorEl}
                      open={Boolean(profileAnchorEl)}
                      onClose={this.handleClose}>

                  <MenuItem onClick={this.jumpToProfilePage}>
                  <Avatar className={classes.smallAvatar}>
                  {this.props.userInfo.firstName.substring(0,1) + this.props.userInfo.lastName.substring(0,1)}
                  </Avatar>
                  <Typography variant="h3" >
                    {this.props.userInfo.firstName}
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

                {/* only show the following in tabs in search pages */}
                {this.displayTabs() &&
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab value="search" label= "Search" />
                  <Tab value="browse" label= "Browse" />
                </Tabs>
                }
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
    logout: ()=> dispatch(logout()),
    dispatch
});




export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(HeadNavigator)));