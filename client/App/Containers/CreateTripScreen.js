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

const t = require('tcomb-form-native')

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
    return (
      <ScrollView style={styles.container}>
        <Form
          ref='form'
          type={TripPlan}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={styles.button}>Criar</Text>
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
