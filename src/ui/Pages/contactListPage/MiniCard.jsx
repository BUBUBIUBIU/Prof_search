//Dependencies
import React, { Component } from 'react';
import { Paper, withStyles,Avatar,Typography,Button, Checkbox} from '@material-ui/core';
import { prototype } from 'stack-utils';

//UI

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        width:"100%"
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

    onClickMessage = () =>{
        
    }

    handleCheck = name => event => {
        this.setState({ [name]: event.target.checked });
      };


    render(){
        const {classes} = this.props
        return(
            <div style = {{display:"flex", width: "100%"}}> 
            <Paper className = {classes.paper} style = {{ padding:25, flex:"auto"}}>
                <div style = {{display:"flex", alignItems:"center"}}>
                    <div style= {{flex:"0 1 auto", maxWidth:200}}>
                        <Avatar  className={classes.bigAvatar} src = {"http://" + this.state.Avatar}/>
                    </div>
                    <div  style= {{flex:"0 1 auto", padding: 30, marginRight:"auto"}}>
                        <Typography variant="h1">
                            Chenyang {" "} Lu
                        </Typography>
                        <Typography variant="body1">
                            <p style={{fontWeight:500}}> Student</p>
                            {/* <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p> */}
                        </Typography>
                        <Typography variant="body1">
                            Faculty of Life science
                        </Typography>
                    </div> 
                    <div  style= {{flex:"0 1 auto", padding: 30}}>
                        <Button  variant="outlined" color="primary" onClick = {this.onClickMessage}>
                            Message
                        </Button>
                    </div> 
                </div>
            </Paper>

            <Paper className = {classes.paper} style ={{maxWidth:40,flex: "0 1 auto" }} >
                <Checkbox
                    color = 'primary'
                    checked={this.state.checkedA}
                    onChange={this.handleCheck('checkedA')}
                    value="checkedA"
                    inputProps={{
                    'aria-label': 'primary checkbox',
                    }}
                    style = {{position:"absolute", top:"40%"}}
                />
            </Paper>
            </div> 
        )

    }
};



export default withStyles(styles)(MiniCard);