/**
 * This method used for checking if the selected box is selected
 * If the value is 0, then it is not selected
 * @param  ..args: all the input data
 * @return if all selected, return true, else return error info
 */

export const validateSelected = (...args) =>{
    let valid = true;
    let outputInfo = "";
    for (let item of args){
        if (item[0] == '0') {
            valid = false
            outputInfo = outputInfo + item[0] + " not selected\n"
        } 
    }
    if(valid) {
        return true;
    }else{
        return outputInfo;
    }

}


/**
 * This method used for checking the email format
 * @param  ..args: all the input data
 * @return if all selected, return true, else return error info
 */

export const validateEmail = (inputStr) =>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(inputStr && re.test(inputStr.toLowerCase())) {
        return true;
    }else{
        return "Incorrect Email format"
    }

}


/**
 * This method used for valiating the inputString
 * @param  ..args: all the input data, should be in the format of ([inputLabelName, inputString],[inputLabelName2, inputString2],[inputLabelName3, inputString3])
 * @return if all selected, return true, else return error info
 */


export const validateInputString = (...args) =>{
    let valid = true;
    let outputInfo = "";
    for (let item of args){
        if (item[1] && item[1].replace(/(^s*)|(s*$)/g, "").length !== 0) {
            continue
        }else{
            valid = false;
            outputInfo = outputInfo + item[0] + " can not be left empty\n"
        }
    }

    if(valid) {
        return true;
    }else{
        return outputInfo;
    }
}


export const validateInputNumber = (...args) => {
    let valid = true
    let outputInfo = "";
    for (let item of args){
        if (item[1] && item[1].replace(/(^s*)|(s*$)/g, "").length !== 0 && !isNaN(item[1])) {
            continue
        }else{
            valid = false;
            outputInfo = outputInfo + item[0] + " should be digits\n"
        }
    }
    if(valid) {
        return true;
    }else{
        return outputInfo;
    }

}