import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const VerifyOTP = ({navigation}) => {
const [input1,setInput1] =useState('')
const [timer,setTimer]= useState(60)
const  [isFocused1 ,setIsFocused1]= useState(false)
const  [isFocused2 ,setIsFocused2]= useState(false)
const  [isFocused3 ,setIsFocused3]= useState(false)
const  [isFocused4 ,setIsFocused4]= useState(false)
const  [isFocused5,setIsFocused5]= useState(false)
const  [isFocused6 ,setIsFocused6]= useState(false)
useEffect(()=>{
    if(timer > 0){
setTimeout(() => {
    setTimer(prev => prev - 1)
}, 1000);
    }
},[timer])
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 80}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{marginStart: 20}}>
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
            Verify OTP
          </Text>
        </View>
      </View>
      <View style={{marginTop: 80, width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 14, color: '#838383', fontWeight: '400'}}>
          Enter your OTP which has been sent to your email and completely verify
          your account.
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 60}}>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
            }}>
            <TextInput
            
                     keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
              marginStart: 5,
            }}>
            <TextInput
            onFocus={()=>{
                setIsFocused1(true)
            }}
                     keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
              marginStart: 5,
            }}>
            <TextInput
                     keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
              marginStart: 5,
            }}>
            <TextInput
                     keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
              marginStart: 5,
            }}>
            <TextInput
            keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: 40,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderColor: '#838383',
              marginStart: 5,
            }}>
            <TextInput
                     keyboardType='numeric'
              maxLength={1}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            />
          </View>
        </View>
        <View style={{alignItems :"center",justifyContent :"center"}} >
        <Text style={{fontSize: 14, color: '#838383', fontWeight: '400',marginTop :26,marginBottom :15}}>
        A code has been sent to your phone
        </Text>
        {timer < 10 && timer > 0 ?  <Text style={{fontSize: 16, color: '#1B1B1B', fontWeight: '400'}}>
           Resend in 00:0{timer}
           </Text>: 
           <Text style={{fontSize: 16, color: '#1B1B1B', fontWeight: '400'}}>
           Resend in 00:{timer}
           </Text>
        }
     
        </View>
           <TouchableOpacity
          onPress={() => {
            navigation.navigate('ResetPassword')
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
            marginTop:30
          }}>
          <Text style={{fontSize: 16, fontFamily: '700', color: 'white'}}>
           Verify
          </Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
};

export default VerifyOTP;
