import axios from 'axios';
import cookie from 'react-cookies';
import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';


/**
 * This method used for gte personal Profile
 * Get method is implemented
 *
 * @param {Object} data: detail in profile ApI
 * @return {Object} 
 */
export function getProfile(){
    const configObj = {
        method: 'get'
    }
    return getDataFromServer(apiUrl.PROFILE, configObj);
}


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
    return getDataFromServer(apiUrl.UNIVERSITY, configObj);
}

/**
 * This method used for update education experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} 
 */
export function updateEducation(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    return getDataFromServer(apiUrl.UNIVERSITY, configObj);
}

/**
 * This method used for update education experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} 
 */
export function deleteEducation(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    return getDataFromServer(apiUrl.UNIVERSITY, configObj);
}


/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function addExperience(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.EXPERIENCE, configObj);
}

/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function updateExperience(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.EXPERIENCE, configObj);
}


/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function deleteExperience(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.EXPERIENCE, configObj);
}

/**
 * This method used for add publication
 * Post method is implemented
 *
 * @param {Object} data: detail in AddPublication ApI, request Body 
 * @return {Object} 
 */
export function addPublication(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.PUBlICATION, configObj);
}

/**
 * This method used for add publication
 * Post method is implemented
 *
 * @param {Object} data: detail in AddPublication ApI, request Body 
 * @return {Object} 
 */
export function updatePublication(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.PUBlICATION, configObj);
}

/**
 * This method used for add Award
 * Post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function addAward(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.AWARD, configObj);
}

/**
 * This method used for add Award
 * Post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function updateAward(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.AWARD, configObj);
}

/**
 * This method used for add Award
 * Post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function addOtherMaterial(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OTHERMATERIAL, configObj);
}


