import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicatorIOS,
  AsyncStorage,
  StyleSheet,
  Text,
  View
} from 'react-native'

import styles from './Styles/ProtectedScreenStyles'

class ProtectedScreen extends Component {
  _renderSecret = () => (
    <Text style={{fontSize:50}}>
      Desculpa pela cerveja!
    </Text>
  )

  render() {
    const isAuthenticated = this.props.token && this.props.token !== ''
    return (
      <View style={styles.container}>
        <Text style={styles.centering}>
          {isAuthenticated ? this._renderSecret() : <Text>You are not authorized!</Text>}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedScreen);
