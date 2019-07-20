import axios from 'axios';
import * as apiUrl from './apiURL';
const key = 'keepOnlyOne';
/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */

function getDataFromServer(apiUrl, configObj) {
    //用户传入的接口配置参数
    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 5000
    } = configObj;
    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url: apiUrl,
            method: method,
            params: params,
            data: data,
            timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.status === 200) {
                    resolve(response.data);
                }else {
                    // notification.error({
                    //     key,
                    //     message: '操作失败',
                    //     description: '返回的数据格式有误'
                    // });
                    console.log("数据未正确返回")
                    resolve(response.data);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                // notification.error({
                //     key,
                //     message: '操作失败',
                //     description: '服务器错误'
                // });
                console.log("服务器错误")
                resolve(response);
            }
        }).catch(function (error) {
            // notification.error({
            //     key,
            //     message: '操作失败',
            //     description: '网络异常,请稍后重试'
            // });
            console.log("网络异常")
            reject(error);
        })
    })
}

function PostDataFromServer(apiUrl, configObj) {
    //用户传入的接口配置参数
    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 5000
    } = configObj;
    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url: apiUrl,
            method: method,
            params: params,
            data: data,
            timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.data.code) {
                    resolve(response.data);
                }else {
                    // notification.error({
                    //     key,
                    //     message: '操作失败',
                    //     description: '返回的数据格式有误'
                    // });
                    console.log("返回格式错误")
                    resolve(response.data);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                // notification.error({
                //     key,
                //     message: '操作失败',
                //     description: '服务器错误'
                // });
                console.log("服务器错误")
                resolve(response);
            }
        }).catch(function (error) {
            // notification.error({
            //     key,
            //     message: '操作失败',
            //     description: '网络异常,请稍后重试'
            // });
            console.log("网络异常")
            reject(error);
        })
    })
}


//只需传入搜索关键字
export function searchExpert(searchText){
    const configObj ={
        method: 'GET',
        params: {
            q:searchText}
    }
    return getDataFromServer(apiUrl.SEARCHEXPERTS, configObj);
}


/**
 * This method used for signUp, same as request body 
 * Post method is implemented
 *
 * @param {Object} data: Check SignUp ApI, request Body 
 * @return {Object} check Signup Api
 */
export function signUp(data){
    const configObj = {
        method: 'POST',
        data,
    }
    console.log(data);
    alert("Sign-up successful")
    return getDataFromServer(apiUrl.SIGNUP, configObj);
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
    alert("Sign-up successful")
    return getDataFromServer(apiUrl.SIGNUP, configObj);
}






