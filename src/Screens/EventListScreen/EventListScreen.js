import { View, Text, TouchableOpacity,Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BOLD, LIGHT, MEDIUM } from '../../Theme/fonts';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const EventListScreen = ({navigation}) => {
  const {params} = useRoute()
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', marginTop: 80, width: '100%', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>{
    navigation.goBack()
}}  style={{ marginStart: 15 }}>
          <Ionicons name='arrow-back' size={32} color='black' />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ textAlign: 'center',fontSize :18,marginBottom :5,fontFamily :MEDIUM }}>Events Details</Text>
        </View>
        <View style={{ width: 47 }} />
      </View>
      <ScrollView style={{flex :1 ,}} >

<View style={{flexDirection : "row",width :"100%",marginTop :40,borderBottomWidth :0.3 ,borderBottomColor : "grey"}} >
  <View style={{
    width :"45%",alignItems :"center" ,justifyContent :"center"
  }} >
    <Image style={{width :"100%",height :150,resizeMode :"contain"}} source={{uri  : params?.data?.img}} />
  </View>
  <View style={{width :"45%"}} >
    <Text style={{fontSize :20,fontFamily :BOLD}} >{params?.data?.name}</Text>
    <View style={{flexDirection : "row",marginTop :8}} >
    <AntDesign name='star' size={20} color='#ffd250' />
    <Text style={{fontSize :16,fontFamily :LIGHT,marginStart :5}} >4.5</Text>

    </View>
    <View style={{flexDirection : "row",marginTop :8}} >
    <Text style={{fontSize :14,fontFamily :MEDIUM}} >Matches Played :</Text>

    <Text style={{fontSize :14,fontFamily :LIGHT,marginStart :3}} >44</Text>

    </View>
    <View style={{flexDirection : "row",marginTop :8}} >
    <Text style={{fontSize :14,fontFamily :MEDIUM}} >Remaining Matches :</Text>

    <Text style={{fontSize :14,fontFamily :LIGHT,marginStart :3}} >13</Text>

    </View>
    <View style={{flexDirection : "row",marginTop :8}} >
    <Text style={{fontSize :14,fontFamily :MEDIUM}} >Leagure:</Text>

    <Text style={{fontSize :14,fontFamily :LIGHT,marginStart :3}} >#13</Text>

    </View>
  </View>
</View>
<View style={{}} >
<Text style={{margin :20,fontSize :20,fontFamily :MEDIUM}} >Upcoming Matches</Text>
<FlatList contentContainerStyle={{marginBottom:"30%"}} data={[1,2]} renderItem={({item})=>{
  return  (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('EventDetail')
    }} style={{width :"90%",height :"auto",alignSelf :"center",borderRadius :8,backgroundColor :"#E8E8E8",marginTop :20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      
      elevation: 7,


    }} >
<Image source={{uri : "https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.webp?b=1&s=170667a&w=0&k=20&c=0du9Ul5NHOHDjpolTa8GKvLVSdOCoRPN-JGI_chUOsI="}} style={{width :"100%", height :150,borderTopRightRadius :10, borderTopLeftRadius :10}} />

<View style={{marginTop :10 ,width :"100%"}} >
  <Text style={{fontSize : 18,fontFamily :MEDIUM,alignSelf :"center"}} >Manchester united VS Manchester City</Text>
  <View style={{flexDirection :"row",alignItems :"center", justifyContent :"space-between"
 ,marginVertical :10 }} >
    <View style={{flexDirection : "row",alignItems :"center",marginStart :10}} >
<Entypo  name='location-pin' size={18} color='grey' />
<Text style={{fontSize : 12,fontFamily :LIGHT,alignSelf :"center",marginStart :5}} >Wembley Stadium</Text>

    </View>
    <View style={{flexDirection : "row",alignItems :"center",marginEnd :10,}} >
<Entypo name='calendar' size={18} color='grey' />
<Text style={{fontSize : 12,fontFamily :LIGHT,alignSelf :"center",marginStart :5}} >12-MARCH-2024</Text>

    </View>
  </View>
  <View style={{flexDirection :"row",width :"100%",alignItems: "center",alignSelf :"center",justifyContent:"center",marginVertical :10}} >
    <TouchableOpacity style={{width :'45%',height :38,borderRadius :30,backgroundColor : "#0bda51",marginHorizontal :10,alignItems :"center",justifyContent :"center",flexDirection :"row"}} >
      <Entypo name='add-to-list' size={18} color='white' />
      <Text style={{fontSize :16 ,fontFamily :BOLD, color :"white",marginStart :8}} >Book Now</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width :'45%',height :38,borderRadius :30,backgroundColor : "white",marginEnd :10,alignItems :"center",justifyContent :"center",flexDirection :"row"}} >
      <FontAwesome name='bookmark-o' size={18} color='black' />
      <Text style={{fontSize :16 ,fontFamily :BOLD, color :"black",marginStart :8}} >Save</Text>
    </TouchableOpacity>

  </View>
</View>

    </TouchableOpacity>
  )
}} />
</View>
</ScrollView>

    </View>
  );
}

export default EventListScreen;
