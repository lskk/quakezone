import React, { Component } from "react";
import { withNavigationFocus } from 'react-navigation';
import { SafeAreaView, View, Text, ScrollView, Switch, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Store from '../storage/Store';

class SettingScreen extends Component {
  static navigationOptions = {
		header: null
  };
  
  constructor(props) {
    super(props);
    this.state = {
      sensorStatus: false
    }
    this.changeSwitch = this.changeSwitch.bind(this);
  }

  componentDidMount() {
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      console.log('Mounted', Store.sensor);
      const sensorStatus = Store.sensor;
      this.setState({
        sensorStatus: sensorStatus
      })
    });
    
  }

  componentWillUnmount(){
    console.log('UnMounted');
  }

  changeSwitch = () => {
    this.setState({
      sensorStatus: !this.state.sensorStatus
    }, () => {
      console.log(this.state);
      Store.sensor = this.state.sensorStatus;
      if(!Store.sensor){
        console.log('unSub on Setting');
        Store.unsubSensor();
      }else{
        console.log('Sub on Setting');
        Store.subscribeSensor();
      }
    })
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={style.wrapper}>
            <View style={style.leftList}>
              <Text>Enable Sensor</Text>
            </View>
            <View style={style.rightList}>
              <Switch value={this.state.sensorStatus} onChange={this.changeSwitch} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  wrapper: {
    padding:10, 
    borderBottomWidth: 1, 
    borderColor: '#ccc', 
    flex: 1, 
    flexDirection: 'row'
  },
  leftList: {
    width:'50%', 
    justifyContent: 'center'
  },
  rightList: {
    width:'50%', 
    alignItems:'flex-end'
  }
})

export default withNavigationFocus(SettingScreen);