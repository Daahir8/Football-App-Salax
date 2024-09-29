import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OnBoarding3 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/onboarding3.jpeg')}
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
          imageStyle={{alignSelf: 'center',resizeMode:"contain"}}
          source={require('../../../assets/images/minImg3.png')}
          style={{
            width: '100%',
            height: 450,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginBottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              width: '100%',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 23,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Create and Organize Matches
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
          Set up your own matches and invite players
          Manage participants and enjoy hassle-free match organization
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
              backgroundColor: 'white',
              marginStart: 10,
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
          navigation.navigate('OnBoarding4');
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

export default OnBoarding3;
