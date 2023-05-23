import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox'
import { StyleSheet, ScrollView, Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import * as API from './apiFunctions.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Should really look into cleaning up all the page imports.
//Having each page in a separate feels great, though
import HomePage from './components/HomePage.js'
import CredPage from './components/CredPage.js'
import CheckoutPage from './components/CheckoutPage.js'
import FinishPage from './components/FinishPage.js';
import NewItemPage from './components/NewItemPage.js';
import ReturnPage from './components/ReturnPage.js';
import WorkPage from './components/WorkPage.js';
import Barcode from './components/Barcode.js';

//Initialization*****************************************************************

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D6E71',
    justifyContent: 'center',
    maxHeight: '100%',//for android buttons at bottom

  },
  scrollView:{
    backgroundColor: '#6D6E71'
  },
  input: {
    margin: 7,
    borderWidth: 2,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  input1: {
    margin: 7,
    borderWidth: 2,
    borderRadius: 5,
    width: '78%',
    alignItems: 'flex-start',
  },
  textStyle: {
    margin: 7,
    alignItems: 'flex-start',
    color: '#fff',
  },
  buttonStyle: {
    alignItems: 'center',
    margin: 10,
    
  },
  placeholder: {
    color: '#bababa',
  },
  selection: {
    flexDirection: 'row',
    alignItems: 'right',
  },
  checkbox: {
    margin: 8,
  }
});

const Stack = createNativeStackNavigator();

//Page Functions***********************************************************************************
/*
function handleInsert(navigation, itemID, numToIncr, incr){
  API.incr(itemID, numToIncr, incr);
  navigation.navigate('Complete Increase');
}
*/
//End Page Functions*********************************************************************************


//read text files

//end read text files

//End Increase Page*****************************************

//@App***************************************************************************************
const App = () => {
  return(

    //Screens***************************************************************************
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home">
          {(props)=><HomePage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Change Credentials">
          {(props)=><CredPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Return Items">
          {(props)=><ReturnPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Checkout Items">
          {(props)=><CheckoutPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Add New Item">
          {(props)=><NewItemPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Working Page">
          {(props)=><WorkPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Success Page">
        {(props)=><FinishPage {...props} style={styles}/>}
        </Stack.Screen>
        <Stack.Screen name = "Barcode Page">
        {(props)=><Barcode {...props} style={styles}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    //End Screens****************************************************************************************

  )
}

export default App;