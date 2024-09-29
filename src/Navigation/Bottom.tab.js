import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import MessagesScreen from '../Screens/MessagesScreen/MessagesScreen';
import EventsScreen from '../Screens/EventsScreen/EventsScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import HomeScreenIcon from '../../assets/SVGicons/HomeScreenIconActive';
import {BOLD, REGULAR} from '../Theme/fonts';
import BookingsScreen from '../Screens/BookingsScreen/BookingsScreen';
import EventsScreenIcon from '../../assets/SVGicons/EventsScreenIconActive';
import MessagesScreenIcon from '../../assets/SVGicons/MessagesScreenIconActive';
import BookingsScreenIcon from '../../assets/SVGicons/BookingsScreenIconActive';
import EventListScreen from '../Screens/EventListScreen/EventListScreen';
import EventDetailsScreen from '../Screens/EventDetailsScreen/EventDetailsScreen';
import EventBookingScreen from '../Screens/EventBookingScreen/EventBookingScreen';
import AddEvent from '../Screens/AddEvent/AddEvent';
import BookingConfirmedScreen from '../Screens/BookingConfirmedScreen/BookingConfirmedScreen';
import BookingDetailsScreen from '../Screens/BookingDetailsScreen/BookingDetailsScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import HomeScreenIconActive from '../../assets/SVGicons/HomeScreenIconActive';
import HomeScreenIconInActive from '../../assets/SVGicons/HomeScreenIconInActive';
import MessagesScreenIconActive from '../../assets/SVGicons/MessagesScreenIconActive';
import MessagesScreenIconInActive from '../../assets/SVGicons/MessagesScreenIconInActive';
import BookingsScreenIconActive from '../../assets/SVGicons/BookingsScreenIconActive';
import BookingsScreenIconInActive from '../../assets/SVGicons/BookingsScreenIconInActive';
import EventsScreenIconActive from '../../assets/SVGicons/EventsScreenIconActive';
import EventsScreenIconInActive from '../../assets/SVGicons/EventsScreenIconInActive';
import AddMatchPost from '../Screens/AddMatchPost/AddMatchPost';
import Entypo from 'react-native-vector-icons/Entypo';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailsScreen} />

      <Stack.Screen name="EventBooking" component={EventBookingScreen} />

      <Stack.Screen
        name="BookingConfirmed"
        component={BookingConfirmedScreen}
      />
    </Stack.Navigator>
  );
};
const EventsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EventList" component={EventListScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailsScreen} />
      <Stack.Screen name="EventBooking" component={EventBookingScreen} />
      <Stack.Screen
        name="BookingConfirmed"
        component={BookingConfirmedScreen}
      />
    </Stack.Navigator>
  );
};
const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookingScreen" component={BookingsScreen} />
      <Stack.Screen
        name="BookingDetailsScreen"
        component={BookingDetailsScreen}
      />
    </Stack.Navigator>
  );
};
const MessagesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 80,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                  }}>
                  {/* <View style={{marginTop : -5}} > */}

                  {focused ? (
                    <HomeScreenIconActive />
                  ) : (
                    <HomeScreenIconInActive />
                  )}
                  {/* </View> */}
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                  }}>
                  {/* <View style={{marginTop : -5}} > */}

                  {focused ? (
                    <MessagesScreenIconActive />
                  ) : (
                    <MessagesScreenIconInActive />
                  )}
                  {/* </View> */}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddMatchPost"
        component={AddMatchPost}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 65,
                  height: 65,
                  borderRadius: 50,
                  backgroundColor: '#04764E',
                  marginTop: -50,
                }}>
                <Entypo name="plus" size={50} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                  }}>
                  {/* <View style={{marginTop : -5}} > */}

                  {focused ? (
                    <EventsScreenIconActive />
                  ) : (
                    <EventsScreenIconInActive />
                  )}
                  {/* </View> */}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                  }}>
                  {/* <View style={{marginTop : -5}} > */}

                  {focused ? (
                    <BookingsScreenIconActive />
                  ) : (
                    <BookingsScreenIconInActive />
                  )}
                  {/* </View> */}
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
