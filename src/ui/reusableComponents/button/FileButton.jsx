/* Copyright (C) Profware Pty. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by [Chenyang Lu], [date:5th Sep 2019]
 */

import React from 'react';
import { Button } from '@material-ui/core/';
import Description from '@material-ui/icons/Description';
import Clear from '@material-ui/icons/Clear';


export default function FileButton(props) {
    function handleDelete(){
        props.handleDelete();
    }

    return (
      <div>
        <Button variant="outlined" href ={"http://" + props.url} style ={{borderRadius: "5px 0 0 5px", borderRightWidth: 0}}>
            <Description color = "primary"/> {props.name}
        </Button>
        <Button variant="outlined" onClick = {handleDelete} style ={{width:10, borderRadius: "0px 5px 5px 0px", borderLeftWidth: 0}}>
            <Clear color = "primary"/> 
        </Button>
      </div>
    );
  }

