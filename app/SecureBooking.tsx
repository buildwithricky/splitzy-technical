import CustomButton from "@/components/CustomButton"
import { Colors } from "@/constants/Colors"
import { View ,Text, StyleSheet, StatusBar} from "react-native"

const SecureBooking:React.FC =()=>{

    return (
        <View style={styles.container}>
            <Text>Pay for Booking through Split then Request contributions from Participant</Text>
        <CustomButton path="/BookingCompleted" color={Colors.light.background} title="Confirm Booking"/>
        </View>
    )
}

export default SecureBooking

const styles =  StyleSheet.create(
    {
        container:{
            alignItems:"center",
            paddingTop:StatusBar?.currentHeight
        }
    }
)