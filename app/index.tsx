import React, { useState } from "react";
import { Text, View, StyleSheet,SafeAreaView, StatusBar,TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import * as Svg from 'react-native-svg';
import SvgComponent from "@/components/Logo";
import CustomButton from "@/components/CustomButton";
import PaymentInitiationModal from "@/components/PaymentInitiationModal";
import { Link } from 'expo-router';
const Index: React.FC = () => {
const [visible , setVisible] = useState(false)
return (
  <SafeAreaView style={styles.container}>
  <PaymentInitiationModal visible={visible} onClose={()=>setVisible(false)} />
<View style={styles.logoContainer}>
<View style={{height:10, width:10}}>
<SvgComponent />
</View>
<View style={styles.circleContainer}>

</View>
      </View>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.boldText}>Events</Text>
          <View style={styles.eventBox}>
<Text style={styles.eventText}>
  Event Name: Wills Birthday
</Text>
<View style={{width:"100%",alignItems:"flex-end", paddingRight:5}}>
  <TouchableOpacity style={styles.initiatePaymentBtn} onPress={()=>setVisible(true)}>
    <Text>Intiate payment</Text>
  </TouchableOpacity>
</View>
          </View>
        </View>
          <View style={{position:"absolute", bottom:25, 
               alignItems: "center",
               justifyContent: "center",
               alignSelf:"center"
          }}>
            
            <CustomButton path="/SelectEventType" title="Create event" color={Colors.light.background} onPress={()=>alert("clicked event")}/>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:StatusBar.currentHeight ? StatusBar.currentHeight / 1.5 : 0,
    backgroundColor: Colors.light.background,
  },
  initiatePaymentBtn:{
    borderWidth:1,
    borderColor:"#ffffff",
    padding:10,
    backgroundColor:"#fff",
    color:"#ffffff",
    borderRadius:5,
  },
  secondContainer: {
    flex:1,
    width: "100%",
    paddingVertical:25,
    paddingHorizontal:15,
    backgroundColor: "#ffffff",
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  },
  eventBox:{
    height:100,
    width:"100%",
    borderRadius:25,
    marginTop:20,
    backgroundColor:"#906EF7",
    paddingRight:10
  },
  eventText:{
color:"#ffffff",
padding:15
  },
  boldText:{
    fontWeight:"bold",
    fontSize:20
  },
  circleContainer:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:"#ffffff",

  },
  logoContainer: {
display:"flex",
flexDirection:"row",
justifyContent:"space-between",
width:"100%",
padding:10,
margin:5
}
});

export default Index;
