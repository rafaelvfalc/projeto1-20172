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

  // Passar dados da pesquisa ate aqui
  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={styles.toptitle}>Trip Info</Text>
        <Button
        style={{marginTop: 20,}}
        title="Voltar"
        onPress={() =>
        alert("Voltar!")
        }
        />
      </View>
    )
  }
}
