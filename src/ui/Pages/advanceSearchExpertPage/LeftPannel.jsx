/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:26th March 2019]
 */

// Dependencies
import React, { Component } from 'react';
import { withStyles, InputBase,Typography,Paper, Button} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';

//redux Dependencies
import { connect } from 'react-redux' 
import {recieveScholorInformation} from '../../../redux/actions/index'

//API
import {searchExpert} from '../../../api/api.js'

//UI
import ScholarProfileFilter from '../../reusableComponents/scholarProfileFilter/ScholarProfileFilter'


const styles = theme => ({
    searchSectionPaper:{
        padding: "15px",
        backgroundColor:"#f2f6fa",
        height: 200,
        marginTop: "30px",
        width:"360px",
        borderRadius:'4px',
        boxShadow:"0 2px 4px 0 #d7d7d7",
    },checkBox:{
        padding: "0px"
    },
    label:{
        fontSize: '14px',
        fontFamily:'Montserrat',
    },
    inputLabel:{
        margin: "28px 0 6px 0",
        display: 'inline-block',
    },
    input:{
        padding: '9px 15px',
        // position: 'relative',
        borderRadius: 4,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        flex: 1,
        width: "90%"
    }, 
    searchBox:{
        backgroundColor: theme.palette.common.white,
        height: "40px",
        width: "95%",
        border:"solid 1px #cccccc",
        borderColor:"#fffff"

    },searchButton:{
        margin:"10px"
    }
    })

class LeftPannel extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:this.props.scholarProfileSearchInfo.searchText
        }; 
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleOnclickSearch = this.handleOnclickSearch.bind(this);
    }


    async handleOnclickSearch(){
        const request = this.state.searchText;
        const profiles = await searchExpert(request);
        if (profiles !== undefined && profiles !== []) {
            // this.setState({profileList: profiles});
            this.props.recieveScholorInformation(profiles)//this action listened by two reducer, for detail info, please see redux documentation
        }

    };

    handleSearchTextChange = event =>{
        this.setState({searchText:event.target.value})
    }



    render(){
        const {classes} = this.props;
        return(
                <div>
                <Paper className={classes.searchSectionPaper} elevation={0}>
                    <Typography variant="h1" color="inherit">
                    <div style ={{fontWeight:900,marginBottom:"5px"}}>
                        Search
                    </div>
                    </Typography>
                    {/* <Typography variant="h4" color="inherit">
                    <div style ={{fontWeight: 300,marginBottom:"5px"}}>
                        Total 0 results relavant
                    </div>
                    </Typography> */}
                    <p className={classes.inputLabel}>
                        <Typography variant="h3" color="inherit">
                            <FormattedMessage id="AdvancedSearchExperts_nameOrExpertise"
                                defaultMessage="Name or Expertise" />
                        </Typography>
                    </p>
                    <Paper className={classes.searchBox} elevation={0}>
                        <InputBase className={classes.input} value={this.state.searchText} onChange= {this.handleSearchTextChange} />
                    </Paper>

                    {/* <p className={classes.inputLabel}>
                        <Typography variant="h3" color="inherit" fontWeight={700}>
                            <FormattedMessage id="AdvancedSearchExperts_location" defaultMessage="Location" />
                        </Typography>
                    </p> */}
                    {/* <Paper className={classes.searchBox} elevation={0}>
                        <InputBase className={classes.input} value="University Of Melbourne" />
                    </Paper> */}

                    <p styles={{marginTop:"50px 0 0 0"}} >
                    <Button variant="contained" color="primary" size="small"  onClick={this.handleOnclickSearch} style = {{boxShadow: 'none'}}>
                            Search
                    </Button>
                    </p>
                </Paper>

            {/* <ScholarProfileFilter/> */}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    scholarProfileSearchInfo: state.scholarProfileSearchInfo
  })


const mapDispatchToProps = dispatch => ({
    recieveScholorInformation: (scholarProfileList) => dispatch(recieveScholorInformation(scholarProfileList)),
    dispatch
});




export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(LeftPannel)));   