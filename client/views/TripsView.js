import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

class TripsView extends Component {
  constructor(){
    super()
    this.onEndReached = this.onEndReached.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.onRefresh = this.onRefresh.bind(this)

    this.data = [
      {time: '09:00', title: 'Campina Grande - João Pessoa', description: 'Viagem com duração de 1h40min, modelo do Ônibus: x, com 45 vagas disponíveis.'},
      {time: '10:30', title: 'Campina Grande - Sumé', description: 'Viagem com duração de 2h, modelo do Ônibus: z, com 40 vagas disponíveis.'},
      {time: '12:00', title: 'João Pessoa - Campina Grande', description: 'Viagem com duração de 1h40min, modelo do Ônibus: y, com 30 vagas disponíveis.'}, 
      {time: '14:00', title: 'João Pessoa - Recife', description: 'Viagem com duração de 2h10min, modelo do Ônibus: y, com 45 vagas disponíveis.'},
      {time: '16:30', title: 'Campina Grande - Monteiro', description: 'Viagem com duração de 2h40min, modelo do Ônibus: x, com 25 vagas disponíveis.'},
    ]

    this.state = {
      isRefreshing: false,      
      waiting: false,
      data: this.data
    }
  } 

  onRefresh(){
    this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        data: this.data,
        isRefreshing: false
      });
    }, 2000);
  }

  onEndReached() {
    if (!this.state.waiting) {
        this.setState({waiting: true});

        //fetch and concat data
        setTimeout(() => {

          //refresh to initial data
          var data = this.state.data.concat(
            [
              {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'}
            ]
            )

          this.setState({
            waiting: false,
            data: data,
          });
        }, 2000);
    }
  }

renderFooter() {
    if (this.state.waiting) {
        return <ActivityIndicator />;
    } else {
        return <Text>~</Text>;
    }
  }

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.state.data}
          circleSize={20}
          circleColor='white'
          lineColor='white'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
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
            onEndReached: this.onEndReached
          }}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:65,
    backgroundColor:'#789fbb'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});

module.exports = TripsView