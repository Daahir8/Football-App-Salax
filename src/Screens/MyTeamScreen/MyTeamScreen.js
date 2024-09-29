import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Modalize} from 'react-native-modalize';
const MyTeamScreen = ({navigation}) => {
  const players = useRef();

  const ATTACK = [
    {
      name: 'Cristiano Ronaldo',
      img: 'https://b.fssta.com/uploads/application/soccer/headshots/885.png',
      slot: 'Booked',
    },
    {
      name: 'Gareth Bale',
      img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--221626eb-bc1c-43d5-b49a-783e547b0fcd/_330782131022.app.png?preferwebp=true&width=312',
      slot: 'Booked',
    },
    {
      name: 'Benzema',
      img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--d87c0847-5443-4641-9e08-7425288a549c/_330830945339.app.png?preferwebp=true&width=312',
      slot: 'Empty',
    },
  ];

  const MID = [
    {
      name: 'Marcelo',
      img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a6050025-bc95-40e5-9a8c-eb422e948386/_330782486535.app.png?preferwebp=true&width=312',
      slot: 'Booked',
    },
    {
      name: 'Unknown',
      img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--221626eb-bc1c-43d5-b49a-783e547b0fcd/_330782131022.app.png?preferwebp=true&width=312',
      slot: 'Empty',
    },
    {
      name: 'Luka modrić',
      img: 'https://b.fssta.com/uploads/application/soccer/headshots/880.vresize.350.350.medium.13.png',
      slot: 'Booked',
    },
    {
      name: 'Toni Kroos',
      img: 'https://assets.laliga.com/squad/2023/t186/p44989/2048x2048/p44989_t186_2023_1_003_000.png',
      slot: 'Booked',
    },
  ];
  const DEFEND = [
    {
      name: 'Pepe',
      img: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--aa7c568b-c3ab-493a-b787-f40433985f56/_330783766291.app.png?preferwebp=true&width=312',
      slot: 'Booked',
    },
    {
      name: 'Sergio Ramos',
      img: 'https://assets.laliga.com/squad/2023/t179/p17861/2048x2225/p17861_t179_2023_1_001_000.png',
      slot: 'Booked',
    },
    {
      name: 'Dani Carvajal',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C2kaul9HMMzpfqZ09qtEMKon-MmhPjPAmw&s',
      slot: 'Booked',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 80,
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{marginStart: 15}}>
          <Ionicons name="arrow-back" size={32} color="#04764E" />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
            }}>
            My Team
          </Text>
        </View>
        <View style={{width: 47}} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            marginTop: 40,
            justifyContent: 'center',
            height: 'auto',
            marginBottom: '20%',
          }}>
          <View
            style={{
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#04764E',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              ATTACK
            </Text>
            <Image
              style={{width: 30, height: 30, marginStart: 5}}
              source={require('../../../assets/images/attacker.png')}
            />
          </View>

          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 'auto',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FlatList
              style={{alignSelf: 'center'}}
              horizontal
              data={ATTACK}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      players.current.open();
                    }}
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 15,
                      alignItems: 'center',
                      marginVertical: 10,
                      alignSelf: 'center',
                    }}>
                    <>
                      <View
                        style={{
                          width: 43,
                          height: 43,
                          borderWidth: 2,
                          borderColor: '#04764E',
                          alignItems: 'center',
                          borderRadius: 30,
                        }}>
                        <Image
                          source={{
                            uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 30,
                            borderWidth: 3,
                            borderColor: 'white',
                          }}
                        />
                      </View>
                      <Text style={{alignSelf: 'center', fontSize: 12}}>
                        {item?.name}
                      </Text>
                    </>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#04764E',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              MID
            </Text>
            <Image
              style={{width: 30, height: 30, marginStart: 5}}
              source={require('../../../assets/images/midfielder.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 'auto',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FlatList
              style={{alignSelf: 'center'}}
              horizontal
              data={MID}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      players.current.open();
                    }}
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 15,
                      alignItems: 'center',
                      marginVertical: 10,
                      alignSelf: 'center',
                    }}>
                    <>
                      <View
                        style={{
                          width: 43,
                          height: 43,
                          borderWidth: 2,
                          borderColor: '#04764E',
                          alignItems: 'center',
                          borderRadius: 30,
                        }}>
                        <Image
                          source={{
                            uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 30,
                            borderWidth: 3,
                            borderColor: 'white',
                          }}
                        />
                      </View>
                      <Text style={{alignSelf: 'center', fontSize: 12}}>
                        {item?.name}
                      </Text>
                    </>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#04764E',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              DEFEND
            </Text>
            <Image
              style={{width: 30, height: 30, marginStart: 5}}
              source={require('../../../assets/images/defender.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 'auto',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FlatList
              style={{alignSelf: 'center'}}
              horizontal
              data={DEFEND}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      players.current.open();
                    }}
                    style={{
                      justifyContent: 'center',
                      marginHorizontal: 15,
                      alignItems: 'center',
                      marginVertical: 10,
                      alignSelf: 'center',
                    }}>
                    <>
                      <View
                        style={{
                          width: 43,
                          height: 43,
                          borderWidth: 2,
                          borderColor: '#04764E',
                          alignItems: 'center',
                          borderRadius: 30,
                        }}>
                        <Image
                          source={{
                            uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 30,
                            borderWidth: 3,
                            borderColor: 'white',
                          }}
                        />
                      </View>
                      <Text style={{alignSelf: 'center', fontSize: 12}}>
                        {item?.name}
                      </Text>
                    </>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#04764E',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              GOAL KEEPER
            </Text>
            <Image
              style={{width: 30, height: 30, marginStart: 5}}
              source={require('../../../assets/images/goalkeeper.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 80,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                players.current.open();
              }}
              style={{
                justifyContent: 'center',
                marginHorizontal: 15,
                alignItems: 'center',
                marginVertical: 10,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  width: 43,
                  height: 43,
                  borderWidth: 2,
                  borderColor: '#04764E',
                  alignItems: 'center',
                  borderRadius: 30,
                }}>
                <Image
                  source={{
                    uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: 'white',
                  }}
                />
              </View>
              <Text style={{alignSelf: 'center', fontSize: 12}}>Casislas</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#04764E',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              COACH
            </Text>
            <Image
              style={{width: 30, height: 30, marginStart: 5}}
              source={require('../../../assets/images/coach.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 80,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                players.current.open();
              }}
              style={{
                justifyContent: 'center',
                marginHorizontal: 15,
                alignItems: 'center',
                marginVertical: 10,
                alignSelf: 'center',
              }}>
              <>
                <View
                  style={{
                    width: 43,
                    height: 43,
                    borderWidth: 2,
                    borderColor: '#04764E',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={{
                      uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 30,
                      borderWidth: 3,
                      borderColor: 'white',
                    }}
                  />
                </View>
                <Text style={{alignSelf: 'center', fontSize: 12}}>Zidane</Text>
              </>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
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
          marginBottom: '10%',
        }}>
        <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
          Save
        </Text>
      </TouchableOpacity>
      <Modalize
        modalStyle={{
          padding: 20,
        }}
        handleStyle={{
          backgroundColor: 'grey',
          width: 60,
          height: 6,
          borderRadius: 3,
          alignSelf: 'center',
          marginBottom: 20,
        }}
        ref={players}
        modalHeight={Dimensions.get('window').height / 1.65}>
        <Text
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 22,
            color: 'black',
            fontWeight: '500',
            marginTop: 20,
          }}>
          Select Players
        </Text>
        <FlatList
          data={[1, 2, 3]}
          style={{marginTop: 20}}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  alignSelf: 'center',
                  height: 60,
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 43,
                      height: 43,
                      borderWidth: 2,
                      borderColor: '#04764E',
                      alignItems: 'center',
                      borderRadius: 30,
                    }}>
                    <Image
                      source={{
                        uri: 'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 30,
                        borderWidth: 3,
                        borderColor: 'white',
                      }}
                    />
                  </View>

                  <View style={{marginStart: 15, marginTop: 2}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#334155',
                      }}>
                      Devone lane
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 14,
                        fontWeight: '300',
                        color: '#334155',
                        marginTop: 5,
                      }}>
                      Get Ready for The Match!.
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: '#D9EFE7',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                    }}>
                    <MaterialIcons name="message" size={22} color="#04764E" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginStart: 10}}>
                    <AntDesign name="arrowright" size={22} color="#04764E" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </Modalize>
    </View>
  );
};

export default MyTeamScreen;
