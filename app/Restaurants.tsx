import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ActivityIndicator, StatusBar, FlatList } from 'react-native';
import getRestaurants from './MockedApi/api-functions';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';


const Restaurants: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const restaurants =  getRestaurants()
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text>Finding restaurants that match your group budget</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
            <View>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Restaurants Found!</Text>
                </View>
         
            
{
   <FlatList
   data={restaurants.filter(restaurant => Number(restaurant?.estimated_budget) <= 100)}
   renderItem={({item}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>router.replace("/SecureBooking")}>

        <View style={styles.listContainer}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text>The Burger Vartswinner</Text>
            <Text style={{marginBottom:10}}>Budget: {item.estimated_budget}</Text>
            </View>
            <Text>Number of people: 4</Text>
          
            <View style={styles.partnerStyle}>
            <Text style={styles.partnerStyle}>Sptizy Partner</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
   } }
  
 />
}
            </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
   paddingTop:StatusBar.currentHeight
  },
  listContainer:{
    
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation:5
  },
  partnerStyle:{
    alignItems:"flex-end",
    fontWeight:"bold",
    color:Colors.light.background
  }
});

export default Restaurants;
