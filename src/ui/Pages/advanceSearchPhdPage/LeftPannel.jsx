// Dependencies
import React, { Component } from 'react';
import { withStyles, InputBase,Typography,Paper, Button,FormGroup, FormControlLabel,FormControl, Checkbox, NativeSelect} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

//redux Dependencies
import { connect } from 'react-redux' 
import {recieveScholorInformation} from '../../../redux/actions/index'

//UI
import ScholarProfileFilter from '../../reusableComponents/scholarProfileFilter/ScholarProfileFilter'

//API
import {searchExpert} from '../../../api/api.js'

const styles = theme => ({
    searchSectionPaper:{
        padding: "15px",
        backgroundColor:"#f2f6fa",
        marginTop: "30px",
        width:"360px",
        borderRadius:'4px',
        boxShadow:"0 2px 4px 0 #d7d7d7",
    },
    checkBox:{
        padding: "0px"
    },
    label:{
        fontSize: '14px',
        fontFamily:'Montserrat',
    },
    filterSectionPaper:{
        padding: "15px",
        backgroundColor:"#F8FCFF",
        marginTop: "30px",
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
    },
    inputBoxroot:{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.common.white,
        height: "40px",
        padding: "0 5px 0 11px",
        borderRadius: 4,
        border: '1px solid #ced4da',
    },
    scoreBox:{
        width: "128px",
    },
    inlineWord:{
        // margin: "18px 0 5px 0",
        verticalAlign: "middle",
        textAlign: "center", 
        paddingTop:"15px"

    },typeSelectBox:{
        backgroundColor: theme.palette.common.white,
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #ced4da',

    },universityBox:{
        width: "333px",
    },
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
        const configObj ={
            method: 'GET',
            params: {
                q:request}
        }
        const profiles = await searchExpert(configObj);
        if (profiles != undefined && profiles != []) {
            // this.setState({profileList: profiles});
            this.props.recieveScholorInformation(profiles)//this action listened by two reducer, for detail info, please see redux documentation
        }

    };
    handleSearchTextChange = event =>{
        this.setState({searchText:event.target.value})
    }



    handleChange = name => event => {
        // since setState is asynchronised, we should dispath redux action after
        // state be set,
        this.setState({ [name]: event.target.checked}, () => {
            this.props.setScholarProfileVisibility({
            professorVisibility:this.state.professor,
            associateProfessorVisibility:this.state.assProfessor,
            doctorVisibility:this.state.doctor })},
            console.log(this.props.scholarProfileListVisibility.associateProfessorVisibility));

      };



    render(){
        const {classes} = this.props;
        return(
            <div>
            <div>
                <Paper className={classes.searchSectionPaper}>
                    <Typography variant="h1" color="inherit" >
                    <div style={{fontWeight:1000,margin:"10px 0 10px 0"}}>
                        Search
                    </div>
                    </Typography>
                    <Typography variant="h3" color="inherit" >
                        Total 50 results relavant
                    </Typography>
                    <Typography variant="h3" color="inherit">
                    <p className={classes.inputLabel}>
                        <FormattedMessage id="SearchPhd_bachelorDegree"
                            defaultMessage="My score is" />
                    </p>
                    </Typography>


                    <FormControl style={{marginRight:"15px"}}>
                        <InputBase placeholder="3.9" classes={{
                    root: classes.inputBoxroot,
                    input: classes.scoreBox,
                    }} />
                    </FormControl>

                    {/* <span className={classes.inlineWord}> */}
                        <Typography variant="h3" color="inherit" inline>
                            <span className={classes.inlineWord}>
                                in
                            </span>
                        </Typography>
                        {/* </span> */}

                    {/* select box */}
                    <FormControl style={{margin:"0 15px 0 15px"}}>
                        <NativeSelect value={this.state.age} onChange={this.handleChange}
                            className={classes.typeSelectBox} >
                            <option value="" />
                            <option value={10}>
                                GPA
                            </option>
                            <option value={20}>
                                WAM
                            </option>
                            <option value={30}>
                                Percentage
                            </option>
                        </NativeSelect>
                    </FormControl>

                    <Typography variant="h3" color="inherit">
                    <div className={classes.inputLabel}>
                        <FormattedMessage id="advanced_left_pannel"
                            defaultMessage="Study in" />
                    </div>
                    </Typography>
                    <FormControl style={{margin:"0 15px 0 0"}}>
                                        <InputBase placeholder="University Name" classes={{
                                        root: classes.inputBoxroot,
                                        input: classes.universityBox,
                                        }} 
                                        value = "University of Melbourne"/>
                    </FormControl>


                    <p className={classes.inputLabel}>
                        <Typography variant="h3" color="inherit">
                            <FormattedMessage id="phd_leftpannel_name"
                                defaultMessage="Research Area" />
                        </Typography>
                    </p>
                    <Paper className={classes.searchBox} elevation={0}>
                        <InputBase className={classes.input} value ={this.state.searchText} onChange= {this.handleSearchTextChange}/>
                    </Paper>

                    <p className={classes.inputLabel}>
                        <Typography variant="h3" color="inherit" fontWeight={700}>
                            <FormattedMessage id="AdvancedSearchExperts_location" defaultMessage="Location" />
                        </Typography>
                    </p>
                    <Paper className={classes.searchBox} elevation={0}>
                        <InputBase className={classes.input} value ="University Of Melbourne"/>
                    </Paper>
                    <p styles={{marginTop:"20px 0 0 0"}}>
                    <Button variant="contained" color="primary" size="small"  onClick={this.handleOnclickSearch} style = {{boxShadow: 'none'}}>
                            Search
                    </Button>
                    </p>
                </Paper>
            </div>
            <div>
            <ScholarProfileFilter/>
            </div>
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