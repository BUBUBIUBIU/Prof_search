/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */

// 登录

//search experts by expertise or name
// export const SEARCHEXPERTS = `${publicIp}/api/search/experts`;
export const SEARCHEXPERTS = '/search/experts';


//Authentication
export const LOGIN ='/signin';
export const CHECKLOGIN ='/checksignin';
export const SIGNUP = '/student/signup';
export const SIGNOUT = '/signout'


//profile
export const PROFILE ='/profile';

//student Profile API
export const UNIVERSITY ='/student/university';
export const COMPANY = './student/company'
export const EXPERIENCE  = '/student/company';
export const PUBlICATION  = '/student/publication';
export const AWARD  = '/student/award';
export const OTHERMATERIAL  = '/student/material';
export const AVATAR = '/student/avatar'
export const CV = '/student/cv'

//student contact List api
export const CONTACTLIST = '/student/contactlist'
export const APPLY = '/student/application'
export const ACCEPT_OFFER = '/student/application/accept'
export const REJECT_OFFER = '/student/application/reject'

// PROFESSOR Profile API
export const EXPERT_PROFILE = '/expert/profile'
export const EXPERT_CHECKLOGIN ='/expert/checksignin';
export const EXPERT_SIGNOUT ='/expert/signout';
export const EXPERT_PUBlICATION  = '/expert/publication';
export const EXPERT_OTHERMATERIAL  = '/expert/material';
export const EXPERT_UNIVERSITY  = '/expert/university';
export const EXPERT_EXPERIENCE  = '/expert/company';
export const EXPERT_AWARD = '/expert/award';
export const ResearchInterest = '';
export const ResearchGrant  = '/expert/grant';
export const OngoingProject  = '/expert/ongoing_project';
export const AvailablePosition = '/expert/position'; 


//professor Application API
export const APPLICATIONS = '/api/expert/application'
export const ACCEPT_APPLICATION = '/api/expert/application/accept'
export const REJECT_APPLICATION =  '/api/expert/application/reject'

//Get Student/ Expert profile
export const GET_EXPERT_PROFILE=  '/api/profile/expert/'
export const GET_STUDENT_PROFILE = '/api/profile/student/'