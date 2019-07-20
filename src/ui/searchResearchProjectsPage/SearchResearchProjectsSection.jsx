// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, NativeSelect, Typography, withStyles, InputBase,  FormControl,Collapse } from '@material-ui/core';
import { FormattedMessage, injectIntl, intlShape, FormattedRelative } from 'react-intl';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//UI component
import SearchByExpertiseBox from '../reusableComponents/searchBoxComponents/SearchByExpertiseBox.jsx';
import SearchLocationBox from '../reusableComponents/searchBoxComponents/SearchLocationBox.jsx';

//Redux Dependencies
import { connect } from 'react-redux'
import {recieveScholorInformation} from '../../redux/actions/index.js'

//API
import {searchExpert} from '../../api/api.js'


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
        height: "40px",
        width: "128px",
        padding: "0px 0 0px 11px",
        borderRadius: 4,
        border: '1px solid #ced4da',

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


class SearchResearchProjectsSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            expertExperties: '',
            profileList: [],
            openCollapese: false,
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
            this.setState({profileList: profiles});
            this.props.recieveScholorInformation(profiles) //this action listened by two reducer, for detail info, please see redux documentation
        }
    };


    render(){
        let profileListComponents;
        const {classes, intl} = this.props;
        const search_by_expertise = intl.formatMessage({id: 'SearchPhd_expertises'});
        const search_by_location = intl.formatMessage({id: 'SearchPhd_locations'});
        const graduate_Uni_placeholder = intl.formatMessage({id: 'SearchPhd_graduateUni'});
        
        if (this.state.profileList.length > 0) {
            // <ScholarProfileComponent profile="" />
            // TODO: add scholar profile components
        }

        return(
            <div className={classes.root}>
                <div className={classes.paperHeader}>
                    <Typography variant="body1" color="inherit">
                    <div style={{margin:"50px 0 5px 0"}}>
                        <FormattedMessage id="SearchResearch_header"
                            defaultMessage="Currently enrolled students search research projects in your school " />
                    </div>
                    </Typography>
                </div>


                <Typography variant="h3" color="inherit">
                    <p className={classes.inputLabel}>
                        <FormattedMessage id="SearchResearchProjects_MyScore"
                            defaultMessage="My score is" />
                    </p>
                </Typography>

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
                            className={classes.typeSelectBox} variant="standard">
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

                <SearchByExpertiseBox onChangeExpertExpertiseText = {this.onChangeExpertExpertiseText} label = "My ideal research projects in"/>
                <SearchLocationBox/>


                <div style={{marginTop:"20px"}}>
                <Button variant="contained" color="primary" onClick={this.handleOnclickSearch}  style = {{boxShadow: 'none',width:'169px',height:'52px'}}>
                    Search
                </Button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    recieveScholorInformation: scholarProfileList => dispatch(recieveScholorInformation(scholarProfileList)),
    dispatch
});

export default connect(null,mapDispatchToProps)(injectIntl(withStyles(styles)(SearchResearchProjectsSection)));