import { View, Text,TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MEDIUM } from '../../Theme/fonts'
import { TextInput } from 'react-native-gesture-handler'

const AddEvent = () => {
  return (
    <View>
         <View style={{ flexDirection: 'row', marginTop: 80, width: '100%', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginStart: 15 }}>
          <Ionicons name='arrow-back' size={32} color='black' />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ textAlign: 'center',fontSize :18,marginBottom :5,fontFamily :MEDIUM }}>Create League</Text>
        </View>
        <View style={{ width: 47 }} />
      </View>

        <ScrollView style={{width :"90%", alignSelf :"center"}} >
          <View style={{width :"100%",flexDirection :"row",alignItems :"center",backgroundColor : "#BEBEBE",marginTop :30,borderRadius}} >
<TextInput placeholderTextColor={'grey'} placeholder='League Name' style={{width :"100%",height :45,marginStart :10}} />


          </View>
        </ScrollView>

    </View>
  )
}

export default AddEvent