import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';



import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BOLD, MEDIUM } from '../../Theme/fonts';


const BookingConfirmedScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;


  useEffect(() => {
 
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }, []);

  return (
    <View style={styles.Main_Container}>
     

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainLogo}>
          <Animated.View
            style={[
              styles.CheckEmailcontianer,
              { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
            ]}
          >
            <MaterialIcons name='done' color='white' size={50} />
          </Animated.View>
          <Text style={styles.title}>Booking Invitation Sent</Text>
          <Text style={styles.detailText}>
            Thank you for Booking, your
            Booking has been sent to coach ,
            Wait for being Accepted 
            Thank you
          </Text>
          <TouchableOpacity
            style={styles.viewOrdersButton}
            onPress={() => navigation.navigate('Bookings')}
          >
            <Text style={styles.viewOrdersButtonText}>View Bookings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ContantContainer}></View>
      </ScrollView>
    </View>
  );
};
export default BookingConfirmedScreen;

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailText: {
    fontSize: 16,
    fontFamily: 
    MEDIUM,
    color: 'black',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  mainLogo: {
    marginBottom: 30,
    marginTop: 120,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: BOLD,
    color: '#04764E',
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf :"center",textAlign :"center"
  },
  CheckEmailcontianer: {
    width: 80,
    height: 80,
    backgroundColor: '#04764E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    marginBottom: 10,

  },
  viewOrdersButton: {
    width: 180,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04764E',
    borderRadius: 12,
    marginVertical: 20,
  },
  viewOrdersButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ContantContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
