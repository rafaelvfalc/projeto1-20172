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
  Image
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
      <View style={styles.container}>
        <Text style={styles.toptitle}>
        Searching a Travel!
       </Text>
      <TextInput
          style={styles.input}
          placeholder="From"
          onChangeText={(text) => this._from = text}
        />
      <TextInput
          style={styles.input}
          placeholder="To"
          onChangeText={(text) => this._to = text}
        />
        <View style={styles.row}>
           <View>
            <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
              Depart:
             </Text>
             <DatePicker
              style={{width: 150, marginLeft:15}}
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
          </View>
          <View>
            <Text style={{fontSize:15, marginLeft:15, marginTop:10, marginBottom: 10}}>
              Return:
             </Text>
             <DatePicker
              style={{width: 150, marginLeft:15}}
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
          </View>

      </View>

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
    backgroundColor: '#c2d5db'
  },
  toptitle:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 25,
    marginBottom: 25,
    backgroundColor: '#789fbb'
  },
  title: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center'
  },
  row:{
    flexDirection: 'row'
  },
  input:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20, 
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#131925'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 10
  },
  button: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    borderRadius: 3,
    padding: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#1e698d'
  }
})


module.exports = SearchTravelView
