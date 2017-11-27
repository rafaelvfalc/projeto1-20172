import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  AsyncStorage,
  TouchableHighlight,
  AppRegistry, 
  Text, 
  TextInput, 
  View,
  TouchableHighligh 
} from 'react-native';

import DatePicker from 'react-native-datepicker'

class SearchTravelView extends Component {
  constructor(props) {
    super(props)
    this.from = {text: ''};
    this.to = {text: ''};
    this.depart= {date:"2017-09-27"}
    this.return= {date:"2017-12-25"}
  }

  _searchTravel = () => {
    alert('Searching Travel...')
  }

  setDepart = (newDate) => {
    this.depart = {date: newDate}
  }

  setReturn = (newDate) => {
    this.return = {date: newDate}
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={{fontSize:20}}>
        Searching a Travel!
       </Text>
      <TextInput
          style={{height: 40}}
          placeholder="From"
          onChangeText={(from) => this.setState({text})}
        />
      <TextInput
          style={{height: 40}}
          placeholder="To"
          onChangeText={(to) => this.setState({text})}
        />
      <Text style={{fontSize:15}}>
        Depart:
       </Text>
       <DatePicker
        style={{width: 150}}
        date={this.depart.date}
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
        onDateChange={(date) => {this.setDepart({date: date})}}
      />
      <Text style={{fontSize:15}}>
        Return:
       </Text>
       <DatePicker
        style={{width: 150}}
        date={this.return.date}
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
        onDateChange={(date) => {this.setReturn({date: date})}}
      />
      <TouchableHighlight onPress={this._searchTravel}>
        <Text style={styles.button}>Search</Text>
      </TouchableHighlight>
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
    },
    button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      color: '#fff',
      backgroundColor: '#1e698d'
    }
  })


module.exports = SearchTravelView
