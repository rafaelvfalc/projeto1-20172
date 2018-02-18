import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import {
    StackNavigator,
  } from 'react-navigation'

import { login } from '../Redux/AuthRedux'

import styles from './Styles/LoginScreenStyles'

const t = require('tcomb-form-native')

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password:  t.String
})

const options = {
  fields: {
    username: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      secureTextEntry: true,
      autoCorrect: false
    }
  }
}

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        username: '',
        password: ''
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }
  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      // Serialize and post the data
      this.props.login(value.username, value.password)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../Images/logo.png')}
        />
        <Form
          ref='form'
          options={options}
          type={User}
          value={this.state.value}
          onChange={this._onChange}
        />
        <Text style={styles.subtitle}>Dont have an account? <Text style={{textDecorationLine: 'underline'}} onPress={() => navigate('RegisterScreen',{})}>
          Sign up.
        </Text> </Text>
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={styles.button}>Log In</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingAuth: state.auth.loadingAuth,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
