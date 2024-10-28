import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OnBoarding1 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/onboarding1.jpeg')}
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
          imageStyle={{alignSelf: 'center', resizeMode: 'contain'}}
          source={require('../../../assets/images/salax3.jpeg')}
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
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Welcome to Football Match
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
              Connect. Play. Win Join football matches in your area and connect
              with fellow players
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
              backgroundColor: '#04764E',
              borderWidth: 2.5,
              borderColor: 'white',
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
              backgroundColor: 'white',
              marginStart: 10,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OnBoarding2');
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

export default OnBoarding1;
