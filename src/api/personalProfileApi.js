import axios from 'axios';
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
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.PROFILE, configObj);
}


/**
 * This method used for gte personal Profile
 * Get method is implemented
 *
 * @param {Object} data: detail in profile ApI
 * @return {Object} 
 */
export function UploadAvatar(data){
    const configObj = {
        method: 'POST',
        data,
    }
    return getDataFromServer(apiUrl.AVATAR, configObj);
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
 * This method used for update publication
 * Post method is implemented
 *
 * @param {Object} data: detail in UpdatePublication ApI, request Body 
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
 * This method used for deleting publication
 * Post method is implemented
 *
 * @param {Object} data: detail in deletePublication ApI, request Body 
 * @return {Object} 
 */
export function deletePublication(data){
    const configObj = {
        method: 'DELETE',
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
 * This method used for delete Award
 * Post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function deleteAward(data){
    const configObj = {
        method: 'DELETE',
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


/**
 * This method used for update other material
 * Put method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function updateOtherMaterial(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OTHERMATERIAL, configObj);
}

/**
 * This method used for delte other material
 * Delete method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function deleteOtherMaterial(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OTHERMATERIAL, configObj);
}

/**
 * This method used for add research interest
 * Post method is implemented
 *
 * @param {Object} data: detail in addResearchInterest ApI, request Body 
 * @return {Object} 
 */
export function addResearchInterest(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchInterest, configObj);
}

/**
 * This method used for update research interest
 * Post method is implemented
 *
 * @param {Object} data: detail in UPdateResearchInterest ApI, request Body 
 * @return {Object} 
 */
export function updateResearchInterest(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchInterest, configObj);
}

/**
 * This method used for delte other material
 * Delete method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function deleteResearchInterest(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchInterest, configObj);
}

/**
 * This method used for add research grant
 * Post method is implemented
 *
 * @param {Object} data: detail in AddResearchGrant ApI, request Body 
 * @return {Object} 
 */
export function addResearchGrant(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchGrant, configObj);
}

/**
 * This method used for update research grant
 * Post method is implemented
 *
 * @param {Object} data: detail in UpdateResearchGrant ApI, request Body 
 * @return {Object} 
 */
export function updateResearchGrant(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchGrant, configObj);
}

/**
 * This method used for delte research grant
 * Delete method is implemented
 *
 * @param {Object} data: detail in AddResearchGrant ApI, request Body 
 * @return {Object} 
 */
export function deleteResearchGrant(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.ResearchGrant, configObj);
}

/**
 * This method used for add ongoing project
 * Post method is implemented
 *
 * @param {Object} data: detail in addOngoingProject ApI, request Body 
 * @return {Object} 
 */
export function addOngoingProject(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OngoingProject, configObj);
}

/**
 * This method used for update ongoing project
 * Post method is implemented
 *
 * @param {Object} data: detail in UpdateOngoingProject ApI, request Body 
 * @return {Object} 
 */
export function updateOngoingProject(data){
    const configObj = {
        method: 'Put',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OngoingProject, configObj);
}

/**
 * This method used for delete ongoing project
 * Delete method is implemented
 *
 * @param {Object} data: detail in delete ongoing project ApI, request Body 
 * @return {Object} 
 */
export function deleteOngoingProject(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.OngoingProject, configObj);
}

/**
 * This method used for add available position
 * Post method is implemented
 *
 * @param {Object} data: detail in addAvailablePosition ApI, request Body 
 * @return {Object} 
 */
export function addAvailablePosition(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.AvailablePosition, configObj);
}

/**
 * This method used for update AvailablePosition
 * Delete method is implemented
 *
 * @param {Object} data: detail in update AvailablePosition ApI, request Body 
 * @return {Object} 
 */
export function updateAvailablePosition(data){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.AvailablePosition, configObj);
}

/**
 * This method used for delete AvailablePosition
 * Delete method is implemented
 *
 * @param {Object} data: detail in delete AvailablePosition ApI, request Body 
 * @return {Object} 
 */
export function deleteAvailablePosition(data){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.AvailablePosition, configObj);
}

/**
 * This method used for uploading CV
 * post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function uploadCV(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.CV, configObj);
}


/**
 * This method used for uploading CV
 * post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function deleteCV(){
    const configObj = {
        method: 'DELETE',
    }
    return getDataFromServer(apiUrl.CV, configObj);
}




