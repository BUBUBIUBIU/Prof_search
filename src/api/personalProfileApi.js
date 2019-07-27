import axios from 'axios';
import cookie from 'react-cookies';
import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';

/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} check Signup Api
 */
export function addEducation(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    getDataFromServer(apiUrl.ADDUNIVERSITY, configObj)
        .then(function(data){
            alert("add experience successful") 
        },function(err){
            alert("User already exit") 
            console.log(err)
        })
}