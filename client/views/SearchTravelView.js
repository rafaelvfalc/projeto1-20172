import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  AsyncStorage,
  TouchableHighlight,
  AppRegistry, 
  Text, 
  TextInput, 
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker'

import {
  StackNavigator,
} from 'react-navigation';

const ShowTravelsScreen = require('./ShowTravelsView')

const SearchScreen = StackNavigator({
  ShowTravels: { screen: ShowTravelsScreen }
});

class SearchTravelView extends Component {
  constructor(props) {
    super(props)
    var _from = "";
    var _to = "";
    this.state = {depart:{date: "2016-07-24"}, return: {date: "2016-12-25"}};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{padding: 10}}>
        <Text style={{fontSize:20}}>
        Searching a Travel!
       </Text>
      <TextInput
          style={{height: 40}}
          placeholder="From"
          onChangeText={(text) => this._from = text}
        />
      <TextInput
          style={{height: 40}}
          placeholder="To"
          onChangeText={(text) => this._to = text}
        />
      <Text style={{fontSize:15}}>
        Depart:
       </Text>
       <DatePicker
        style={{width: 150}}
        date={this.state.depart.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2018-12-31"
        confirmBtnText="OK"
        cancelBtnText="CANCEL"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({depart:{date: date}, return: {date: this.state.return.date}})}}
      />
      <Text style={{fontSize:15}}>
        Return:
       </Text>
       <DatePicker
        style={{width: 150}}
        date={this.state.return.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2018-12-31"
        confirmBtnText="OK"
        cancelBtnText="CANCEL"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({depart:{date: this.state.depart.date}, return: {date: date}})}}
      />

      <Button
        style={{marginTop: 20,}}
        title="Show Travels"
        onPress={() =>
          navigate('ShowTravels',{ _from: this._from, _to: this._to, _depart: this.state.depart.date, _return: this.state.return.date })
        }
      />
      </View>
    )
  }
}

const SearchTravel = StackNavigator({
  ShowTravels: {
    screen: ShowTravelsScreen
  }
});

module.exports = SearchTravelView
