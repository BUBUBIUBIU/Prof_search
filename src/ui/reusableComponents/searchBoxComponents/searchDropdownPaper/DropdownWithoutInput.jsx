import React, { Component } from 'react'
import {withStyles, Typography, Paper} from '@material-ui/core';


const styles = theme => ({
    root:{
        paddingTop:17,
        paddingLeft:15,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        postion: "absolute",
        overflow: 'auto',
        height: "235px",
    },
    title1: {
        marginLeft:15,
        marginBottom: 8,
    },
    title2: {
      marginLeft: 15,
      marginBottom: 6,
    },
    title3: {
        marginLeft: 30,
        marginBottom: 4,
    },
    branch: {
        marginLeft: 40,
        marginBottom: 2,
    },
  });



class DropdownWithoutInput extends Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }

    render() { 
        const {classes} = this.props;
        return(
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h2" color="inherit" className={classes.title1}>
                    Research Area
                </Typography>
                <Typography variant="h4" color="inherit" className={classes.title2}>
                    Information Technology
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.title3}>
                    Computing
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    artificial intelligence
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    artificial intelligence
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                <Typography variant="caption" color="inherit" className={classes.branch}>
                    Data Mining
                </Typography>
                
            </Paper>

        );
    }

}

export default withStyles(styles)(DropdownWithoutInput);