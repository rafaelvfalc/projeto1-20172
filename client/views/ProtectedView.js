import React, { Component } from 'react';
import {
    ActivityIndicatorIOS,
    AsyncStorage,
    StyleSheet,
    Text,
    View
  } from 'react-native'

  class ProtectedView extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showIndicator: false,
        secret: null
      }
    }

    componentWillMount() {
      this.setState({
        showIndicator: true
      }, this._fetchData)
    }

    _fetchData = () => {
      AsyncStorage.getItem('jwt', (err, token) => {
        fetch('http://aqueous-oasis-59499.herokuapp.com/protected', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `JWT ${token}`
          }
        })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            secret: json.secret,
            showIndicator: false
          })
        })
        .catch(() => {
          alert('There was an error fetching the secret info.')
        })
        .done()
      })
    }

    _renderIndicator = () => (
      <ActivityIndicatorIOS
        animating
        style={[styles.centering]}
        size='large'
      />
    )

    _renderSecret = () => (
      <Text style={{fontSize:50}}>
        Desculpa pela cerveja!
      </Text>
    )

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.centering}>
            {this.state.secret? this._renderSecret() : <Text>You are not authorized!</Text>}
          </Text>
        </View>
      )
    }
  }

  var styles = StyleSheet.create({
    container: {
      padding: 80,
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
      backgroundColor: '#1e698d'
    },
    centering: {
      flex: 1,
      paddingTop: 28,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }
  })

  module.exports = ProtectedView
