/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:5th Sep 2019]
 */

import React from 'react';
import { Button } from '@material-ui/core/';
import Description from '@material-ui/icons/Description';
import Clear from '@material-ui/icons/Clear';


/*props required:
 url: determine the url of the file
 editable: if the file can be deleted
 name: name of the file
*/

export default function FileButton(props) {
    function handleDelete(){
        props.handleDelete();
    }

    return (
      <div>
        <Button variant="outlined" href ={"http://" + props.url} style ={{borderRadius:(props.editable)? "5px 0 0 5px" :"5px", borderRightWidth:(props.editable)? 0:1}}>
            <Description color = "primary"/> {props.name}
        </Button>
        
        {props.editable &&
        <Button variant="outlined" onClick = {handleDelete} style ={{width:10, borderRadius: "0px 5px 5px 0px", borderLeftWidth: 0}}>
            <Clear color = "primary"/> 
        </Button>}
      </div>
    );
  }






