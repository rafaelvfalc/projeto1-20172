  import React, { Component } from 'react'

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
  } from 'react-native'

  import DatePicker from 'react-native-datepicker'

  import {
    StackNavigator,
  } from 'react-navigation'

  import styles from './Styles/SearchTripScreenStyles'

  import SearchedTripsScreen from './SearchedTripsScreen'

  const SearchScreen = StackNavigator({
    SearchedTripsScreen: { screen: SearchedTripsScreen }
  });

  export default class SearchTripScreen extends Component {
    constructor(props) {
      super(props)
      var _from = "";
      var _to = "";

      var utc_date = new Date().toJSON().slice(0,10);
      this.state = {depart:{date: utc_date}};
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
        <Text style={styles.toptitle}>
        Searching Trip
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
        date={this.state.depart.date}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2017-01-01"
        maxDate="2018-12-31"
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
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
        onDateChange={(date) => {this.setState({depart:{date: date}})}}
        />
        </View>
        </View>

        <Button
        style={{marginTop: 20,}}
        title="Search Trip"
        onPress={() =>
          navigate('SearchedTripsScreen',{ _from: this._from, _to: this._to, _depart: this.state.depart.date})
       }
       />

        <Button
        style={{marginTop: 20,}}
        title="Back to Main Menu"
        onPress={() =>
          navigate('ProtectedScreen',{})
       }
       />

       </View>
       )
    }
  }