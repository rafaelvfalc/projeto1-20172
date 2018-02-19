import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation'

import SearchedTripsScreen from './SearchedTripsScreen'
import styles from './Styles/TripScreenStyles'

type Props = {
  navigation: Object,
}

export default class TripScreen extends Component {
  props: Props;
  constructor(props) {
    super(props)

    this.from = this.props.navigation.state.params._from;
    this.to = this.props.navigation.state.params._to;
    this.depart = this.props.navigation.state.params._depart;
    this.return = this.props.navigation.state.params._return;

    this.state = {};
  }

  render() {
    const { navigation } = this.props;
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
        title="Back to search trip screen"
        onPress={() =>
          navigation.navigate('SearchedTripsScreen',{_from: this.from, _to: this.to, _depart: this.depart, _return: this.return})
        }
        />
      </View>
    )
  }
}
