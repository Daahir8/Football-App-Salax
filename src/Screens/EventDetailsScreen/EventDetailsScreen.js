import { View, Text, ImageBackground,TouchableOpacity, Image ,ScrollView,FlatList} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BOLD, LIGHT, MEDIUM, THIN } from '../../Theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const EventDetailsScreen = ({navigation}) => {
const [isActiveLineup , setIsActiveLineup] = useState('MANCHESTER UNITED')

const ATTACK = [{
    name : "Cristiano Ronaldo",
    img : "https://b.fssta.com/uploads/application/soccer/headshots/885.png",
    slot :'Booked'

},
{
    name : "Gareth Bale",
    img : "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--221626eb-bc1c-43d5-b49a-783e547b0fcd/_330782131022.app.png?preferwebp=true&width=312",
    slot :'Booked'

    
},
{
    name : "Benzema",
    img : "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d87c0847-5443-4641-9e08-7425288a549c/_330830945339.app.png?preferwebp=true&width=312",
    slot :'Empty'

},
]

const MID = [{
    name : "Marcelo",
    img : "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a6050025-bc95-40e5-9a8c-eb422e948386/_330782486535.app.png?preferwebp=true&width=312",
    slot :'Booked'

},
{
    name : "Unknown",
    img : "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--221626eb-bc1c-43d5-b49a-783e547b0fcd/_330782131022.app.png?preferwebp=true&width=312",
    slot :'Empty'

    
},
{
    name : "Luka modrić",
    img : "https://b.fssta.com/uploads/application/soccer/headshots/880.vresize.350.350.medium.13.png",
    slot :'Booked'

},
{
    name : "Toni Kroos",
    img : "https://assets.laliga.com/squad/2023/t186/p44989/2048x2048/p44989_t186_2023_1_003_000.png",
    slot :'Booked'

},
]
const DEFEND = [{
    name : "Pepe",
    img : "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--aa7c568b-c3ab-493a-b787-f40433985f56/_330783766291.app.png?preferwebp=true&width=312",
    slot :'Booked'

},
{
    name : "Sergio Ramos",
    img : "https://assets.laliga.com/squad/2023/t179/p17861/2048x2225/p17861_t179_2023_1_001_000.png",
    slot :'Booked'

    
},
{
    name : "Dani Carvajal",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C2kaul9HMMzpfqZ09qtEMKon-MmhPjPAmw&s",
    slot :'Booked'

},
]
  return (
<View style={{flex :1 ,backgroundColor :'white'
}} >
  
<View style={{flexDirection :"row",alignItems :"center",justifyContent :"space-between",marginTop :60,width :"90%",alignSelf:"center"}} >
<TouchableOpacity onPress={()=>{
            navigation.goBack()
        }} style={{}}>
          <AntDesign name="arrowleft" size={26} color="#04764E" />
        </TouchableOpacity>
        <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
            }}>
            Match Details
          </Text>
          <TouchableOpacity onPress={()=>{
        
        }} style={{}}>
          <Ionicons
 name="share-outline" size={26} color="#04764E" />
        </TouchableOpacity>
</View>
    <ScrollView contentContainerStyle={{paddingBottom :"10%"}} style={{flex :1 ,backgroundColor :"white",marginTop :20}} >
    <View 

