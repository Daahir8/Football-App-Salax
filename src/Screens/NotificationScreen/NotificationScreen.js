import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const NotificationScreen = ({navigation}) => {
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
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
            }}>
            Notifications
          </Text>
        </View>
      </View>
      <FlatList data={[1,2,3]} style={{marginTop:20}} renderItem={({item})=>{
        return(
            <View style={{flexDirection :"row",alignItems :"center",width :"90%",alignSelf :"center",height :60,marginTop :10,justifyContent:"space-between"}} >
                <View style={{flexDirection :"row",alignItems: "center"}} >

 <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>

<View style={{marginStart :15,marginTop:2}} >
<Text style={{fontSize :14 ,fontWeight :"600" ,color: "#334155"}} >Your participation is approved.</Text>
<Text numberOfLines={1} style={{fontSize :14 ,fontWeight :"300" ,color: "#334155",marginTop :5}} >Get Ready for The Match!.</Text>

</View>
</View>
<View style={{alignItems:"center"}} >
<Text style={{fontSize :12 ,fontWeight :"400" ,color: "#334155"}} >1h</Text>
<TouchableOpacity style={{marginTop :2}} >
    <Feather name='more-horizontal' size={20} color='#1E293B' />
</TouchableOpacity>
    </View>









            </View>
        )
      }} />
    </View>
  )
}

export default NotificationScreen