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
export function addEducation(data, identity){
    const configObj = {
        method: 'POST',
        data,
    }
    let UNIVERSITY = apiUrl.UNIVERSITY;
    if( identity === 'expert' ){
        UNIVERSITY = apiUrl.EXPERT_UNIVERSITY;
    }
    return getDataFromServer(UNIVERSITY, configObj);
}

/**
 * This method used for update education experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} 
 */
export function updateEducation(data, identity){
    const configObj = {
        method: 'PUT',
        data,
    }
    let UNIVERSITY = apiUrl.UNIVERSITY;
    if( identity === 'expert' ){
        UNIVERSITY = apiUrl.EXPERT_UNIVERSITY;
    }
    return getDataFromServer(UNIVERSITY, configObj);
}

/**
 * This method used for update education experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddUniversity ApI, request Body 
 * @return {Object} 
 */
export function deleteEducation(data, identity){
    const configObj = {
        method: 'DELETE',
        data,
    }
    let UNIVERSITY = apiUrl.UNIVERSITY;
    if( identity === 'expert' ){
        UNIVERSITY = apiUrl.EXPERT_UNIVERSITY;
    }
    return getDataFromServer(UNIVERSITY, configObj);
}


/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function addExperience(data, identity){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    let EXPERIENCE = apiUrl.EXPERIENCE;
    if( identity === 'expert' ){
        EXPERIENCE = apiUrl.EXPERT_EXPERIENCE;
    }
    return getDataFromServer(EXPERIENCE, configObj);
}

/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function updateExperience(data, identity){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    let EXPERIENCE = apiUrl.EXPERIENCE;
    if( identity === 'expert' ){
        EXPERIENCE = apiUrl.EXPERT_EXPERIENCE;
    }
    return getDataFromServer(EXPERIENCE, configObj);
}


/**
 * This method used for add experience
 * Post method is implemented
 *
 * @param {Object} data: detail in AddExperience ApI, request Body 
 * @return {Object} 
 */
export function deleteExperience(data, identity){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    let EXPERIENCE = apiUrl.EXPERIENCE;
    if( identity === 'expert' ){
        EXPERIENCE = apiUrl.EXPERT_EXPERIENCE;
    }
    return getDataFromServer(EXPERIENCE, configObj);
}

/**
 * This method used for add publication
 * Post method is implemented
 *
 * @param {Object} data: detail in AddPublication ApI, request Body 
 * @return {Object} 
 */
export function addPublication(data, identity){
    const configObj = {
        method: 'POST',
        data,
    }
    // console.log('the data in final step:', data);
    let PUBlICATION = apiUrl.PUBlICATION;
    if( identity === 'expert' ){
        PUBlICATION = apiUrl.EXPERT_PUBlICATION;
    }
    return getDataFromServer(PUBlICATION, configObj);
}

/**
 * This method used for update publication
 * Post method is implemented
 *
 * @param {Object} data: detail in UpdatePublication ApI, request Body 
 * @return {Object} 
 */
export function updatePublication(data, identity){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    console.log('identity in final step:', identity);
    let PUBlICATION = apiUrl.PUBlICATION;
    if( identity === 'expert' ){
        PUBlICATION = apiUrl.EXPERT_PUBlICATION;
    }
    return getDataFromServer(PUBlICATION, configObj);
}

/**
 * This method used for deleting publication
 * Post method is implemented
 *
 * @param {Object} data: detail in deletePublication ApI, request Body 
 * @return {Object} 
 */
export function deletePublication(data, identity){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    let PUBlICATION = apiUrl.PUBlICATION;
    if( identity === 'expert' ){
        PUBlICATION = apiUrl.EXPERT_PUBlICATION;
    }
    return getDataFromServer(PUBlICATION, configObj);
}

/**
 * This method used for add Award
 * Post method is implemented
 *
 * @param {Object} data: detail in AddAward ApI, request Body 
 * @return {Object} 
 */
export function addAward(data, identity){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log('this is upload award step in api file: ', identity);
    let AWARD = apiUrl.AWARD;
    if( identity === 'expert' ){
        AWARD = apiUrl.EXPERT_AWARD;
    }
    return getDataFromServer(AWARD, configObj);
}

/**
 * This method used for update Award
 * Post method is implemented
 *
 * @param {Object} data: detail in update Award ApI, request Body 
 * @return {Object} 
 */
export function updateAward(data, identity){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    let AWARD = apiUrl.AWARD;
    if( identity === 'expert' ){
        AWARD = apiUrl.EXPERT_AWARD;
    }
    return getDataFromServer(AWARD, configObj);
}

/**
 * This method used for delete Award
 * Post method is implemented
 *
 * @param {Object} data: detail in delete Award ApI, request Body 
 * @return {Object} 
 */
export function deleteAward(data, identity){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    let AWARD = apiUrl.AWARD;
    if( identity === 'expert' ){
        AWARD = apiUrl.EXPERT_AWARD;
    }
    return getDataFromServer(AWARD, configObj);
}

/**
 * This method used for uploading award file
 * post method is implemented
 *
 * @param {Object} data: detail in uploadAwardFile ApI, request Body 
 * @return {Object} 
 */
