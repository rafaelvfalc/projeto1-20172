import React, { Component } from 'react'
import { View, TouchableHighlight, Text, AsyncStorage, ScrollView } from 'react-native'

// Styles
import styles from './Styles/HomeScreenStyles'

type Props = {
  navigation: Object,
}

export default class HomeScreen extends Component {
  props: Props;
  render () {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={[styles.button, styles.blueButton]}>
            Register
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('LoginScreen')}>
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
        <TouchableHighlight onPress={() => navigation.navigate('ProtectedScreen')}>
          <Text style={[styles.button, styles.blueButton]}>
            Protected Content
          </Text>
        </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('CreateTripScreen')}>
        <Text style={[styles.button, styles.blueButton]}>
          CreateTripS
        </Text>
      </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('HomeLoginScreen')}>
          <Text style={[styles.button, styles.blueButton]}>
            Login styled
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('SearchTravelScreen')}>
          <Text style={[styles.button, styles.blueButton]}>
            Search Travel
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('TripScreen')}>
          <Text style={[styles.button, styles.blueButton]}>
            Trips
          </Text>
        </TouchableHighlight>

      </ScrollView>
    )
  }
}
