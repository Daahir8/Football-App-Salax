import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
const SignupScreen = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 80}}>
        <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }} style={{marginStart: 20}}>
          <AntDesign name="left" size={26} color="#04764E" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            marginEnd: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 22,
              color: 'black',
              fontWeight: '500',
            }}>
            Sign up
          </Text>
        </View>
      </View>

      <View style={{width: '90%', alignSelf: 'center', marginTop: 60}}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#1B1B1B'}}> Email
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 45,
              backgroundColor: '#E0E0E0',
              marginTop: 8,
              borderRadius: 8,
            }}>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="mail" size={26} color="#04764E" />
            </View>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#838383'}
              style={{width: '75%', color: 'black', height: 45}}
            />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#1B1B1B'}}>
          Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 45,
              backgroundColor: '#E0E0E0',
              marginTop: 8,
              borderRadius: 8,
            }}>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="lock" size={26} color="#04764E" />
            </View>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#838383'}
              style={{width: '70%', color: 'black', height: 45}}
            />
            <View
              style={{
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Entypo name="eye-with-line" size={26} color="#04764E" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#1B1B1B'}}>
         Confirm Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 45,
              backgroundColor: '#E0E0E0',
              marginTop: 8,
              borderRadius: 8,
            }}>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="check" size={26} color="#04764E" />
            </View>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'#838383'}
              style={{width: '70%', color: 'black', height: 45}}
            />
            <View
              style={{
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Entypo name="eye-with-line" size={26} color="#04764E" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}
          style={{
            width: '100%',
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
            marginTop:50
          }}>
          <Text style={{fontSize: 16, fontFamily: '700', color: 'white'}}>
           Sign up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            width: '100%',
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
              width: '100%',
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
              width: '100%',
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
          <View style={{flexDirection :"row",alignItems :"center",justifyContent :"center",marginTop :10}} >
       <Text style={{fontSize :12 ,fontWeight :"400", color:'grey'}} >Already have an acccount?</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Login')
        }} style={{marginStart :2}} >
        <Text style={{fontSize :12 ,fontWeight :"bold", color:'#04764E'}} >Sign in</Text>
          </TouchableOpacity>    
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
