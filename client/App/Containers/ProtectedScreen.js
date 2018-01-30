import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicatorIOS,
  AsyncStorage,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native'

import styles from './Styles/ProtectedScreenStyles'

type Props = {
  navigation: Object,
}

class ProtectedScreen extends Component {

  props: Props;
  _renderSecret () {
    const { navigation } = this.props;
    return (
      <View>
      <Text style={styles.toptitle}>Menu Principal</Text>
      <TouchableHighlight onPress={() => navigation.navigate('CreateTripScreen')}>
        <Text style={[styles.button, styles.blueButton]}>
          Create new Trip
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('SearchTripScreen')}>
        <Text style={[styles.button, styles.blueButton]}>
          Search Trip
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        AsyncStorage.removeItem('jwt');
        alert('You have been logged out.');
          navigation.navigate('LoginScreen');
        }}>
        <Text style={[styles.button, styles.blueButton]}>
          Log Out
        </Text>
      </TouchableHighlight>
      </View>
    )
  }

  render() {
    const isAuthenticated = this.props.token && this.props.token !== ''
    return (
      <ScrollView style={styles.container}>
        {isAuthenticated ? this._renderSecret() : <Text>Error during the authentication of the user, please try again.</Text>}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedScreen);