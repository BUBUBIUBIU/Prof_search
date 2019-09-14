//Dependencies
import React, { Component } from 'react';
import {withStyles,  Paper,InputBase,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    borderRadius: "4px",
    border:"solid 1px #cccccc",
    height:40,
    boxShadow: 'none'
  },
  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        const {classes} = this.props
        return (
            <Paper className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
            </IconButton>
        </Paper>
        )
    }
}

export default withStyles(styles)(SearchBox);
