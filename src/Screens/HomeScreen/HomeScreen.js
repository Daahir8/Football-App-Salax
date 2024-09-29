import { View, Text, TextInput, ScrollView, TouchableOpacity, Image,FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Componnets/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BOLD, LIGHT, MEDIUM, REGULAR, THIN } from '../../Theme/fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const HomeScreen = ({navigation}) => {
  const [readMore , setReadMore] = useState(false)
  return (
    <View style={{flex : 1 ,backgroundColor : "white"}} >
{/* <Header name={'HOME'} /> */}
<View style={{flexDirection :"row",alignItems :"center",marginTop :65,justifyContent :"space-between"}} >
  <View style={{marginStart :10}} >

<Text style={{fontSize :32,fontWeight :"500"}} >Today</Text>
<Text style={{fontSize :14,fontWeight :"400"}} >Tuesday, June 7, 2024</Text>
</View>
<View style={{marginEnd :10,flexDirection :"row"}} >
<TouchableOpacity onPress={()=>{
navigation.navigate('Profile')
}} style={{width :40 ,height :40,backgroundColor :"#F6F6F6",borderRadius :50,alignItems :"center",justifyContent: "center",
}} >
  <AntDesign name='user' size={24} color='' />
</TouchableOpacity>
<TouchableOpacity  onPress={()=>{
navigation.navigate('Notifications')
}}  style={{width :40 ,height :40,backgroundColor :"#F6F6F6",borderRadius :50,alignItems :"center",justifyContent: "center", marginStart : 10
}} >
  <Ionicons name='notifications-outline' size={24} color='black'/>
  <View style={{width :8 ,height :8 ,backgroundColor :"#04764E",top :0 ,right :0,position :"absolute",margin :10,borderRadius :10}}/>

</TouchableOpacity>
</View>
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

<FlatList contentContainerStyle={{marginTop :15,marginBottom :"20%"}} data={[1,2,3]} 
renderItem={({item})=>{
return(
<TouchableOpacity 
onPress={()=>{
  navigation.navigate('EventDetail')
}}
style={{width :"90%",height :'auto',backgroundColor :"white", marginVertical :10,alignSelf :"center"

,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
borderTopStartRadius :20
,borderTopEndRadius :20
,borderBottomStartRadius :20,
borderBottomEndRadius :20
}} >
<View style={{flexDirection :"row",justifyContent :"space-between",margin: 10}} >
  <View style={{flexDirection :"row",alignItems :"center"}} >
 <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
 <View style={{marginStart :10}} >
 
  <Text style={{color :'black', fontSize :13.3,fontWeight :"600"}} >Charity Match</Text>

  
<Text style={{color :'#535353', fontSize :10,fontWeight :"500",marginVertical :2}} >Posted by Kumar</Text>
<View style={{flexDirection :"row",alignItems :"center"}} >
<Entypo name='location-pin' size={10}color='#04764E' />
<Text style={{color :'#04764E', fontSize :10,fontWeight :"400"}} >6391 Elgin St. Celina, Delaware 10299</Text>

</View>

  </View>
  </View>
  <View style={{}} >
  <Text style={{color :'#7F7F7F', fontSize :10.9,fontWeight :"400",marginBottom:5,alignSelf :"flex-end"}} >10 Hours ago</Text>
  <View style={{flexDirection :"row",alignItems :"center",alignSelf :"flex-end"}} >
    <Ionicons name='people-outline' size={10} color='#04764E'/>
  <Text style={{color :'#04764E', fontSize :9.17,fontWeight :"400",marginStart :2}} >22 Persons</Text>

  </View>


  </View>
</View>
<Image source={{uri :"https://c8.alamy.com/comp/2J26JWT/vertical-shot-of-a-soccer-ball-on-football-field-2J26JWT.jpg"}} style={{width :"100%",height:390,marginTop :10,borderRadius :20}} />
</TouchableOpacity>
)
}}
/>
    </View>
  )
}

export default HomeScreen