export function uploadAwardFile(data, identity, id){
    const configObj = {
        method: 'POST',
        data,
    }
    let AWARDFILE = apiUrl.AWARD;
    if( identity === 'expert' ){
        AWARDFILE = apiUrl.EXPERT_AWARD;
    }
    AWARDFILE = AWARDFILE + '/' + id;
    // console.log('awardFile in final step:', AWARDFILE);
    // console.log('file data in final step:', data);
    return getDataFromServer(AWARDFILE, configObj);
}

/**
 * This method used for deleteAwardFile
 * post method is implemented
 *
 * @param {Object} data: detail in deleteAwardFile ApI, request Body 
 * @return {Object} 
 */
export function deleteAwardFile(identity, id){
    const configObj = {
        method: 'DELETE'
    }
    let AWARDFILE = apiUrl.AWARD;
    if( identity === 'expert' ){
        AWARDFILE = apiUrl.EXPERT_AWARD;
    }
    AWARDFILE = AWARDFILE + '/' + id;
    // console.log(data);
    return getDataFromServer(AWARDFILE, configObj);
}

/**
 * This method used for add OtherMateria
 * Post method is implemented
 *
 * @param {Object} data: detail in add OtherMateria ApI, request Body 
 * @return {Object} 
 */
export function addOtherMaterial(data, identity){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    let OTHERMATERIAL = apiUrl.OTHERMATERIAL;
    if( identity === 'expert' ){
        OTHERMATERIAL = apiUrl.EXPERT_OTHERMATERIAL;
    }
    return getDataFromServer(OTHERMATERIAL, configObj);
}


/**
 * This method used for update other material
 * Put method is implemented
 *
 * @param {Object} data: detail in update OtherMaterial ApI, request Body 
 * @return {Object} 
 */
export function updateOtherMaterial(data, identity){
    const configObj = {
        method: 'PUT',
        data,
    }
    console.log(data);
    let OTHERMATERIAL = apiUrl.OTHERMATERIAL;
    if( identity === 'expert' ){
        OTHERMATERIAL = apiUrl.EXPERT_OTHERMATERIAL;
    }
    return getDataFromServer(OTHERMATERIAL, configObj);
}

/**
 * This method used for delte other material
 * Delete method is implemented
 *
 * @param {Object} data: detail in delete other material ApI, request Body 
 * @return {Object} 
 */
export function deleteOtherMaterial(data, identity){
    const configObj = {
        method: 'DELETE',
        data,
    }
    console.log(data);
    let OTHERMATERIAL = apiUrl.OTHERMATERIAL;
    if( identity === 'expert' ){
        OTHERMATERIAL = apiUrl.EXPERT_OTHERMATERIAL;
    }
    return getDataFromServer(OTHERMATERIAL, configObj);
}

/**
 * This method used for uploading otherMaterial file
 * post method is implemented
 *
 * @param {Object} data: detail in uploadotherMaterialFile ApI, request Body 
 * @return {Object} 
 */
export function uploadOtherMaterialFile(data, identity, id){
    const configObj = {
        method: 'POST',
        data,
    }
    let OtherMaterialFILE = apiUrl.OTHERMATERIAL;
    if( identity === 'expert' ){
        OtherMaterialFILE = apiUrl.EXPERT_OTHERMATERIAL;
    }
    OtherMaterialFILE = OtherMaterialFILE + '/' + id;
    return getDataFromServer(OtherMaterialFILE, configObj);
}

/**
 * This method used for deleteOtherMaterialFile
 * post method is implemented
 *
 * @param {Object} data: detail in deleteOtherMaterialFile ApI, request Body 
 * @return {Object} 
 */
export function deleteOtherMaterialFile(identity, id){
    const configObj = {
        method: 'DELETE'
    }
    let OtherMaterialFILE = apiUrl.OTHERMATERIAL;
    if( identity === 'expert' ){
        OtherMaterialFILE = apiUrl.EXPERT_OTHERMATERIAL;
    }
    OtherMaterialFILE = OtherMaterialFILE + '/' + id;
    // console.log(data);
    return getDataFromServer(OtherMaterialFILE, configObj);
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
    console.log('data in addInterests:', data);
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
 * This method used for uploading grant file
 * post method is implemented
 *
 * @param {Object} data: detail in uploadGrantFile ApI, request Body 
 * @return {Object} 
 */
export function uploadGrantFile(data, id){
    const configObj = {
        method: 'POST',
        data,
    }

    let GRANTFILE = apiUrl.ResearchGrant;
    GRANTFILE = GRANTFILE + '/' + id;
    return getDataFromServer(GRANTFILE, configObj);
}

/**
 * This method used for deleting grant file
 * post method is implemented
 *
 * @param {Object} data: detail in deleting grant ApI, request Body 
 * @return {Object} 
 */
export function deleteGrantFile(id){
    const configObj = {
        method: 'DELETE',
    }
    let GRANTFILE = apiUrl.ResearchGrant;
    GRANTFILE = GRANTFILE + '/' + id;
    return getDataFromServer(GRANTFILE, configObj);
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
 * @param {Object} data: detail in upload CV ApI, request Body 
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
 * @param {Object} data: detail in delete CV ApI, request Body 
 * @return {Object} 
 */
export function deleteCV(){
    const configObj = {
        method: 'DELETE',
    }
    return getDataFromServer(apiUrl.CV, configObj);
}





