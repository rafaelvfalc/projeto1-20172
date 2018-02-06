import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image
} from 'react-native'

import {
    StackNavigator,
  } from 'react-navigation'

import { register } from '../Redux/AuthRedux'

import styles from './Styles/RegisterScreenStyles'

const t = require('tcomb-form-native')

const Form = t.form.Form

const newUser = t.struct({
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

class RegisterScreen extends Component {
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
      this.props.register(value.username, value.password)
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
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={styles.button}>Create account</Text>
        </TouchableHighlight>
         <Text style={styles.subtitle}>Already have an account? <Text style={{textDecorationLine: 'underline'}} onPress={() => navigate('LoginScreen',{})}>
          Sign in.
        </Text> </Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingAuth: state.auth.loadingAuth,
})

const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, password) => dispatch(register(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
