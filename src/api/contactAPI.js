/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:21th Sep 2019]
 */




import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';

/**
 * This method add expert to contact list
 * Post method is implemented
 *
 * @param {Object} array: array of expert id
 * @return {Object} check Signup Api
 */
export function AddToContactList(array){
    const configObj = {
        method: 'POST',
        data: {
            'ExpertID':array
        }
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.CONTACTLIST, configObj);
}


/**
 * This method is to get contact list
 * GET method is implemented
 *
 * @param {Object} array
 * @return {Object} contactList
 */
export function GetContactList(){
    const configObj = {
        method: 'GET'
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.CONTACTLIST, configObj);

}

/**
 * This method is to get contact list
 * GET method is implemented
 *
 * @param {Object} data: {ExpertID:[], Message: string}
 * @return {Object} check Signup Api
 */
export function SendApplication(data){
    const configObj = {
        method: 'POST',
        data
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.APPLY, configObj);
}


/**
 * This method is to accept an application
 * Post method is implemented
 *
 * @param {Object}: data : {"id":1}
 * @return {Object} successful message
 */
export function AcceptOffer(data){
    const configObj = {
        method: 'POST',
        data
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.ACCEPT_OFFER, configObj);
}


/**
 * This method is to accept an application
 * Post method is implemented
 *
 * @param {Object}: data : {"id":1}
 * @return {Object} successful message
 */
export function RejectOffer(data){
    const configObj = {
        method: 'POST',
        data
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.REJECT_OFFER, configObj);
}