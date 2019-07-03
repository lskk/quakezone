import React from "react";
import Ionicons from "react-native-ionicons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity
} from "react-native";
import MenuSearchComponent from "../components/MenuSearchComponent";
import { ScrollView } from "react-native-gesture-handler";
import { Waveform } from "../components/Waveform";
import { BarChart, Grid } from "react-native-svg-charts";
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";

export default class SensorScreen extends React.PureComponent {
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
    this.state = {
      accels: accels
    };
  }

  componentDidMount() {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100); // defaults to 100ms
    this._accelSub = accelerometer
      //   .pipe(
      //     map(({ x, y, z }) => x + y + z),
      //     filter(speed => speed > 20)
      //   )
      .subscribe(
        ({ x, y, z }) => {
          const accels = [...this.state.accels];
        //   console.log(`You moved your phone with`, x, y, z);
          accels.shift();
          const mean = (x + y + z) / 3.0;
          accels.push(mean);
          this.setState({ accels: accels });
        //   console.log(`accels=`, this.state.accels);
        },
        error => {
          console.error("Accelerometer is not available");
        }
      );
  }

  componentWillUnmount() {
    if (this._accelSub) {
      this._accelSub.unsubscribe();
    }
  }

  render() {
    const waveform = {
      width: 10,
      height: 140,
      samples: [37, 38, 38, 36, 35, 32, 28, 29, 22, 109]
    };
    const fill = "rgb(134, 65, 244)";
    return (
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  waveformContainer: {
    flex: 1
  }
});

const { width, height } = Dimensions.get("window");
