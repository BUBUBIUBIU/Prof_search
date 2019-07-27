import axios from 'axios';
import cookie from 'react-cookies';
import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';



/**
 * This method used for signUp, same as request body 
 * Post method is implemented
 *
 * @param {Object} data: detail in SignUp ApI, request Body 
 * @return {Object} check Signup Api
 */
export function signUp(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    getDataFromServer(apiUrl.SIGNUP, configObj)
        .then(function(data){
            alert("Sign-up successful") 
        },function(err){
            alert("User already exit") 
            console.log(err)
        })
}


/**
 * This method used for Login
 * Post method is implemented
 *
 * @param {Object} data:{"email": String, "password": String}
 * @return {Object} check Signup Api
 */
export function Login(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    return getDataFromServer(apiUrl.LOGIN, configObj);
}

/**
 * This method used for Check login status
 * Post method is implemented
 *
 * @param {Object} data:{"email": String, "password": String}
 * @return {Object} check Signup Api
 */
export function LoginCheck(){
    const configObj = {
        method: 'POST'
    }

    return getDataFromServer(apiUrl.CHECKLOGIN, configObj);
}
