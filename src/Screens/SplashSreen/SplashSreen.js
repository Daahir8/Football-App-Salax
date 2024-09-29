import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const ballAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(ballAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [ballAnimation]);

  const ballPosition = ballAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0]  // Updated to move from top to center
  });

  const ballScale = ballAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.2, 1]
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            transform: [
              { translateY: ballPosition },
              { scale: ballScale }
            ],
          },
        ]}
      >
        <Image 
          source={require('../../../assets/images/football.webp')} 
          style={styles.football} 
        />
      </Animated.View>
      <Text style={styles.appName}>Football App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  ball: {
    position: 'absolute',
    top: 300, // Initial position adjusted to be off-screen at the top
  },
  football: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 100,
  },
});

export default SplashScreen;
