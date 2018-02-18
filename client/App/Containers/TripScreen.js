import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation'

import styles from './Styles/TripScreenStyles'

export default class TripScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={styles.toptitle}>Trip Info</Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Route:
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Data:
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Hour:
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Weekly/Holiday
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Price:
        </Text>
        <Button
        style={{marginTop: 20,}}
        title="Buy Ticket"
        onPress={() =>
        alert("Buy ticket functionality")
        }
        />
        <Button
        style={{marginTop: 20,}}
        title="Backto search trip screen"
        onPress={() =>
        alert("Back")
        }
        />
      </View>
    )
  }
}
