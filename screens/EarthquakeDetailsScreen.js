import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuSearchComponent from "../components/MenuSearchComponent";

export default class EarthquakeDetailsScreen extends React.Component {
  static navigationOptions = {
		header: null
	};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <MenuSearchComponent
          onMenuClick={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Earthquake Details
          </Text>
        </View>
        <View style={{ marginLeft: 7 }}>
          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "22%" }}>
                <Text style={styles.mainText}>LOCATION</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "78%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>
                Epicenter : Makkasaar , Indonesia
              </Text>
              <Text style={styles.subText}>4.1 LS-143.5 BT</Text>
            </View>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "12%" }}>
                <Text style={styles.mainText}>TIME</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "88%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>10, March,2019</Text>
              <Text style={styles.subText}>17:48 WIB</Text>
            </View>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "26%" }}>
                <Text style={styles.mainText}>MAGNITUDE</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "74%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>3.5 Magnitude</Text>
            </View>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "15%" }}>
                <Text style={styles.mainText}>DEPTH</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "85%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>10 KM Depth</Text>
            </View>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "25%" }}>
                <Text style={styles.mainText}>MMI RANGE</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "75%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>MMi per area:</Text>
            </View>
          </View>

          <View>
            <View style={styles.rowContainer}>
              <View style={{ height: "100%", width: "45%" }}>
                <Text style={styles.mainText}>TSUNAMI POTENTIAL</Text>
              </View>
              <View
                style={{
                  height: "50%",
                  width: "55%",
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              />
            </View>
            <View>
              <Text style={styles.subText}>Potential : Yes </Text>
              <Text style={styles.subText}>Tsunami Run up height: </Text>
              <Text style={styles.subText}>Status of tsunami threat: </Text>
              <Text style={styles.subText}>Estimated time of tsunami:</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 2
  },
  subTextContainer: {
    marginTop: 2
  },
  subText: {
    marginTop: 1,
    color: "rgba(140, 96, 96, 0.87)",
    fontSize: 14
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 16
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6202EE",
    width: "100%",
    height: "10%"
  }
});
