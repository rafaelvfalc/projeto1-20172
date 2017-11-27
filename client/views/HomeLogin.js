import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableHighlight,
  Image
} from 'react-native';

class HomeLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <Image
          source={{uri: 'https://www.materialui.co/materialIcons/maps/directions_bus_white_192x192.png'}}
        />
        <Text style={styles.title}>BuzzTicket</Text>

        <Text style={styles.text}>"Don't have an account?"</Text>
        <Text style={styles.text}>Sign up</Text>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#789fbb'
    },
    title: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center'
    },
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 10
    }
  })


module.exports = HomeLogin
