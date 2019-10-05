import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';


/**
 * This method used for ger other expert profile
 * Get method is implemented
 *
 * @param {Object} data: detail in profile ApI
 * @return {Object} 
 */
export function GetExpertProfile(expertID){
    const configObj = {
        method: 'get'
    }
    const url = apiUrl.GET_EXPERT_PROFILE + '/' + expertID
    return getDataFromServer(url, configObj);
}

/**
 * This method used for get other student profile
 * Get method is implemented
 *
 * @param {Object} data: detail in profile ApI
 * @return {Object} 
 */
export function GetStudentProfile(studentID){
    const configObj = {
        method: 'get'
    }
    const url = apiUrl.GET_STUDENT_PROFILE + '/' + studentID
    return getDataFromServer(url, configObj);
}

