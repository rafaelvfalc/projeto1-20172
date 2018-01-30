import React, { Component } from 'react'
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
} from 'react-native'

import { createTrip } from '../Redux/TripRedux'
import style from './Styles/CreateTripScreenStyles'

const t = require('tcomb-form-native')

type Props = {
  navigation: Object,
}

const Form = t.form.Form

const TripPlan = t.struct({
  origem: t.String,
  destino: t.String,
  duracao: t.Number,
  modeloOnibus: t.String,
  mapa: t.String,
  cadeiras: t.String,
  onibus: t.String,
  dia: t.Number,
  hora: t.String,
  semanal: t.Boolean,
  feriado: t.Boolean,
  ativado: t.Boolean
})

class CreateTripScreen extends Component {

  props: Props;

  constructor(props) {
    super(props)
    this.state = {
      value: {
        origem: '',
        destino: '',
        duracao: 0,
        modeloOnibus: '',
        mapa: '',
        cadeiras: '',
        onibus: '',
        dia: 0,
        hora: '',
        semanal: true,
        feriado: false,
        ativado: true
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
    const tripPlan = {
      route: {
        origin: value.origem,
        destination: value.destination,
        duration: value.duracao
      },
      bus: {
        model: value.modeloOnibus,
        seat_map: value.mapa,
        seats: [value.cadeiras]
      },
      day: value.dia,
      hour: value.hora,
      weekly: value.semanal,
      holiday: value.feriado,
      enabled: value.ativado
    }
    this.props.createTrip(tripPlan)
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={style.container}>
       <Text style={style.toptitle}>
        Create Trip
       </Text>
       <View style={style.block}>
        <Form
          ref='form'
          type={TripPlan}
          value={this.state.value}
          onChange={this._onChange}
        /></View>
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={style.button}>Create Trip</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('ProtectedScreen')}>
          <Text style={style.button}>Back to Main Menu</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.trip.loading,
})

const mapDispatchToProps = (dispatch) => ({
  createTrip: (tripPlan) => dispatch(createTrip(tripPlan))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTripScreen);
