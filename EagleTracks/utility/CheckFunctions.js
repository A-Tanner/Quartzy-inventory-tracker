import itemList from '../itemList.json'
import login from '../loginCred.json'

function checkFiles(serial){
    //const itemData = require("./itemList.json")
    //console.log("in function")//test code
    if(itemList.hasOwnProperty(login['labID'])){
      let temp = itemList[login['labID']]
      if(temp.hasOwnProperty(serial)){
        return temp[serial]
      }else{
        return ''
      }
    }else{
      return ''
    }
    //return itemList[serial]
    /*if(serial == "A00002"){
        return "945eadcc-319a-4c21-89f2-1901defd742e"
    }*/
    
    
  }
  
function isEmpty(fieldLabel, value){
    if (value.trim()){
        return true
    } else {
        //Error reporting
        alert(fieldLabel + " has an empty value");
        return false;
    }
}

function isNumeric(fieldLabel, value){
    if (parseInt(value.trim())){
        return true
    } else {
        //Error reporting
        alert(fieldLabel + " requires a numeric value");
        return false;
    }
}

function idInDatabase(fieldLabel, value){
    if (checkFiles(value)){
        return true
    } else {
        alert(value + " is not a known ID. Ensure the ID is correct, or consult user documentation for information on how to update the list of valid IDs.")
        return false;
    }
}

function test(fieldLabel, value){
    console.log("testing " + fieldLabel);
}


export {checkFiles, isEmpty, isNumeric, idInDatabase, test};