import React, { Component } from 'react'
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
    AsyncStorage.getItem('jwt', (err, token) => {
      const value = this.refs.form.getValue();
      // If the form is valid...
      if (value) {
        const data = {
          _trip_plan: {
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
          },
          date: new Date()
        }
        // Serialize and post the data
        alert(data)
        const json = JSON.stringify(data)
        fetch('http://aqueous-oasis-59499.herokuapp.com/api/trip_plans', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `JWT ${token}`
          },
          body: json
        })
        .then((response) => response.json())
        .then((res) => {
          if (res.error) {
            alert(res.error)
          } else {
            AsyncStorage.setItem('jwt', res.token)
            alert(`Success! The trip was created.`)
            // Redirect to home screen
            // this.props.navigator.pop()
          }
        })
        .catch((err) => {
          alert('There was an error creating a trip' + err);
        })
        .done()
      } else {
        // Form validation error
        alert('Please fix the errors listed and try again.')
      }
    })
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

export default CreateTripScreen;
