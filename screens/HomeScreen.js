import React from "react";
import Ionicons from "react-native-ionicons";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-ionicons";
import { Button } from "react-native-elements";
import MenuSearchComponent from "../components/MenuSearchComponent";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

  //componentDidMount() {
  //  this.watchId = navigator.geolocation.watchPosition(
  //  (position) => {
  //  this.setState({
  //  latitude: position.coords.latitude,
  //longitude: position.coords.longitude,
  //error: null,
  //});
  //},
  //(error) => this.setState({ error: error.message }),
  //{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
  // );
  //}

  //  componentWillUnmount() {
  //  navigator.geolocation.clearWatch(this.watchId);
  //}

  render() {
    return (
      <View>
        <MenuSearchComponent
          onMenuClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />

        <View style={styles.Fourty}>
          <Image
            source={require("../assets/STORMY.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
          <View style={styles.overlayFirst}>
            <View style={styles.TempWeather}>
              <Image
                source={require("../assets/rain.png")}
                style={{ marginBottom: 7, height: "50%", width: "50%" }}
              />
              <Text style={styles.TempText}>20 C</Text>
            </View>

            <View style={{ alignSelf: "flex-end", width: "45%" }}>
              <Text style={styles.City}>Bandung</Text>
            </View>
          </View>
        </View>

        <View style={styles.Twenty}>
          <Image
            source={require("../assets/kolkata-map.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
          <View style={styles.overlayMiddle}>
            <View style={styles.InnerMiddle}>
              <Text style={styles.MiddleText}>
                Tectonik earthquae just happened 5M{" "}
              </Text>

              <View style={styles.TextRaw}>
                <Text style={styles.MiddleText}>Time : a</Text>
                <Text style={styles.MiddleText}>Magnitude : b</Text>
                <Text style={styles.MiddleText}>Depth : C</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Fourty}>
          <View style={styles.BottomFirst}>
            <View style={styles.container}>
              <View style={{ width: "20%", height: "100%", margin: 15 }}>
                <TouchableOpacity style={styles.ButtonStyle}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>6.1</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%"
                }}
              >
                <Text>22km NNE of Cilacap, Jawa Tengah</Text>
              </View>
            </View>
          </View>

          <View style={styles.BottomSecond}>
            <View style={styles.BottomSecondInner}>
              <View style={{ width: "50%", flexDirection: "row", margin: 6 }}>
                <Ionicons name="time" size={45} />
                <View style={{ marginLeft: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>Time</Text>
                  <Text>Mar 01 18:35</Text>
                </View>
              </View>

              <View style={{ width: "50%", flexDirection: "row", margin: 6 }}>
                <Ionicons name="wifi" size={45} />
                <View style={{ marginLeft: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Depth
                  </Text>
                  <Text>10 Km</Text>
                </View>
              </View>
            </View>
            <View style={styles.BottomSecondInner}>
              <View style={{ width: "50%", flexDirection: "row", margin: 6 }}>
                <Ionicons name="pin" size={45} />
                <View style={{ marginLeft: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Location
                  </Text>
                  <Text>24.175 N ,121.708 E</Text>
                </View>
              </View>

              <View style={{ width: "50%", flexDirection: "row", margin: 6 }}>
                <Ionicons name="stats" size={45} />
                <View style={{ marginLeft: 3 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>MMI</Text>
                  <Text>|| Lombok Tengah</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  ButtonStyle: {
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    margin: 6
  },
  rightBorder: {
    width: "48%",
    height: "40%",
    borderRightWidth: 2,
    borderColor: "black"
  },
  thirdMain: {
    borderRightWidth: 2,
    borderColor: "black",
    width: "33%"
  },
  TempWeather: {
    height: "100%",
    width: "50%"
  },
  City: {
    bottom: 0,
    color: "white",
    fontSize: 25,
    position: "absolute",
    alignSelf: "flex-end"
  },
  TextCenter: {
    paddingTop: 6,
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold"
  },
  ViewContentCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  TempText: {
    bottom: 0,
    marginLeft: 8,
    marginBottom: 5,
    position: "absolute",
    color: "white",
    fontSize: 40
  },
  MiddleText: {
    color: "white",
    fontSize: 16
  },
  Fourty: {
    width: "100%",
    height: "40%"
  },
  Twenty: {
    width: "100%",
    height: "20%"
  },
  overlayFirst: {
    flexDirection: "row",
    height: "70%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0)",
    bottom: 0
  },
  overlayMiddle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  InnerMiddle: {
    marginLeft: 4,
    bottom: 0,
    position: "absolute",
    height: "50%",
    width: "100%"
  },
  overlayBottom: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.4)",
    bottom: 0
  },
  bottom: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end"
  },
  BottomFirst: {
    width: "100%",
    height: "40%",
    borderTopWidth: 2
  },
  BottomSecond: {
    width: "100%",
    height: "60%",
    borderTopWidth: 2,
    borderTopColor: "black"
  },
  BottomSecondInner: {
    width: "100%",
    height: "50%",
    flexDirection: "row"
  },
  TextRaw: {
    marginTop: 4,
    flexDirection: "row"
  }
});
