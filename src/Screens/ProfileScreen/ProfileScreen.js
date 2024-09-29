import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'



const ProfileScreen = ({navigation}) => {
    const buttons = [
        {
        name : "My Team"
    },
    {
        name : "My Team"
        
    },
    {
        name : "My Team"
    },
    {
        name : "My Team"
    },
    {
        name : "My Team"
    },
]
  return (
    <View style={{flex : 1 , backgroundColor :"white"}} >
<View style={{height :197 ,width :"100%",alignItems :"center",justifyContent :"flex-end",backgroundColor : "#04764E",borderRadius :54,borderTopStartRadius : 0 ,borderTopEndRadius :0}} >

<Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :109,height :109,borderRadius :80,borderWidth :10,borderColor :"white",marginBottom :-30}} />
<TouchableOpacity onPress={()=>{
    navigation.goBack()
}} style={{position:"absolute",top: 0,left :0,marginTop :50,marginStart :20}} >
<AntDesign name="arrowleft" size={28} color="white" />
</TouchableOpacity>
</View>
<View style={{alignItems :"center"}} >
    <Text style={{fontSize :20,fontWeight :700,color :"#121212",marginTop :40}} >Devon Lane</Text>
    <Text style={{fontSize :16,fontWeight :700,color :"#6A717B",marginTop :2}} >Devon Lane@example.com</Text>
    </View>
    <View style={{marginTop:50}} >
    <TouchableOpacity onPress={()=>{
        navigation.navigate('MyTeam')
    }} style={{width :"80%",alignSelf :"center",flexDirection :"row",alignItems :"center",height :45}} > 
            <View style={{width :36 ,height :36 ,backgroundColor: "#D9EFE7",alignItems :"center",justifyContent :"center",borderRadius :30}} >
                <FontAwesome6 name='people-group' size={20} color='#04764E' />
            </View>
            <Text style={{fontWeight :"400" ,color: "#5C5C5C",fontSize :16,marginStart :20}} >My Team</Text>

            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{
        navigation.navigate('Notifications')
    }} style={{width :"80%",alignSelf :"center",flexDirection :"row",alignItems :"center",marginTop :10,height :45}} > 
            <View style={{width :36 ,height :36 ,backgroundColor: "#D9EFE7",alignItems :"center",justifyContent :"center",borderRadius :30}} >
                <MaterialIcons name='notifications-none' size={24} color='#04764E' />
            </View>
            <Text style={{fontWeight :"400" ,color: "#5C5C5C",fontSize :16,marginStart :20}} >Notifications</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{width :"80%",alignSelf :"center",flexDirection :"row",alignItems :"center",marginTop :10,height :45}} > 
            <View style={{width :36 ,height :36 ,backgroundColor: "#D9EFE7",alignItems :"center",justifyContent :"center",borderRadius :30}} >
                <Feather name='lock' size={22} color='#04764E' />
            </View>
            <Text style={{fontWeight :"400" ,color: "#5C5C5C",fontSize :16,marginStart :20}} >Privacy</Text>


            </TouchableOpacity>
            <TouchableOpacity style={{width :"80%",alignSelf :"center",flexDirection :"row",alignItems :"center",marginTop :10,height :45}} > 
            <View style={{width :36 ,height :36 ,backgroundColor: "#D9EFE7",alignItems :"center",justifyContent :"center",borderRadius :30}} >
                <Feather name='settings' size={24} color='#04764E' />
            </View>
            <Text style={{fontWeight :"400" ,color: "#5C5C5C",fontSize :16,marginStart :20}} >Settings</Text>

            </TouchableOpacity>
         
            <TouchableOpacity style={{width :"80%",alignSelf :"center",flexDirection :"row",alignItems :"center",marginTop :10,height :45}} > 
            <View style={{width :36 ,height :36 ,backgroundColor: "#D9EFE7",alignItems :"center",justifyContent :"center",borderRadius :30}} >
                <SimpleLineIcons name='logout' size={20} color='#04764E' />
            </View>
            <Text style={{fontWeight :"400" ,color: "#5C5C5C",fontSize :16,marginStart :20}} >Log out</Text>

            </TouchableOpacity>
        </View>

    </View>
  )
}

export default ProfileScreen