style={{width :"90%",height :'auto',backgroundColor :"white", marginVertical :10,alignSelf :"center"


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
</View>
<View  style={{alignItems :"center",width :"90%",marginTop :20,justifyContent :"center",alignSelf:"center"}}  >

    <Text style={{textAlign :'center',fontSize :20,alignSelf:"center",fontWeight :"500"}} >Manchester City </Text>
    <Text style={{textAlign :'center',fontSize :18,alignSelf:"center",marginTop :5,fontWeight :"300"}} >$19.99</Text>
  
</View>
<View style={{}} >
<View style={{flexDirection : "row",alignItems :"center",marginTop :40,marginStart:18}} >
<Entypo name='calendar' size={18} color='#04764E' />
<Text style={{fontSize : 14,alignSelf :"center",marginStart :5,color :"#535353"}} > 9:30 PM 12-MARCH-2024</Text>

    </View>
    <View style={{  flexDirection :"row",alignItems :"center",marginStart :15, marginTop :40}} >

<Text style={{fontWeight :'700',fontSize :14,marginStart :5,color :"#202226"}} >Descriptipn</Text>

</View>
    <View style={{width :"90%",alignSelf :"center"}} >
    <Text style={{marginTop :10,fontWeight  :'400',color :"#838383"}} >The dream of an unprecedented ‘double treble’ is no more. Manchester City’s hold on the Champions League was wrestled away by Real Madrid on Wednesday, who will now take on Bayern Munich for a place in this season’s showpiece fixture.
After a thrilling 120 minutes in Manchester, Bernardo Silva and Mateo Kovacic both missed from the spot as City, the defending champions, were beaten 4-3 on penalties after their thrilling quarter-final tie ended 4-4 on aggregate.
“I don’t know what to say, it’s just frustrating,” a bemused Ruben Dias told TNT Sports after the match. “We dominated the game, the whole game. Until the penalties, the effort was there. We had our chances but it's obviously difficult to take.”

</Text>
</View>
    {/* <View style={{width :"85%", height :75,backgroundColor :"#04764E",alignSelf :"center",marginTop :20,flexDirection :"row",borderRadius :10
}} >
    <View style={{width :"50%",height :"100%",alignItems :"center",justifyContent :"center",borderRightWidth :0.5,borderColor :"grey"}} >
    <Text style={{fontWeight :'500',color: "white", fontSize :16,textAlign :"center"}} >Total Slots</Text>
        <Text style={{fontWeight :'500',color: "white", fontSize :14,marginTop :3}} >12</Text>




    </View>
    <View style={{width :"50%",height :"100%",alignItems :"center",justifyContent :"center",bordereLefttWidth :0.5,borderColor :"grey"}} >
    <Text style={{fontWeight :'500',color: "white", fontSize :16,textAlign :"center"}} >Rema Slots</Text>
        <Text style={{fontWeight :'500',color: "white", fontSize :14,marginTop :3}} >12</Text>



    </View>
</View> */}
   
    <View style={{width :"100%",height :150,marginVertical :30}} >
    <View style={{flexDirection :"row",alignItems :"center",alignSelf :"center"}} >
<Entypo name='location-pin' size={16}color='#04764E' />
<Text style={{color :'#04764E', fontSize :14,fontWeight :"bold"}} >6391 Elgin St. Celina, Delaware 10299</Text>

</View>
        <Image source={{uri  :"https://strikefans.com/wp-content/uploads/2020/07/wembleystadiummap.png"}} style={{width :"93%" ,height :"100%" ,marginVertical:10 ,borderWidth :1,alignSelf :"center",borderRadius :10, 
        }} />
    </View>
 

</View>
<View style={{  flexDirection :"row",alignItems :"center",marginStart :15, marginTop :30}} >

<Text style={{fontWeight :'700',fontSize :18,marginStart :5,color :"#04764E"}} >Lineup</Text>
</View>

<View style={{width :"100%",backgroundColor :"white",marginTop : 20,justifyContent :"center",height :"auto",marginBottom :'40%'}} >

<View style={{width :"100%",height :45,alignItems :"center", justifyContent :"center",backgroundColor :"#04764E",flexDirection :"row"}} >


<Text style={{fontSize :20,color :"white",fontWeight :"bold" ,textAlign :"center",alignSelf :"center"
}} >ATTACK</Text>
<Image style={{width :30 ,height :30 ,marginStart :5}} source={require('../../../assets/images/attacker.png')} />
</View>

<View style={{width :"100%",borderWidth :0.5 ,borderColor :"grey",height :'auto',justifyContent:"center",alignSelf :"center",}} >
    <FlatList style={{alignSelf :"center",}} horizontal data={ATTACK} renderItem={({item})=>{
     return (
<TouchableOpacity  style={{justifyContent :"center",marginHorizontal :15,alignItems :"center",marginVertical :10,alignSelf :"center",}} >
  

   
          <>
   <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
                      <Text style={{alignSelf :"center",fontSize :12}} >{item?.name}</Text>
                      </>



</TouchableOpacity>
     )
    }}/>
</View>
<View style={{width :"100%",height :45,alignItems :"center", justifyContent :"center",backgroundColor :"#04764E",flexDirection :"row"}} >


<Text style={{fontSize :20,color :"white",fontWeight :"bold" ,textAlign :"center",alignSelf :"center"
}} >MID</Text>
<Image style={{width :30 ,height :30 ,marginStart :5}} source={require('../../../assets/images/midfielder.png')} />
</View>
<View style={{width :"100%",borderWidth :0.5 ,borderColor :"grey",height :'auto',justifyContent:"center",alignSelf :"center",}} >
    <FlatList style={{alignSelf :"center",}} horizontal data={MID} renderItem={({item})=>{
     return (
<TouchableOpacity  style={{justifyContent :"center",marginHorizontal :15,alignItems :"center",marginVertical :10,alignSelf :"center",}} >
  

   
  <>
<View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
<Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

</View>
              <Text style={{alignSelf :"center",fontSize :12}} >{item?.name}</Text>
              </>



</TouchableOpacity>
     )
    }}/>
</View>
<View style={{width :"100%",height :45,alignItems :"center", justifyContent :"center",backgroundColor :"#04764E",flexDirection :"row"}} >


<Text style={{fontSize :20,color :"white",fontWeight :"bold" ,textAlign :"center",alignSelf :"center"
}} >DEFEND</Text>
<Image style={{width :30 ,height :30 ,marginStart :5}} source={require('../../../assets/images/defender.png')} />
</View>
<View style={{width :"100%",borderWidth :0.5 ,borderColor :"grey",height :'auto',justifyContent:"center",alignSelf :"center",}} >
    <FlatList style={{alignSelf :"center",}} horizontal data={DEFEND} renderItem={({item})=>{
     return (
<TouchableOpacity  style={{justifyContent :"center",marginHorizontal :15,alignItems :"center",marginVertical :10,alignSelf :"center",}} >
  

   
  <>
<View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
<Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

</View>
              <Text style={{alignSelf :"center",fontSize :12}} >{item?.name}</Text>
              </>



</TouchableOpacity>
     )
    }}/>
</View>
<View style={{width :"100%",height :45,alignItems :"center", justifyContent :"center",backgroundColor :"#04764E",flexDirection :"row"}} >


<Text style={{fontSize :20,color :"white",fontWeight :"bold" ,textAlign :"center",alignSelf :"center"
}} >GOAL KEEPER</Text>
<Image style={{width :30 ,height :30 ,marginStart :5}} source={require('../../../assets/images/goalkeeper.png')} />
</View>
<View style={{width :"100%",borderWidth :0.5 ,borderColor :"grey",height :80,justifyContent:"center"}} >
<TouchableOpacity  style={{justifyContent :"center",marginHorizontal :15,alignItems :"center",marginVertical :10,alignSelf :"center",}} >
  

   
    
   <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
                      <Text style={{alignSelf :"center",fontSize :12}} >Casislas</Text>
       



</TouchableOpacity>
</View>
<View style={{width :"100%",height :45,alignItems :"center", justifyContent :"center",backgroundColor :"#04764E",flexDirection :"row"}} >


<Text style={{fontSize :20,color :"white",fontWeight :"bold" ,textAlign :"center",alignSelf :"center"
}} >COACH</Text>
<Image style={{width :30 ,height :30 ,marginStart :5}} source={require('../../../assets/images/coach.png')} />
</View>
<View style={{width :"100%",borderWidth :0.5 ,borderColor :"grey",height :80,justifyContent:"center"}} >
<TouchableOpacity  style={{justifyContent :"center",marginHorizontal :15,alignItems :"center",marginVertical :10,alignSelf :"center",}} >
  

   
          <>
   <View style={{width :43,height :43,borderWidth :2 ,borderColor :"#04764E",alignItems :"center",borderRadius :30}} >
  <Image source={{uri : "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"}} style={{width :'100%',height :"100%",borderRadius :30,borderWidth :3,borderColor :"white"}} />

 </View>
                      <Text style={{alignSelf :"center",fontSize :12}} >Zidane</Text>
                      </>



</TouchableOpacity>
</View>
</View>


    </ScrollView>
    <TouchableOpacity
          onPress={() => {
        navigation.navigate('EventBooking')
          }}
          style={{
            width: '90%',
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
            marginTop:50,
            bottom :0,position :"absolute"
            ,marginBottom :"15%"
          }}>
          <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
          Participate
          </Text>
        </TouchableOpacity>
</View>

  )
}

export default EventDetailsScreen