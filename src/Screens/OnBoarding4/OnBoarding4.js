import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OnBoarding4 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/onboarding1.jpeg')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
        }}>
                    <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Connect with Your Team
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 10,
                width: '70%',
                alignSelf: 'center',
   
              }}>
Stay in touch with teammates and coordinate easily

            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 10,
                width: '70%',
                alignSelf: 'center',
              
              }}>
Stay in touch with teammates and coordinate easily

            </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
        }}>
            <TouchableOpacity onPress={()=>{
navigation.navigate('PreLogin')
              
            }} style={{width :"90%",height:48,alignItems :"center",justifyContent:"center",borderRadius :12,backgroundColor :"#04764E",marginBottom :30}} >
              <Text style={{fontSize :16 ,fontFamily :"700",color:"white",}} >Get Started</Text>
            </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

export default OnBoarding4;
