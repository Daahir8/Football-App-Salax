import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


import { BOLD, LIGHT, MEDIUM, THIN } from '../../Theme/fonts'
import { FlatList } from 'react-native-gesture-handler'
const ChatScreen = ({navigation}) => {
const messages = [
    {

    message :"Hello Sergio How are you doing hope you are fine",
    sender : "Me",
    time : "14:50"
},
{

    message :"I am doing fine what about you bro",
    sender : "Sergio ramos",
    time : "14:54"

},
{

    message :"I am fine too i wanna ask about ",
    sender : "Me",
    time : "15:02"
},

{

    message :"a football match you arranged in florida",
    sender : "Me",
    time : "15:02"
},
{

    message :"OH! Nice to hear yes you can ask whatever you have to ask",
    sender : "Sergio ramos",
    time : "15:08"
}
]

  return (
    <View style={{flex :1 ,backgroundColor :"white"}} >
        <View style={{flexDirection :"row",alignItems :"center",backgroundColor :"#04764E",height :120}} >
            <View style={{flexDirection :"row",alignItems :"center",marginTop :40}} >
            <TouchableOpacity style={{marginStart :20}} onPress={()=>{
            navigation.goBack()
        }} >
          <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>
        <View  style={{marginStart :20}} >

        <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
        </View>
        <View style={{marginStart :10}} >


  <Text style={{color :'white', fontSize :16,fontWeight :"600"}} >James Mcgill</Text>



  <View style={{flexDirection :"row",alignItems :"center",marginTop :2}} >
  <Text style={{color :'white', fontSize :12,fontWeight :"400",}} >Online</Text>
<View style={{width :8,height :8, borderRadius :20,backgroundColor :"#42FF00",marginStart :5}}/>
  </View>


  </View>
            </View>
      
        </View>
<View style={{marginTop :20 ,alignItems :"center",justifyContent :"center"}} >
  <Text style={{color :'#383838', fontSize :16,fontWeight :"600",marginTop :10}} >Today</Text>

</View>
        <ScrollView style={{flex :1 ,backgroundColor :"white"}} >

<FlatList style={{marginTop:30}} contentContainerStyle={{marginBottom :"40%"}}  data={messages} renderItem={({item})=>{
    return(
        <View style={{width :'45%',alignSelf :item?.sender == 'Me' ? 'flex-end' :'flex-start', marginStart :item?.sender == 'Me' ? 0 :10 ,marginVertical:8,marginEnd :item?.sender == 'Me' ? 10 :0}} > 
            <View style={{width :"100%",backgroundColor :item?.sender == 'Me' ? '#04764E' : "#F4F8FC",height :"auto",borderRadius :20,borderBottomStartRadius :item?.sender != 'Me' ?0 :20,borderBottomEndRadius :item?.sender == 'Me' ? 0 :20 ,marginStart : item?.sender != 'Me'&& 15
             }} >
<Text  style={{padding:10,color :  item?.sender == 'Me' ? 'white' : "#1C2D57",fontSize :16 ,fontWeight :400}}>{item?.message}</Text>
<View style={{alignSelf :item?.sender == 'Me' ? 'flex-end' :'flex-start'}}> 
<Text  style={{fontSize :10,marginBottom:5,marginEnd : item?.sender == 'Me' ? 8 : 0,fontFamily :LIGHT ,color :  item?.sender == 'Me' ? 'white' : "black",marginStart: item?.sender == 'Me' ? 0 : 8}} >2:30</Text>

     </View>
  
   </View>
   {item?.sender != 'Me' && 
      <View style={{width :30,height :30,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30,marginEnd :10,marginTop :5}} >
      <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />
    
     </View>
     
     }
             </View>
    )
}} />
        </ScrollView>

<View style={{bottom : 0 ,right : 0 , left : 0 , position :"absolute",marginBottom :"11%"}} >

<View style={{flexDirection :"row",alignItems :"center",width :"90%",alignSelf :"center",backgroundColor :'#F4F8FC',height :50,borderRadius :10}} >
    <TouchableOpacity style={{marginHorizontal :15}} >
        <Ionicons name='mic-outline' size={22} color='#04764E' />
    </TouchableOpacity>
    <TextInput placeholder='Write Text here...' placeholderTextColor={'#B0B0B0'} style={{color :"black",width :'60%'}} />
    <TouchableOpacity style={{marginHorizontal :10}} >
        <MaterialCommunityIcons name='sticker-circle-outline' size={22} color='#04764E' />
    </TouchableOpacity>
    <TouchableOpacity style={{marginEnd:10,width :38 , height :38 ,borderRadius : 30,alignItems :"center",justifyContent:"center",backgroundColor :"#04764E"}} >
        <Ionicons name='send-outline' size={18} color='white' />
    </TouchableOpacity>
</View>
</View>


    </View>
  )
}

export default ChatScreen