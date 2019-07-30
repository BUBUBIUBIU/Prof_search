// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, NativeSelect, Typography, withStyles, InputBase,  FormControl,Collapse } from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//Router dependencies
import { Redirect } from 'react-router'

//Redux Dependencies  
import { connect } from 'react-redux'
import {recieveScholorInformation,setScholarProfileVisibility, setSearchInfo} from '../../../redux/actions/index.js'


//UI component
import SearchByExpertiseBox from '../../reusableComponents/searchBoxComponents/SearchByExpertiseBox';
import SearchLocationBox from '../../reusableComponents/searchBoxComponents/SearchLocationBox';

//API
import {searchExpert} from '../../../api/api.js'


const styles = theme =>({
    root:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom: 20,
        background:"#F8FCFF",
        margin:0,
    },inputBoxroot:{
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
    },universityBox:{
        width: "333px",
    },
    typeSelectBox:{
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #cccccc',

    },
    inputLabel:{
        margin: "28px 0 6px 0",
        display: 'inline-block',
    }, inlineWord:{
        // margin: "18px 0 5px 0",
        verticalAlign: "middle",
        textAlign: "center", 
        paddingTop:"15px"

    },
    // How to solve inline block alignment problem: https://www.cnblogs.com/jiangzilong/p/6145157.html
    icon: {
        paddingLeft: "3px",
        verticalAlign: "middle",
        // fontSize: 32,
      },


});


class SearchPhDSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            expertExperties: '',
            profileList: [],
            openCollapese: false,
            redirectToAdvancedPage:false,
        };
        this.handleOnclickSearch = this.handleOnclickSearch.bind(this);
        this.onChangeExpertExpertiseText = this.onChangeExpertExpertiseText.bind(this);
    };

    onChangeExpertExpertiseText(text) {
        this.setState({expertExperties: text});
    } 

    handleCollapseClick = ()=> {
        if(this.state.openCollapese == true)
        this.setState({openCollapese: false});
        else
        this.setState({openCollapese: true});
    }

    async handleOnclickSearch() {
        const request = this.state.expertExperties;

        const configObj ={
            method: 'GET',
            params: {
                q:request}
        }
        const profiles = await searchExpert(configObj);

        if (profiles != undefined && profiles != []) {
            // this.setState({profileList: profiles});
            console.log(profiles)
            this.props.recieveScholorInformation(profiles)//this action listened by two reducer, for detail info, please see redux documentation
            this.props.setSearchInfo({
                searchText:this.state.expertExperties,
                location:"University of Melbourne",
                score:"3.9",
                scoreIn:"WAM",
                graduateUniversity:"University of Melbourne"
            })
            this.setState({redirectToAdvancedPage: true})
        }

    };


    render(){
        let profileListComponents;
        const {classes, intl} = this.props;
        const search_by_expertise = intl.formatMessage({id: 'SearchPhd_expertises'});
        const search_by_location = intl.formatMessage({id: 'SearchPhd_locations'});
        const graduate_Uni_placeholder = intl.formatMessage({id: 'SearchPhd_graduateUni'});
        
        if(this.state.redirectToAdvancedPage){
            return <Redirect to ="/SearchPhdPosition/advancedSearchPhd"/>
        }

        return(
            <div className={classes.root}>
                <div className={classes.paperHeader}>
                    <Typography variant="body1" color="inherit">
                    <div style={{margin:"50px 0 5px 0"}}>
                        <FormattedMessage id="SearchPhd_header"
                            defaultMessage="Search global Ph.D positions by research area and locations" />
                    </div>
                    </Typography>
                </div>


                <Typography variant="h3" color="inherit">
                    <p className={classes.inputLabel}>
                        <FormattedMessage id="SearchPhd_bachelorDegree"
                            defaultMessage="In my bachelor degree, my score is" />
                    </p>
                </Typography>

                <div>
                    <div style={{width:"850px"}}>
                        {/* score box */}
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
                                className={classes.typeSelectBox} variant="outlined" native>
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


                        <Typography variant="h3" color="inherit" inline>
                            <span className={classes.inlineWord}>
                                From
                            </span>
                        </Typography>


                        {/* University box */}
                        <FormControl style={{margin:"0 15px 0 15px",wdith:"333px"}}>
                            <InputBase placeholder="University Name" classes={{
                        root: classes.inputBoxroot,
                        input: classes.universityBox,
                        }} />
                        </FormControl>
                    </div>


                    {/* Collapse section */}
                    <div>
                        <Typography variant="h3" color="primary"  component="div">
                            <div onClick={this.handleCollapseClick} style = {{margin: "18px 0 -5px 0"}}>
                                <span className={classes.collapse}>
                                    Add a Master Degree
                                </span>
                                {!this.state.openCollapese &&
                                <ArrowRightIcon className={classes.icon} />}
                                {this.state.openCollapese &&
                                <ArrowDropDownIcon className={classes.icon} />}
                            </div>
                        </Typography>

                        <Collapse in={this.state.openCollapese} timeout="auto" unmountOnExit
                            style={{margin: "0"}}>
                            
                            <div style={{width:"850px"}}>
                                <Typography variant="h3" color="inherit">
                                    <p className={classes.inputLabel}>
                                        <FormattedMessage id="SearchPhd_bachelorDegree"
                                            defaultMessage="In my Master degree, my score is" />
                                    </p>
                                </Typography>

                                
                                    {/* score box */}
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
                                            className={classes.typeSelectBox} variant="filled">
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


                                    <Typography variant="h3" color="inherit" inline>
                                        <span className={classes.inlineWord}>
                                            From
                                        </span>
                                    </Typography>


                                    {/* University box */}
                                    <FormControl style={{margin:"0 15px 0 15px"}}>
                                        <InputBase placeholder="University Name" classes={{
                                        root: classes.inputBoxroot,
                                        input: classes.universityBox,
                                        }} />
                                    </FormControl>

                                </div>
                        </Collapse>
                    </div>
                </div>

                <SearchByExpertiseBox 
                    onChangeExpertExpertiseText = {this.onChangeExpertExpertiseText} 
                    label = "My ideal research projects in"
                    expertise ={true}
                    />
                <SearchLocationBox/>


                <div style={{marginTop:"20px"}}>
                <Button variant="contained" color="primary" onClick={this.handleOnclickSearch} style = {{boxShadow: 'none',width:'169px',height:'52px'}}>
                    Search
                </Button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    recieveScholorInformation: (scholarProfileList) => dispatch(recieveScholorInformation(scholarProfileList)),
    setScholarProfileVisibility: filter => dispatch(setScholarProfileVisibility(filter)),
    setSearchInfo: searchInfo => dispatch(setSearchInfo(searchInfo)),
    dispatch
});

export default connect(null,mapDispatchToProps)(injectIntl(withStyles(styles)(SearchPhDSection)));