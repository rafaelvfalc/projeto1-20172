import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text
  } from 'react-native'

  const t = require('tcomb-form-native');

  const Form = t.form.Form

  const newUser = t.struct({
    email: t.String,
    password:  t.String
  })

  const options = {
    fields: {
      email: {
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false
      }
    }
  }

  class RegisterView extends Component {

    constructor(props) {
      super(props)
      this.state = {
        value: {
          email: '',
          password: ''
        }
      }
    }

    componentWillUnmount() {
      this.setState = {
        value: {
          email: '',
          password: null
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
        const data = {
          email: value.email,
          password: value.password,
        }
        // Serialize and post the data
        const params = JSON.stringify(data);
        fetch('http://aqueous-oasis-59499.herokuapp.com/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: params
        })
        .then((response) => {
        })
        .then(() => {
          alert('Success! You may now log in.');
          // Redirect to home screen
          // TO DO
        })
        .catch((error) => {
          alert('There was an error creating your account.');
        })
        .done()
      } else {
        // Form validation error
        alert('Please fix the errors listed and try again.')
      }
    }

    render() {
      return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      flexDirection: 'column'
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
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  module.exports = RegisterView
