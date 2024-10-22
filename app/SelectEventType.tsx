import { Link } from 'expo-router';
import {View, Text,StyleSheet, StatusBar} from "react-native";


const SelectEventType = ()=>{
    return (
<View style={styles.container}>
<View>
    <Text>Select Event Type</Text>
    <View style={styles.listItem}>
        <Text>Brunch</Text>
    </View>
    <View style={styles.listItem}>
        <Text>Bowling</Text>
    </View>
    <View style={styles.listItem}>
        <Link href="/GroupBudget">Restaurants</Link>
        
    </View>
</View>
</View>
    )
}


export default SelectEventType;


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
    
    },
    listItem: {
        backgroundColor: '#fff', 
        padding: 10,          
        marginVertical: 8,       
        borderRadius: 10,    
      
        shadowColor: '#000',      
        shadowOffset: {           
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,     
        shadowRadius: 3.84,       
      
       
        elevation: 5,           
      }
})