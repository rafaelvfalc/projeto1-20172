import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation'

import styles from './Styles/UserProfileScreenStyles'

type Props = {
    navigation: Object,
  }

export default class UserProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {name: "", email: "", phone: ""};
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData(){
    fetch("https://my.api.mockaroo.com/user_profile_data.json?key=8ee6d780")
    .then((response) => response.json())
    .then((responseData) => {

      this.setState({name:responseData.name.toString()})
      this.setState({email:responseData.email.toString()})
      this.setState({phone:responseData.phone.toString()})

    })
    .done();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{padding: 10}}>
        <Text style={styles.toptitle}>User Profile</Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Name: {this.state.name}
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Email: {this.state.email}
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Phone: {this.state.phone}
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Address:
        </Text>
        <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
        Tickets bought:
        </Text>
        <Button
        style={{marginTop: 20,}}
        title="Change password"
        onPress={() =>
            alert("Change password functionality")
        }
        />
        <Button
        style={{marginTop: 20,}}
        title="Back to main menu"
        onPress={() =>
            navigation.navigate('ProtectedScreen',{})
        }
        />
      </View>
    )
  }
}
