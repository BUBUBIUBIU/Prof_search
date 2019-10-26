
import * as apiUrl from './apiURL';
import {getDataFromServer} from './api';


/**
 * This method used for get tree file
 * Get method is implemented
 *
 * @param {Object} data:only define the method
 * @return {Object} 
 */
export function getBrowseTree(){
    const configObj = {
        method: 'get'
    }
    // PROFESSORPROFILE
    return getDataFromServer(apiUrl.BROWSE_TREE, configObj);
}