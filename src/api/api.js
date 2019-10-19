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

export function getDataFromServer(apiUrl, configObj) {
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
                // 'Content-Type': 'application/json',
                // 'token': cookie.load("token"),
                // 'id':cookie.load("userId")
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.status === 200) {
                    console.log(response.data.message)
                    resolve(response.data);
                }else {
                    console.log("未知错误")
                    console.log(response)
                    reject(response.data.message);
                }
            }else {
                console.log("服务器错误，未正常返回数据")
                reject(response);
            }
        }).catch(function (error) { // when the response.status != 2xx, error will be catched
            if(error.response){
                console.log(error.response.data)
                reject(error.response.data);
            }else{
                console.log('Error without response:', error.message)
                reject(error);
            }
            
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








