//Dependencies
import React, { Component } from 'react';
import { Grid,Card,CardHeader,Button,withStyles,Avatar,Typography} from '@material-ui/core';

//UI

const styles = theme => ({
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
        borderRadius:"13px"
      },
      header:{
        marginBottom:10
      }

  });


class MiniCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        const {classes} = this.props
        return(
            <div>
                <Card      classes={{
                    root: classes.card, // class name, e.g. `classes-nesting-root-x`
                  }}>
                    <CardHeader 
                        avatar={ 
                        <Avatar className={classes.bigAvatar}> {this.props.simpleprofile.name[0]} </Avatar>
                        }
                        action={
                        <Button color="primary" className ={classes.button} variant="outlined"> 
                            Message
                        </Button>
                        }

                        title = {
                            <div className={classes.header}>
                            <Typography variant = "h1" color="inherit">
                            {this.props.simpleprofile.name}
                            </Typography>
                            </div>
                        }
                        subheader={ 
                            <Typography variant = "body1" color="inherit">
                            {this.props.simpleprofile.title}<br/>{this.props.simpleprofile.faculty} , {this.props.simpleprofile.University}
                            </Typography>
                        }

                        />
                </Card>
            </div>
        )

    }
};

export default withStyles(styles)(MiniCard);