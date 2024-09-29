import {View, Text, Animated, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';

const PreLogin = ({navigation}) => {
  const footballAnim = useRef(new Animated.Value(-200)).current; // Initial position above the screen

  useEffect(() => {
    Animated.timing(footballAnim, {
      toValue: 0, // Position to animate to
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [footballAnim]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Image
          source={require('../../../assets/images/football.webp')} // Replace with your local image path
          style={{
            width: 100,
            height: 100,


            transform: [{translateY: footballAnim}],
          }}
        />
      </View>
      <View style={{flex: 0.5}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}
          style={{
            width: '90%',
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            backgroundColor: '#04764E',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text style={{fontSize: 16, fontFamily: '700', color: 'white'}}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup')
          }}
          style={{
            width: '90%',
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: 20,
            borderWidth: 0.5,
            borderColor: '#04764E',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text style={{fontSize: 16, fontFamily: '700', color: '#04764E'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            width: '90%',
            justifyContent: 'center',
          }}>
          <View style={{width: '45%', borderWidth: 0.5, borderColor: 'grey'}} />
          <Text
            style={{
              fontWeight: '300',
              fontSize: 16,
              color: 'grey',
              marginHorizontal: 5,
            }}>
            Or
          </Text>
          <View style={{width: '45%', borderWidth: 0.5, borderColor: 'grey'}} />
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
           
            }}
            style={{
              width: '90%',
              height: 48,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 20,
              borderWidth: 0.2,
              borderColor: 'grey',
            }}>
            <Image
              source={require('../../../assets/images/Google.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={{marginStart: 10, fontSize: 16, fontWeight: '500'}}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
       
            }}
            style={{
              width: '90%',
              height: 48,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 20,
              borderWidth: 0.2,
              borderColor: 'grey'
            }}>
            <Image
              source={require('../../../assets/images/facebook.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={{marginStart: 10, fontSize: 16, fontWeight: '500'}}>
              Continue with Facebook{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PreLogin;
