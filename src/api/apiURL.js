/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */

    import {publicIp} from './apiIp';

// 登录

//search experts by expertise or name
export const SEARCHEXPERTS = `${publicIp}/search/experts`;
// export const SEARCHEXPERTS = '/search/experts';


//Authentication
export const LOGIN =`${publicIp}/signin`;
export const CHECKLOGIN =`${publicIp}/checksignin`;
export const SIGNUP = `${publicIp}/student/signup`;
export const SIGNOUT = `${publicIp}/signout`


//profile
export const PROFILE =`${publicIp}/profile`;

//student Profile API
export const UNIVERSITY =`${publicIp}/student/university`;
export const COMPANY = `${publicIp}/student/company`;
export const EXPERIENCE  = `${publicIp}/student/company`;
export const PUBlICATION  = `${publicIp}/student/publication`;
export const AWARD  = `${publicIp}/student/award`;
export const OTHERMATERIAL  = `${publicIp}/student/material`;
export const AVATAR = `${publicIp}/student/avatar`;
export const CV = `${publicIp}/student/cv`
export const PROJECT_DETAIL = `${publicIp}/student/project_detail`

//student contact List api
export const CONTACTLIST = `${publicIp}/student/contactlist`
export const APPLY = `${publicIp}/student/application`
export const ACCEPT_OFFER = `${publicIp}/student/application/accept`
export const REJECT_OFFER = `${publicIp}/student/application/reject`

// PROFESSOR Profile API
export const EXPERT_PROFILE = `${publicIp}/expert/profile`;
export const EXPERT_CHECKLOGIN =`${publicIp}/expert/checksignin`;
export const EXPERT_SIGNOUT =`${publicIp}/expert/signout`;
export const EXPERT_PUBlICATION  = `${publicIp}/expert/publication`;
export const EXPERT_OTHERMATERIAL  = `${publicIp}/expert/material`;
export const EXPERT_UNIVERSITY  = `${publicIp}/expert/university`;
export const EXPERT_EXPERIENCE  = `${publicIp}/expert/company`;
export const EXPERT_AWARD = `${publicIp}/expert/award`;
export const ResearchInterest = '';
export const ResearchGrant  = `${publicIp}/expert/grant`;
export const OngoingProject  = `${publicIp}/expert/ongoing_project`;
export const AvailablePosition = `${publicIp}/expert/position`; 


//professor Application API
export const APPLICATIONS = `${publicIp}/expert/application`
export const ACCEPT_APPLICATION = `${publicIp}/expert/application/accept`
export const REJECT_APPLICATION =  `${publicIp}/expert/application/reject`

//Get Student/ Expert profile
export const GET_EXPERT_PROFILE=  `${publicIp}/profile/expert/`
export const GET_STUDENT_PROFILE = `${publicIp}/profile/student/`

//Static file
export const BROWSE_TREE = `${publicIp}/static/tree`