import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OnBoarding2 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/onboarding2.jpeg')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
        }}>
        <ImageBackground
          imageStyle={{alignSelf: 'center',resizeMode :"contain"}}
          source={require('../../../assets/images/minImg2.png')}
          style={{
            width: '100%',
            height: 440,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginBottom: 30,
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 10,
              borderRadius: 10,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 23,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Looking Forward to the Most Intense Matches
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: '300',
                textAlign: 'center',
                marginTop: 10,
                width: '90%',
                alignSelf: 'center',
              }}>
           Discover local matches and join the action
           Stay active and have fun with friends and new teammates
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: 'white',
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: '#04764E',
              borderWidth: 2.5,
              borderColor: 'white',
              marginStart: 10,
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              backgroundColor: 'white',
              marginStart: 10,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          marginStart: 30,
          marginBottom: 50,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#04764E',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="left" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OnBoarding3');
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginEnd: 30,
          marginBottom: 50,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#04764E',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="right" size={30} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OnBoarding2;
