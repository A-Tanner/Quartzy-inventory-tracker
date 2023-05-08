import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, Text } from 'react-native';


const ExpandableForm = (props)=>{
    const [entries, setEntries]= useState([])
    const [entryCount, setEntryCount] = useState(0)
    function addEntry(){
        setEntries([
            ...entries,
            <View key={entryCount}>{props.entryFormat}</View>
        ])
        setEntryCount(entryCount+1);
        console.log(entryCount)
    }

    function removeEntry(){
        setEntries(entries.slice(0,-1))
        setEntryCount(entryCount-1);
        console.log(entryCount)
    }

    return (
        <ScrollView nestedScrollEnabled = {true}>
            {
            entries.map(entry => {return entry})
            }

            <Button title = "Add" onPress={()=>{addEntry()}}></Button>
            <Text></Text>
            <Button title = "Remove" onPress={()=>{removeEntry()}}></Button>
        </ScrollView>
    )
}

export default ExpandableForm;