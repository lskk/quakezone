import React from "react";
import Ionicons from "react-native-ionicons";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import MenuSearchComponent from "../components/MenuSearchComponent";
// import { ScrollView } from "react-native-gesture-handler";
import { Waveform } from "../components/Waveform";
import { BarChart, Grid } from "react-native-svg-charts";
import {
  accelerometer,
  gyroscope,
  magenetometer,
  barometer,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import { withNavigation, withNavigationFocus } from 'react-navigation';
import { map, filter } from "rxjs/operators";
import Store from '../storage/Store';

const deviceWidth = 400;
const deviceHeight = 400;

const imageWidth = 8 * deviceWidth;
const imageHeight = deviceHeight;

const middleOfTheScreenX = (imageWidth - deviceWidth) / 2;

class SensorScreen extends React.PureComponent {
  static navigationOptions = {
		header: null
	};
  constructor(props) {
    super(props);
    
    // const accels = [
    //   50,
    //   10,
    //   40,
    //   95,
    //   -4,
    //   -24,
    //   0,
    //   85,
    //   0,
    //   0,
    //   35,
    //   53,
    //   -53,
    //   24,
    //   50,
    //   -20,
    //   -80,
    //   50,
    //   10,
    //   40,
    //   95,
    //   -4,
    //   -24,
    //   0,
    //   85,
    //   0,
    //   0,
    //   35,
    //   53,
    //   -53,
    //   24,
    //   50,
    //   -20,
    //   -80
    // ];
    const accels = new Array(100).fill(0);
    const gyro = new Array(100).fill(0);
    const magnetometer = new Array(100).fill(0);

    this.state = {
      accels: accels,
      gyro: gyro,
      magnetometer: magnetometer,
      sensorStatus: false,
      refresh: false,
    };
  }

  componentDidMount() {
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      // do something
      this.subscribeSensor();
      Store.on('gyro', (gyro) => {
        // console.log('dataGyro', gyro);
        this.setState({
          gyro: gyro
        })
      })
      Store.on('accels', (accels) => {
        // console.log('dataAccels', accels);
        this.setState({
          accels: accels
        })
      })
      Store.on('magnetometer', (magnetometer) => {
        this.setState({
          magnetometer: magnetometer
        })
      });
    });
    

  }

  subscribeSensor = () => {
    this.setState({
      refresh: false
    }, () => {
      Store.subscribeSensor()
      Store.sensor = true;
    })
  }

  componentWillUnmount() {
    console.log('Component Unmount');
  }

  render() {


    const waveform = {
      width: 10,
      height: 140,
      samples: [37, 38, 38, 36, 35, 32, 28, 29, 22, 109]
    };
    const fill = "rgb(134, 65, 244)";
    return (
      <SafeAreaView>
        <ScrollView 
        // refreshControl={
        //   <RefreshControl 
        //   refreshing={this.state.refresh}
        //   onRefresh={() => this.subscribeSensor()}
        //   />
        // }
        >
      <View style={styles.container}>
        <MenuSearchComponent
          onMenuClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <View style={styles.waveformContainer}>
          {/* <Waveform
            waveform={waveform}
            width={70}
            height={100}
            inverse
            style={{ width: "100%", height: 200, backgroundColor: "yellow" }}
          /> */}
          <BarChart
            style={{ height: 200 }}
            data={this.state.accels}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
            yMin={-10} yMax={+10}
          >
            <Grid />
          </BarChart>

          <BarChart
            style={{ height: 200 }}
            data={this.state.gyro}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
            yMin={-10} yMax={+10}
          >
            <Grid />
          </BarChart>

          <BarChart
            style={{ height: 200 }}
            data={this.state.magnetometer}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
            yMin={-10} yMax={+10}
          >
            <Grid />
          </BarChart>
        </View>

      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waveformContainer: {
    flex: 1
  },
  image: {
    // position: "absolute",
    top: 0,
    left: 0,
    height: 400,
    width: 400
  }

});

const { width, height } = Dimensions.get("window");

export default withNavigationFocus(SensorScreen);