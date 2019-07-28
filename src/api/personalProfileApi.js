import axios from 'axios';
import cookie from 'react-cookies';
import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';

/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} 
 */
export function addEducation(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ADDUNIVERSITY, configObj);
}