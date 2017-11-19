import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

const LoginScreen = require('./views/LoginView')
const RegisterScreen = require('./views/RegisterView')
const ProtectedScreen = require('./views/ProtectedView')

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 80,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  blueButton: {
    backgroundColor: '#34AADC'
  },
  redButton: {
    backgroundColor: '#FF3B30',
    color: '#fff'
  },
  greyButton: {
    backgroundColor: '#777',
    color: '#fff'
  }
})

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => navigation.navigate('Register')}>
      <Text style={[styles.button, styles.blueButton]}>
        Register
      </Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
      <Text style={[styles.button, styles.blueButton]}>
        Log In
      </Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => alert('You have been logged out.')}>
      <Text style={[styles.button, styles.blueButton]}>
        Log Out
      </Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate('Protected')}>
      <Text style={[styles.button, styles.blueButton]}>
        Protected Content
      </Text>
    </TouchableHighlight>
  </View>
);

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Buzz Ticket',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Back',
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: 'Back',
    },
  },
  Protected: {
    screen: ProtectedScreen,
    navigationOptions: {
      headerTitle: 'Back',
    },
  },
});

module.exports = App;