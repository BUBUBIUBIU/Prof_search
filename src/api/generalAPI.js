/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:10th Oct 2019]
 */



/*
* @description This the api file for get other students and other experts profile
*/


import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';


/**
 * This method used for get other expert profile
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

