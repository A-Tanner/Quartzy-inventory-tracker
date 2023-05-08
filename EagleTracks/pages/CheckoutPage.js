import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox'
import {ScrollView, Text, SafeAreaView, Button, TextInput, View} from 'react-native';
import ExpandableForm from '../components/ExpandableForm'
import InputField from '../components/InputField'
import login from '../loginCred.json'
import * as API from '../apiFunctions.js'
import * as CheckFunctions from  '../utility/CheckFunctions.js'

const CheckoutPage = ({navigation, style}) => {
    //const [studentName, setStudentName] = useState('');
    //const [toReturn, setToReturn] = useState(false);
    //const [itemName, setItemName] = useState('');
  
    const checkDecrease = () => { //TODO : Split this into per-item checking and order info checking
      // if(!(numToDecr.trim())){
      //   alert('Number is empty');
      // }else if(!(itemToDecr.trim())){
      //   alert('Item is empty');
      // }else if(!(studentName.trim())){
      //   alert('Item is empty');
      // }else if(!(instName.trim())){
      //   alert('Item is empty');
      // }else if(!(itemName.trim())){
      //   alert('Item is empty');
      // }else if(!(roomNum.trim())){
      //   alert('Item is empty');
      // }else if(!(className.trim())){
      //   alert('Item is empty');
      // }else if(!(parseInt(numToDecr))){
      //   alert('Taking non-number quantities is not supported at this time');
      if(!(login['accessToken'])){
        alert('Missing access token.  Please enter your access token.')
        navigation.navigate("Change Credentials")
      }else{
        let itemID = checkFiles(itemToDecr)
        if(!itemID.trim()){
          alert("ItemID not present, please add the item")
        }else{
          API.incr(itemID, parseInt(numToDecr), false, navigation);
          navigation.navigate('Working Page');
        }
      }
    }
    return(
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollView}>
        <InputField style={style} label="Class/Lab" 
        checkFunctions={[CheckFunctions.isEmpty]}/>
        <InputField style={style} label="Room Number" 
        checkFunctions={[CheckFunctions.isEmpty]}/>
        <InputField style={style} label="Instructor/PI" 
        checkFunctions={[CheckFunctions.isEmpty]}/>
        <InputField style={style} label="Lab Group/Name" 
        checkFunctions={[CheckFunctions.isEmpty]}/>
  <Text></Text><Text></Text>
        {/* Item Checkout Section */}
        
        
        {
        //Not sure if Item Name is needed

        /* <TextInput
          style={style.input}
          placeholder=" Item Name"
          onChangeText={
            (value)=>setItemName(value)
          }
        /> */
        
        }
        <ExpandableForm
        entryFormat = {
          <View style={style.entry}>
            <InputField style={style} label = "Item ID" 
            checkFunctions={[CheckFunctions.isEmpty]}/>
            <InputField style={style} label = "Quantity" 
            keyboardType="numeric" 
            checkFunctions={[CheckFunctions.isEmpty, CheckFunctions.isNumeric]}/>
          </View>
        }
        />
         {/* <InputField style={style} label = "Item ID" checkFunctions={[CheckFunctions.isEmpty]}/> */}
         {/* <InputField style={style} label = "Quantity" keyboardType="numeric" checkFunctions={[CheckFunctions.isEmpty, CheckFunctions.isNumeric]}/> */}

        {//Not sure if declaration of intent is valuable
        
        /* <Text style={style.textStyle}>Will item be returned:</Text>
        <Checkbox style={style.checkbox} value={toReturn} onValueChange={setToReturn} color={toReturn ? '00ff00' : '#000000'}/>
         */
         }
        <Text></Text><Text></Text>
        <Button style={style.buttonStyle} onPressitemListstyle={() => checkDecrease()} title="Submit" color="#a10022" />
        {/*<Button onPress={() => API.incr("945eadcc-319a-4c21-89f2-1901defd742e", 5, false, navigation)} title="Decrease by 5" color="#841584" />*/}
        {/*<Button onPress={() => navigation.navigate('Home')} title="Return Home" color="#841584"/>*/}
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
      )
  }



  export default CheckoutPage;

