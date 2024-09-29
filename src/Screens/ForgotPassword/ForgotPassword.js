import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{flex :1 ,backgroundColor :"white"}} >
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
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={{marginTop :80,width:"90%",alignSelf :"center"}} >
<Text style={{fontSize :14,color:'#838383',fontWeight:"400"}} >Enter the email associated with your account and we’ll send an email with code to reset your password</Text>
<View style={{marginTop :40}} >
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VerifyOTP')
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
          Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPassword