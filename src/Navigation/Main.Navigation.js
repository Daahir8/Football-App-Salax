import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './Bottom.tab';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import SplashSreen from '../Screens/SplashSreen/SplashSreen';
import OnBoarding1 from '../Screens/OnBoarding1/OnBoarding1';
import OnBoarding2 from '../Screens/OnBoarding2/OnBoarding2';
import OnBoarding3 from '../Screens/OnBoarding3/OnBoarding3';
import OnBoarding4 from '../Screens/OnBoarding4/OnBoarding4';
import PreLogin from '../Screens/PreLogin/PreLogin';
import ForgotPassword from '../Screens/ForgotPassword/ForgotPassword';
import VerifyOTP from '../Screens/VerifyOTP/VerifyOTP';
import ResetPassword from '../Screens/ResetPassword/ResetPassword';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';
import MyTeamScreen from '../Screens/MyTeamScreen/MyTeamScreen';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>


    <Stack.Navigator screenOptions={{headerShown : false}} >
    <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
    <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
    <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
    <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
    <Stack.Screen name="PreLogin" component={PreLogin} />
    <Stack.Screen name="Splash" component={SplashSreen} />
    <Stack.Screen name="Login" component={LoginScreen} />

    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Notifications" component={NotificationScreen} />
    <Stack.Screen name="MyTeam" component={MyTeamScreen} />

      <Stack.Screen name="Tab" component={BottomTab} />
 
    </Stack.Navigator>
    </NavigationContainer>

  );
}

export default MainNavigation