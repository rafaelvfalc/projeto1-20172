import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, RefreshControl, ActivityIndicator, Button } from "react-native";

import Timeline from 'react-native-timeline-listview'

import styles from './Styles/SearchedTripsScreenStyles'

type Props = {
  navigation: Object,
}

export default class SearchedTripsScreen extends Component {
  props: Props;
  constructor(props){
    super(props)

    this.from = this.props.navigation.state.params._from;
    this.to = this.props.navigation.state.params._to;
    this.depart = this.props.navigation.state.params._depart;

    this.data = []

    this.state = {
      isRefreshing: false,
      waiting: false,
      data: this.data
    }

  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData(){
    fetch("https://my.api.mockaroo.com/travel_20-02.json?key=8ee6d780")
    .then((response) => response.json())
    .then((responseData) => {
      var from = this.from
      var to = this.to
      var depart_date = this.depart
      var trips = []
      responseData.forEach(function(trip) { 
       if (trip.origem == from && trip.destino == to && trip.dia == depart_date) {
        trips.push({time:trip.hora.toString(), title:trip.origem.toString() + " - " + trip.destino.toString(), description: "Viagem de duração de " + trip.duracao.toString() + " h , ônibus da " + trip.onibus + " modelo " + trip.modeloOnibus + ", com " + trip.cadeiras + " vagas disponíveis."})
        }
      });
      this.data = trips
      this.setState((state) => ({ data: trips}));      
    })
    .done();
  }

  onEndReached = () => {
    if (!this.state.waiting) {
      this.setState({waiting: true});
      setTimeout(() => {
        var data = this.state.data.concat([])

        this.setState({
          waiting: false,
          data: data,
        });
      }, 2000);
    }
  }

  renderFooter = () => {
    if (this.state.waiting) {
      return <ActivityIndicator />;
    } else {
     return <Text></Text>;
   }
 }

 render() {
  const { navigation } = this.props;
  return (
  <View style={styles.container}>
  <Text style={styles.toptitle}>Search Results</Text>
  <Timeline
  style={styles.list}
  onEventPress={() =>
    navigation.navigate('TripScreen',{_from: this.from, _to: this.to, _depart: this.depart})
  }
  data={this.state.data}
  circleSize={20}
  circleColor='white'
  lineColor='white'
  timeContainerStyle={{minWidth:52, marginTop: -10}}
  timeStyle={{textAlign: 'center', backgroundColor:'#1e698d', color:'white', padding:5, borderRadius:13}}
  descriptionStyle={{color:'black'}}
  options={{
    style:{paddingTop:5},
    refreshControl: (
    <RefreshControl
    refreshing={this.state.isRefreshing}
    onRefresh={this.onRefresh}
    />
    ),
    renderFooter: this.renderFooter,
  }}
  />
  <Button
    style={{marginTop: 20,}}
    title="Search another trip"
    onPress={() =>
      navigation.navigate('SearchTripScreen',{})
    }
  />
  </View>
  );
}
}