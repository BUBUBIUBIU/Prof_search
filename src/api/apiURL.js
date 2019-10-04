/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */


// 登录

//search experts by expertise or name
// export const SEARCHEXPERTS = `${publicIp}/api/search/experts`;
export const SEARCHEXPERTS = '/api/search/experts';


//Authentication
export const LOGIN ='/api/signin';
export const CHECKLOGIN ='/api/checksignin';
export const SIGNUP = '/api/student/signup';
export const SIGNOUT = '/api/student/signout'


//profile
export const PROFILE ='/api/profile';

//student Profile API
export const UNIVERSITY ='/api/student/university';
export const COMPANY = './api/student/company'
export const EXPERIENCE  = '/api/student/company';
export const PUBlICATION  = '/api/student/publication';
export const AWARD  = '/api/student/award';
export const OTHERMATERIAL  = '/api/student/material';
export const AVATAR = 'api/student/avatar'
export const CV = 'api/student/cv'

//student contact List api
export const CONTACTLIST = '/api/student/contactlist'
export const APPLY = '/api/student/application'
export const ACCEPT_OFFER = 'api/student/application/accept'
export const REJECT_OFFER = 'api/student/application/reject'



// PROFESSOR Profile API
export const EXPERT_PROFILE = '/api/expert/profile'
export const EXPERT_CHECKLOGIN ='/api/expert/checksignin';
export const EXPERT_SIGNOUT ='/api/expert/signout';
export const ResearchInterest = 'api/';
export const ResearchGrant  = 'api/expert/grant';
export const OngoingProject  = 'api/expert/ongoing_project';
export const AvailablePosition = 'api/expert/position'; 


//professor Application API
export const APPLICATIONS = '/api/expert/application'
export const ACCEPT_APPLICATION = '/api/expert/application/accept'
export const REJECT_APPLICATION =  '/api/expert/application/reject'

//Get Student/ Expert profile
export const GET_EXPERT_PROFILE=  '/api/profile/expert/'
export const GET_STUDENT_PROFILE = '/api/profile/student/'