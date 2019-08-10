import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Typography,FormattedMessage, AppBar,Tabs,Tab, List, ListItem,ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, CardContent, ListItemText, Avatar, withStyles, CardHeader, Button, Divider } from '@material-ui/core';

//import UI
import ListItems from "./ListItems";
import Publications  from './Publications'
// RouterDependencies
import { Redirect } from 'react-router-dom'


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
        console.log("card mount")
        console.log(this.props.profile)
    }

    directToContectList = () =>{
        this.setState({toContactList:true})
    }

    handleTab = (event,value) => {
        this.setState({value});
    }
        // profile.publicationCount.toString() + 
        render(){ 
            if(this.state.toContactList){
                return <Redirect to ="/contactList"/>
            } 

            const {classes, profile} = this.props
            // profile.Publications = []
            // profile.Organization ="fake"
            // profile.Position ="fake"
            // profile.SubjectArea.replace("\n", "<br/>");
            // profile.ResearchOverview = []
            // profile.ResearchOverview.replace("\n", "<br/>");
            const {value} = this.state; 
            const publicationAndCount = "publications(" + profile.Publications.length.toString()+ ")";
            const profileBriefInfo = profile.Organization + ", University of Melbourne" 
            const avatar = profile.FirstName.substring(0,1)

            let fullProfiles = profile.Biography;
            return(
                <Card      classes={{
                    root: classes.card, // class name, e.g. `classes-nesting-root-x`
                  }}>
                    <CardHeader 
                        disableTypography = "true"
                        avatar={ 
                        <Avatar className={classes.bigAvatar}> {avatar} </Avatar>
                        }
                        action={
                        <Button color="primary" className ={classes.button} variant="outlined" onClick={this.directToContectList}> 
                            Add to list to contact
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
                            {profile.Position} <br/>{profileBriefInfo} 
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

                        {value === "researchInterests" && profile.ResearchOverview == [] &&
                        <TabContainer>The scholar's research interests are currently not found in database </TabContainer>}

                        {value === "researchInterests" && profile.ResearchOverview != [] &&
                        <Typography variant = "body1"> {profile.ResearchOverview} </Typography>}

                        {value === "publications" && profile.Publications != undefined &&
                        <Publications items = {profile.Publications}/>}

                        {value === "publications" && profile.Publications == undefined &&
                        <TabContainer>The scholar's publications are currently not found in database </TabContainer>}

                        {value === "projects" && profile.SubjectArea == [] &&
                        <TabContainer>The scholar's porjects are currently not found in database </TabContainer>}

                        {value === "projects" && profile.SubjectArea != [] &&
                        <Typography variant = "body1">{profile.SubjectArea} </Typography>}

                        {value === "fullProfile" &&  profile.Biography == undefined && profile.Biography != "" && 
                        <TabContainer> The full profile are currently not in database </TabContainer>}

                        {value === "fullProfile" &&  profile.Biography != undefined && profile.Biography != "" &&
                        <Typography variant = "body1"><div dangerouslySetInnerHTML={{ __html: fullProfiles }} /> </Typography>}

                        </CardContent>
                </Card>
            )
        }
        
        
    
}

export default withStyles(styles)(ScholarProfileCard);