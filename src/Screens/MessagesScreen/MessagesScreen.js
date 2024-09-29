import { View, Text,TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../Componnets/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { BOLD, LIGHT, MEDIUM } from '../../Theme/fonts'
import { FlatList } from 'react-native-gesture-handler'
const MessagesScreen = ({navigation}) => {
  return (
    <View style={{flex : 1 ,backgroundColor : "white"}} >
    {/* <Header name={'MESSAGES'} /> */}
<View style={{alignItems :"center",justifyContent :"center",marginTop :65}} >
  <Text style={{alignSelf :"center",fontSize :22,fontWeight :"500",color :"black"}} >Messages</Text>
</View>
<View style={{width :"90%",height :40,backgroundColor :'#F6F6F6',borderRadius :12,flexDirection :"row",alignItems :"center",justifyContent :"space-between",alignSelf :"center",marginTop :30}} >
  <View style={{flexDirection :"row",alignItems :"center",height :45}} >
    <AntDesign name='search1' size={20} color='#838383' style={{marginStart :14,marginEnd :10}} />
    <TextInput placeholder='Search here' placeholderTextColor={'#838383'} style={{fontSize :12,color :"black",height :45,width  :"80%"}}  />
  </View>
  <TouchableOpacity style={{marginEnd :12}}  >
  <AntDesign name='filter' size={20} color='#838383' />
  </TouchableOpacity>


</View>
<FlatList contentContainerStyle={{marginTop :20}} data={[1,2,3]} 
renderItem={({item})=>{
return(
<TouchableOpacity onPress={()=>{
  navigation.navigate('ChatScreen')
}} style={{flexDirection :"row",alignItems:"center",justifyContent :"space-between",width :"95%",alignSelf :"center",height :'auto'}} >
<View style={{flexDirection :"row",justifyContent :"space-between",margin: 10}} >
  <View style={{flexDirection :"row",alignItems :"center"}} >
 <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
 <View style={{marginStart :10}} >
 <View style={{width :"90%",justifyContent :"space-between",flexDirection :"row",alignItems :"center",}} >

  <Text style={{color :'black', fontSize :13.3,fontWeight :"600"}} >Charity Match</Text>
  <Text style={{color :'#7F7F7F', fontSize :10.9,fontWeight :"400",marginBottom:5,alignSelf :"flex-start"}} >10 Hours ago</Text>

 </View>
  
<Text style={{color :'#BDBDBD', fontSize :10,fontWeight :"500",marginTop :4}} >How are you doing</Text>


  </View>
  </View>
 



  
</View>

  </TouchableOpacity>
)
}}
/>
    </View>
  )
}

export default MessagesScreen