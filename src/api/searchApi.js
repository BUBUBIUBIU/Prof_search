/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu, Shaochuan Luo], [date:10th Aug 2019]
 */


import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';

//只需传入搜索关键字
export function SearchExpert(searchText){
    const configObj ={
        method: 'GET',
        params: {
            q:searchText}
    }
    return getDataFromServer(apiUrl.SEARCHEXPERTS, configObj);
}