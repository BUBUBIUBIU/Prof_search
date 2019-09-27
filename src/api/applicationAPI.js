/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:27th Sep 2019]
 */


import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';



/**
 * This method is to get Application list
 * GET method is implemented
 *
 * @param {Object}: empty
 * @return {Object} applications List
 */
export function GetApplicationList(){
    const configObj = {
        method: 'GET'
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.APPLICATIONS, configObj);
}


/**
 * This method is to accept an application
 * Post method is implemented
 *
 * @param {Object}: data : {"id":1}
 * @return {Object} successful message
 */
export function AcceptApplication(data){
    const configObj = {
        method: 'POST',
        data
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.ACCEPT_APPLICATION, configObj);
}


/**
 * This method is to accept an application
 * Post method is implemented
 *
 * @param {Object}: data : {"id":1}
 * @return {Object} successful message
 */
export function RejectApplication(data){
    const configObj = {
        method: 'POST',
        data
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.REJECT_APPLICATION, configObj);
}
