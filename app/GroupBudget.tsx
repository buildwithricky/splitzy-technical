import CustomButton from '@/components/CustomButton'
import { Colors } from '@/constants/Colors'
import React, { useState } from 'react'
import {View, Text, StyleSheet, ActivityIndicator,TextInput} from 'react-native'



const GroupBudget:React.FC = () =>{
const [amount, setAmount] =  useState("");
return (
    <View style={styles.container}>
        <View>
            <Text style={styles.boldText}>Set Outing Budjet</Text>
            <TextInput
        style={styles.input}
        placeholder='Set a Preferred Budget'
        value={amount}
       // This ensures the keyboard is optimized for numeric input
        onChangeText={(text: string) => setAmount(text)}  // Enforce that text is a string
      />
      <View style={styles?.buttonContainer}>
      <CustomButton  path={
        {
            pathname: '/Restaurants',
            params: { amount }
          }
      } title='Continue' color={Colors.light.background} />
      </View>
        </View>
    </View>
)
}


const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center'
    },
    boldText:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
      },
      buttonContainer:{
        marginTop:10
      }
})
export default GroupBudget