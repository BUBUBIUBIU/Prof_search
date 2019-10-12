/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:11th Oct 2019]
 */

/*
@Description
This service is used for the communication between two components (When these two components don't have any nested relationship)
Note: We deal with this kind of situation, we can also use redux. But we should make a careful choice between them, If the communication happens only onces, 
We can use event listener to achieve the functionality  
*/


import {EventEmitter} from 'events';
export default new EventEmitter();