import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button,Tabs,Tab, withStyles,withTheme, spacing, Menu, ClickAwayListener, MenuItem, Paper} from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import PropTypes from 'prop-types';

//UI
import SignUpPage from '../signUp/SignUpPage'
import LoginPage from '../Login/LoginPage'

//redux Dependencies
import { connect } from 'react-redux'
import {backToHomePage,changeLanguage} from '../../redux/actions/index.js'

// RouterDependencies
import { Redirect } from 'react-router-dom'



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
    margin:0
  }
});


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class HeadNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.tabValue,
            anchorEl: null,
            toAnotherPage:"",
            openSignUpModal: false,
            openLoginModal: false           
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
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    signUp =() =>{
      this.setState({openSignUpModal:true})
    }

    signUpClose = () => {
      this.setState({openSignUpModal:false})
    }

    login = () =>{
      this.setState({openLoginModal:true})
    }

    loginClose = () => {
      this.setState({openLoginModal:false})
    }

    render() {
        if(this.state.toAnotherPage == "SearchExpert"){
            return <Redirect to ="/SearchExpert"/>
        }
        if(this.state.toAnotherPage == "SearchPhd"){
            return <Redirect to ="/SearchPhdPosition"/>
        }
        if(this.state.toAnotherPage == "SearchResearchProjects"){
            return <Redirect to ="/SearchResearchProjects"/>
        }
  

        const {value, anchorEl} = this.state;
        const {classes, theme, intl} = this.props;
        const searchExperts = intl.formatMessage({id: 'navigator_search_experts'});
        const search_phd = intl.formatMessage({id: 'navigator_search_phd'});
        const search_projects = intl.formatMessage({id: 'navigator_search_projects'});
        
        return (
          <div>
              <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="h4" color="inherit" className={classes.grow}>
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
                  <Button variant="outlined" color="secondary" className={classes.button} size="small">
                  {this.props.userInfo.name}
                  </Button>}

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
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab value="SearchExpert" label={searchExperts} />
                  <Tab value="SearchPhd" label={search_phd}  />
                  <Tab value="SearchResearchProjects" label={search_projects}  />
                </Tabs>
              </AppBar>
              <SignUpPage open ={this.state.openSignUpModal} close = {this.signUpClose}/>
              <LoginPage open = {this.state.openLoginModal} close = {this.loginClose}/>
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
    dispatch
});




export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(HeadNavigator)));