// Dependencies
import React, { Component } from 'react';
import { withStyles, InputBase,Typography,Paper, FormGroup, FormControlLabel, Checkbox, Button,Grid} from '@material-ui/core';
import { FormattedMessage, injectIntl} from 'react-intl';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

//redux Dependencies
import { connect } from 'react-redux' 
import {recieveScholorInformation,setScholarProfileVisibility, setSearchInfo} from '../../../redux/actions/index'



const styles = theme => ({
    checkBox:{
        padding: "5px 5px 5px 15px"
    },
    label:{
        fontSize: '14px',
        fontFamily:'Montserrat',
    },
    filterSectionPaper:{
        padding: "15px",
        backgroundColor:theme.palette.common.white,
        marginTop: "30px",
        width:"360px",
        borderRadius:"4px",
        border:"solid 1px rgba(0,0,0,0.14)"
    },


    })

class ScholarProfileFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            professor: this.props.scholarProfileListVisibility.professorVisibility,
            assProfessor: this.props.scholarProfileListVisibility.associateProfessorVisibility,
            doctor: this.props.scholarProfileListVisibility.doctorVisibility,
            australia: true,
            china:true,
            usa:true,
            unimelb:true,
        }; 
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
                
                <Paper className={classes.filterSectionPaper} elevation={0}>
                    <div>
                        <Typography variant="h1" color="inherit">
                        <div style ={{fontWeight:900, marginBottom:'4px'}}>
                            Filters
                        </div>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h3" color="inherit">
                        <div style ={{fontWeight:600, marginBottom:'5px'}} >
                            Countries
                        </div>
                        </Typography>

                        <FormGroup>
                            <FormControlLabel
                            control={ <Checkbox 
                                    checked={this.state.australia} 
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    onChange = {this.handleChange('australia')}
                                    value="checkedB"
                                    color="primary" 
                                    classes={{
                                        root:classes.checkBox
                                    }}
                                    />
                            }
                            label="Australia"
                            classes={{
                                label:classes.label
                            }}
                            />
                        </FormGroup>
                    </div>



                    <div>
                        <Typography variant="h3" color="inherit">
                        <div style ={{fontWeight:600,margin:'15px 0 5px 0 '}}>
                            Universities
                        </div>
                        </Typography>
                        <FormGroup>
                        <FormControlLabel
                            control={ <Checkbox 
                                    checked={this.state.australia} 
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    onChange = {this.handleChange('University of Melbourne')}
                                    value="checkedB"
                                    color="primary" 
                                    classes={{
                                        root:classes.checkBox
                                    }}
                                    />
                            }
                            label="University of Melbourne"
                            classes={{
                                label:classes.label
                            }}
                            />
                        </FormGroup>
                    </div>


    
                    <div>
                        <Typography variant="h3" color="inherit">
                        <div style ={{fontWeight:600, margin:'15px 0 5px 0 '}}>
                            Position
                        </div>
                        </Typography>
                        <FormGroup>
                        <FormControlLabel
                            control={ <Checkbox 
                                    checked={this.state.professor} 
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    onChange = {this.handleChange('professor')}
                                    value="professor"
                                    color="primary" 
                                    classes={{
                                        root:classes.checkBox
                                    }}
                                    />
                            }
                            label="Professor"
                            classes={{
                                label:classes.label
                            }}
                        />

                            <FormControlLabel
                            control={ <Checkbox 
                                    checked={this.state.assProfessor} 
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    onChange = {this.handleChange('assProfessor')}
                                    value="assProfessor"
                                    color="primary" 
                                    classes={{
                                        root:classes.checkBox
                                    }}
                                    />
                            }
                            label="Associate Professor"
                            classes={{
                                label:classes.label
                            }}
                            />


                            <FormControlLabel
                            control={ <Checkbox 
                                    checked={this.state.doctor} 
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    onChange = {this.handleChange('doctor')}
                                    value="doctor"
                                    color="primary" 
                                    classes={{
                                        root:classes.checkBox
                                    }}
                                    />
                            }
                            label="Doctor"
                            classes={{
                                label:classes.label
                            }}
                            />
                        </FormGroup>
                        
                    </div>
                </Paper>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    scholarProfileListVisibility: state.scholarProfileListVisibility,
  })


const mapDispatchToProps = dispatch => ({
    setScholarProfileVisibility: filter => dispatch(setScholarProfileVisibility(filter)),
    dispatch
});


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(ScholarProfileFilter)));  