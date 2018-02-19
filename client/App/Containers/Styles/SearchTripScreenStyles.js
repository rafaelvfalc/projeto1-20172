import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
  },
  autocomplete: {
    alignSelf: "stretch",
    height: 50,
    margin: 10,
    marginTop: 50,
    backgroundColor: "#FFF",
    borderColor: "lightblue",
    borderWidth: 1
  }
})
