import React, { Component } from 'react'
import {withStyles, Typography, Paper, ListItem, Card, CardHeader, Avatar} from '@material-ui/core';


const styles = theme => ({
    card:{
        backgroundColor: theme.palette.background.card,
        width: "500px",
        height: "80px",
        padding:0,
        boxShadow: 'none',

    },
    smallAvatar: {
        margin: 10,
        width: 30,
        height: 30,
      },
      header:{
        marginBottom:10
      }

  });

class TinyCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

        render() { 
            const {classes} = this.props;
            const {simpleProfie} =  this.props;

            let position
            if (simpleProfie.position == "null"){
                position = "Academic"
            }else{
                position = simpleProfie.position 
            }
            
            const profileBriefInfo = simpleProfie.position + " | University of Melbourne "
            const avatar = simpleProfie.first_name.substring(0,1)
    
            return(
                <Card className={classes.card}>
                <CardHeader 
                    disableTypography = {true}
                    avatar={ 
                    <Avatar className={classes.bigAvatar}> {avatar} </Avatar>
                    }

                    title = {
                        <div className={classes.header}>
                        <Typography variant = "subtitle2" color="inherit">
                        {simpleProfie.first_name + "  " +simpleProfie.last_name}
                        </Typography>
                        </div>
                    }
                    subheader={
                        profileBriefInfo
                    }

                    />
            </Card>
    
            );
        }
    
    }
    
    export default withStyles(styles)(TinyCard);