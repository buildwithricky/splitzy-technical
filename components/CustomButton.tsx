import {View , Text , TouchableOpacity,StyleSheet} from "react-native"
import { Href, Link } from 'expo-router';
interface ButtonProps{
    title:string,
    // onPress:()=>void,
    disabled?:boolean,
    color:string,
    path:Href
}
const CustomButton:React.FC<ButtonProps> = ({title,path,color,disabled})=>{

    return(
    <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.button, { backgroundColor: color }, disabled && styles.disabledButton]}
    // onPress={onPress}
    disabled={disabled}
  >
     <Link style={styles.buttonText} href={path}>{title}</Link>
  </TouchableOpacity>
    )
} 


export default CustomButton;


const styles = StyleSheet.create({
    button:{
width:200,
height:50,
borderRadius:100,
alignItems: "center",
justifyContent: "center",
    },
    disabledButton:{

    },
    buttonText:{
color:"#ffffff",
fontSize:20
    }
})