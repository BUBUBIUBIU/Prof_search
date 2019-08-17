import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Typography,FormattedMessage, AppBar,Tabs,Tab, List, ListItem,ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, CardContent, ListItemText, Avatar, withStyles, CardHeader, Button, Divider } from '@material-ui/core';

//import UI
import ThirdHeader from "../../reusableComponents/ThirdHeader"
import login from "./LoginPage"
import signup from "./SignUpPage"

// RouterDependencies
import { Redirect } from 'react-router-dom'
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';



const styles = theme => ({
    pannel:{
        backgroundColor:"#F8FCFF",
        boxShadow: 'none',
        border:0,
        padding: 0,
        marginLeft:-2,
    },
    cardAppBar:{
        backgroundColor: theme.palette.background.card,
        flexGrow: 1,
        // shadows: 0,
        boxShadow:'none',
    }, 
    card:{
        backgroundColor: theme.palette.background.card,
        width: "100%",
        padding:10,
        borderRadius: 5,

    },button:{
        textTransform: 'none',
        marginTop: "10",
        fontSize: 12,
        fontFamily:'Montserrat',
        padding: '6px 12px',
    },
    bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
      },
      header:{
        marginBottom:10
      }

  });
  
class AuthSinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.authValue,
        };
        // this.handleTab = this.handleTab.bind(this);
    }
       
        handleTab = (event,value) => {
            this.setState({value});

        }

        render(){ 
           
            const {value} = this.state; 
            const {classes} = this.props;
            return(
                <div>
                <ThirdHeader/>
                     <Card      classes={{
                        root: classes.card, // class name, e.g. `classes-nesting-root-x`
                      }}style={{width:"50%",marginLeft:"300px"}}>
                        
                            <AppBar position="static" color="default" className={classes.cardAppBar}>
                            <Tabs variant="fullWidth" value={value} onChange={this.handleTab} indicatorColor="primary">
                                <Tab value="login" label="login" />
                                <Tab value="signup" label="sign up" />
                            </Tabs>
                            </AppBar>
                            <Divider/>
                            <CardContent>
    
                            {value === "login" &&
                            <LoginPage/>}
    
                            {value === "signup" &&
                            <SignUpPage/>}

    
                            </CardContent>
                    </Card>   
                </div>
            )
        }
        
        
    
}

export default withStyles(styles)(AuthSinglePage);