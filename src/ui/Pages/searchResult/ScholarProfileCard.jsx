import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Typography,AppBar,Tabs,Tab, CardContent, Avatar, withStyles, CardHeader, Button, Divider } from '@material-ui/core';



// RouterDependencies
import { Redirect } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import {addToReduxContactList} from '../../../redux/actions/index'

//api
import {AddToContactList} from '../../../api/contactAPI'
import { throwStatement } from '@babel/types';

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

    },
    button:{
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


function TabContainer(props) {
    return (
    <Typography variant = "body1">
        {props.children}
    </Typography>
    ); 
}
  
class ScholarProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "researchInterests",
            toContactList: false

        };
    }

    componentDidMount(){

    }

    addToContectList = () =>{
        AddToContactList([this.props.profile.ID]).then(
            (resolve) => {
                this.props.addToReduxContactList(this.props.professor.ID)
            },
            (reject) =>{

            }
        )

    }

    viewProjectDetail = () =>{
        const destinationURL = "/expertProfile/" + this.props.profile.ID;
        this.setState({redirect:destinationURL})

    }


    handleTab = (event,value) => {
        this.setState({value});
    }
        // profile.publicationCount.toString() + 
        render(){ 
            if(this.state.toContactList){
                return <Redirect to ="/contactList"/>
            } 

            if(this.state.redirect){
                // let history = useHistory();
                return <Redirect push to = {this.state.redirect}/>
            }

            const {classes, profile} = this.props
            const {value} = this.state; 
            const publicationAndCount = profile.Publications? "publications(" + profile.Publications.length.toString()+ ")" : "publications(0)"
            const avatar = profile.FirstName.substring(0,1)

            let fullProfiles = profile.Biography;
            let currentContactList =  this.props.contactList
            let inConstactList = currentContactList.indexOf(this.props.profile.ID) !== -1
            let buttonColor =inConstactList? "secondary":"primary"
            return(
                <Card      classes={{
                    root: classes.card, // class name, e.g. `classes-nesting-root-x`
                  }}>
                    <CardHeader 
                        disableTypography = "true"
                        avatar={ 
                        <Avatar className={classes.bigAvatar} onClick = {this.viewProjectDetail}> {avatar} </Avatar>
                        }
                        action={
                        <Button color= {buttonColor} className ={classes.button} variant="outlined" onClick={this.addToContectList} disabled = {inConstactList}> 
                            {!inConstactList && "Add to list to contact"}
                            {inConstactList && "Already Added"}
                        </Button>
                        }

                        title = {
                            <div className={classes.header}>
                            <Typography variant = "h1" color="inherit">
                            {profile.FirstName + "  " +profile.LastName}
                            </Typography>
                            </div>
                        }
                        
                        subheader={ 
                            <Typography variant = "body1" color="inherit">
                            University of Melbourne
                            </Typography>
                        }

                        />
                        
                        <AppBar position="static" color="default" className={classes.cardAppBar}>
                            <Tabs variant="fullWidth" value={value} onChange={this.handleTab} indicatorColor="primary">
                                <Tab value="researchInterests" label="Research Interests" />
                                <Tab value="publications" label={publicationAndCount} />
                                <Tab value="projects" label="Projects" />
                                <Tab value="fullProfile" label="Full Profile" />
                            </Tabs>
                        </AppBar>
                        <Divider/>
                        <CardContent>


                        {value === "researchInterests" && 
                        <TabContainer>The scholar's research interests are currently not found in database </TabContainer>}
                        {value === "publications" &&
                        <TabContainer>The scholar's publications are currently not found in database </TabContainer>}
                        {value === "projects" && 
                        <TabContainer>The scholar's porjects are currently not found in database </TabContainer>}

                        {value === "fullProfile" && 
                        <TabContainer> The full profile are currently not in database </TabContainer>}


                        </CardContent>
                </Card>
            )
        }
        
        
    
}

const mapStateToProps = state => ({
    contactList: state.contactList,
    userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
    addToReduxContactList: (id)=> dispatch(addToReduxContactList(id)),
    dispatch
  });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ScholarProfileCard));