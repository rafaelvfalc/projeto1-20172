import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

const LoginScreen = require('./views/LoginView')
const RegisterScreen = require('./views/RegisterView')
const ProtectedScreen = require('./views/ProtectedView')
const HomeLogin = require('./views/HomeLogin')
const CreateTrip = require('./views/CreateTrip')
const SearchTravelScreen = require('./views/SearchTravelView')
const ShowTripScreen =  require('./views/TripsView')
const ShowTravelsScreen = require('./views/ShowTravelsView')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#789fbb'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    marginLeft: 50,
    marginRight: 50
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  blueButton: {
    backgroundColor: '#1e698d'
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
    <ScrollView style={styles.container}>
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
      <TouchableHighlight onPress={() => {
        AsyncStorage.removeItem('jwt');
        alert('You have been logged out.');
      }}>
        <Text style={[styles.button, styles.blueButton]}>
          Log Out
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Protected')}>
        <Text style={[styles.button, styles.blueButton]}>
          Protected Content
        </Text>
      </TouchableHighlight>

    <TouchableHighlight onPress={() => navigation.navigate('CreateTrip')}>
      <Text style={[styles.button, styles.blueButton]}>
        CreateTripS
      </Text>
    </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('HomeLogin')}>
        <Text style={[styles.button, styles.blueButton]}>
          Login styled
        </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('SearchTravel')}>
        <Text style={[styles.button, styles.blueButton]}>
          Search Travel
        </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('TripsView')}>
        <Text style={[styles.button, styles.blueButton]}>
          Trips
        </Text>
      </TouchableHighlight>

    </ScrollView>
);

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Buzz Ticket',
    }
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Protected: {
    screen: ProtectedScreen
  },
  CreateTrip: {
    screen: CreateTrip
  },
  HomeLogin: {
    screen: HomeLogin
  },
  SearchTravel: {
    screen: SearchTravelScreen
  },
  ShowTravels: {
    screen: ShowTravelsScreen
  },
  TripsView: {
    screen: ShowTripScreen
  }
});

module.exports = App;
