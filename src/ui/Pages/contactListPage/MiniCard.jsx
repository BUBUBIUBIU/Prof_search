//Dependencies
import React, { Component } from 'react';
import { Paper, withStyles,Avatar,Typography,Button, Checkbox, Divider} from '@material-ui/core';
import { prototype } from 'stack-utils';

//UI

const styles = theme => ({
    paper:{
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.common.white,
        borderRadius: "4px",
        boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)",
        // width:"100%"
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
        borderRadius:"13px"
    },
    header:{
        marginBottom:10
    }

});


class MiniCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickMessage = () =>{

    }

    handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
    };


    render(){
        const {classes,simpleprofile} = this.props
        return(
            <div style={{ width: "100%"}}>
                <div style={{display:"flex", width: "100%", alignItems:"flex-start"}}>
                    <Paper className={classes.paper} style={{ padding:25, flex:"auto"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <div style={{flex:"0 1 auto", maxWidth:200}}>
                                <Avatar className={classes.bigAvatar}>
                                    {simpleprofile.name[0]}
                                </Avatar>
                            </div>
                            <div style={{flex:"0 1 auto", padding: 30, marginRight:"auto"}}>
                                <Typography variant="h1">
                                    {simpleprofile.name}
                                </Typography>
                                <Typography variant="body1">
                                    <p style={{fontWeight:500}}> Student</p>
                                    {/* <p style={{fontWeight:300}}> Melbourne ,Victoria, Australia </p> */}
                                </Typography>
                                <Typography variant="body1">
                                    Faculty of Life science
                                </Typography>
                            </div>
                            {simpleprofile.status &&
                            <div style={{flex:"0 1 auto", padding: 30}}>
                                <Typography style={{fontWeight:300, fontSize: 17}}>
                                    Message Sent
                                </Typography>
                            </div>
                            }
                            {!simpleprofile.status &&
                            <div style={{flex:"0 1 auto", padding: 30}}>
                                <Button variant="outlined" color="primary" onClick={this.onClickMessage}>
                                    Message
                                </Button>
                            </div>}
                        </div>
                        { simpleprofile.status &&
                        <div>
                            <Divider style={{ boxShadow: "0 2px 4px 0 rgba(215, 215, 215, 0.5)"}} />
                            <div style={{display:"flex",  padding: 30}}>
                                <div style={{flex:"1 0 auto", marginRight:"auto",maxWidth:480}}>
                                    <Typography variant="subtitle1" style={{color: "#9b9b9b"}} paragraph={true}>
                                        Application Message
                                    </Typography>
                                    <Typography variant="subtitle1" style={{fontSize:17,fontWeight:300 }}>
                                        {simpleprofile.applicationMessage}
                                    </Typography>
                                </div>

                                <div style={{flex:"0 0 auto", maxWidth:280}}>
                                    <Typography variant="subtitle1" style={{color: "#4a4a4a", fontWeight:600}}>
                                        status: <span style={{fontWeight:300}}>{simpleprofile.status}</span>
                                    </Typography>
                                    {simpleprofile.status === "accept" &&
                                    <div>
                                        <Button variant="contained" color="primary" style={{marginRight:10, height:30, width:50}}>
                                            Accept
                                        </Button>
                                        <Button variant="outlined" color="primary" style={{height:30, width:50}}>
                                            Reject
                                        </Button>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        }
                    </Paper>

                    { !simpleprofile.status &&
                    <Paper className={classes.paper} style={{maxWidth:40,flex: "0 1 auto", }}>
                        <Checkbox color='primary' checked={this.state.checkedA} onChange={this.handleCheck('checkedA')}
                            value="checkedA" inputProps={{
                                'aria-label': 'primary checkbox',
                                }} style={{top:"40%"}} />
                    </Paper>
                    }
                </div>

            </div>
        )

    }
};



export default withStyles(styles)(MiniCard);