import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MenuSearchComponent from '../components/MenuSearchComponent'
// import EQuakeRestClient from '../communication/EQuakeRestClient'
//import ApiEndpoints from '../communication/ApiEndpoints'

YOUR_ACCES_TOKEN = "pk.eyJ1IjoiaGVuZHlpcmF3YW4iLCJhIjoiY2l3cnpvNmRqMTVjcDJ6cXpxb2UxejVnbSJ9.ePnKula0P6I1BhiySWkG1w"
MapboxGL.setAccessToken(YOUR_ACCES_TOKEN)
const coordinates = [
  [-73.98330688476561, 40.76975180901395]
  /*[-73.96682739257812, 40.761560925502806],
  [-74.00751113891602, 40.746346606483826],
  [-73.95343780517578, 40.7849607714286],
  [-73.99017333984375, 40.71135347314246],
  [-73.98880004882812, 40.758960433915284],
  [-73.96064758300781, 40.718379593199494],
  [-73.95172119140624, 40.82731951134558],
  [-73.9829635620117, 40.769101775774935],
  [-73.9822769165039, 40.76273111352534],
  [-73.98571014404297, 40.748947591479705]*/
]
const data = {
  Ago: "5",
  Date: "10 March 2019",
  Time: "19:47 WB",
  Location: "Makassar, Indonesia",
  Epicenter: "Epicenter is in land 15KM from ABC",
  From: "ABC",
  M: "3.5",
  KM: "10",
  MMI: "|| - |||",
  Tsunami: "NO",
  Shaking: "No Shaking at your location"
}
export default class EQuakeMapScreen extends React.Component {
  static navigationOptions = {
		header: null
	};
  constructor(props) {
    super(props)
    this.state = {
      Newest: true,
      coordinates: coordinates
    };
  }

  // componentDidMount() {
  //   //client = EQuakeRestClient
  //   //client.post(ApiEndpoints.)
  // }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  renderAnnotation(counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title='Test'
        coordinate={coordinate}>

        <Image
          source={require('../assets/circle.png')}
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: 25,
            height: 25
          }} />
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations() {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <MenuSearchComponent onMenuClick={() => this.props.navigation.toggleDrawer()} />
        </View>
        <View style={{ width: "100%", height: "7%", flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => this.setState({ Newest: true })}
            underlayColor='#fff'>
            <Text style={styles.submitText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => this.setState({ Newest: false })}
            underlayColor='#fff'>
            <Text style={styles.submitText}>M>=5</Text>
          </TouchableOpacity>
        </View>
        <MapboxGL.MapView
          zoomLevel={11}
          style={{ zIndex: 100 }}
          pitch={45}
          centerCoordinate={[40.180899, 44.507766]}
          style={{ flex: 1 }}
          userTrackingMode={1}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>

        <View style={styles.overlay}>

          <View style={styles.firstRow}>

            <View style={styles.firstLayer}>
              <Text style={styles.textStyle}>{data.Ago} HOURS AGO</Text>
              <Text style={styles.textStyle}>{data.Date}</Text>
              <Text style={styles.textStyle}>{data.Time}</Text>
            </View>

            <View style={styles.firstLayerMiddle}>
              {/*this.DrawSeparator("first",true,)*/}
            </View>

            <View style={styles.firstLayer}>
              <Text style={styles.textStyle}>{data.Location}</Text>
              <Text style={styles.textEpicenter}>{data.Epicenter}</Text>
              <Text style={styles.textStyle}>{data.From}</Text>
            </View>

          </View>

          <View style={styles.secondRow}>
            <View style={styles.secondLayerTop}>
              {/*Separator */}
            </View>

            <View style={styles.secondLayerMiddle}>
              <Text style={styles.textCenterStyle}>{data.Shaking}</Text>
            </View>

            <View style={styles.secondLayerBottom}>
              {/*Separator */}
            </View>
          </View>

          <View style={styles.thirdRow}>

            <View style={styles.thirdMain}>
              <View>
                <Text style={styles.textStyle}>{data.M}</Text>
                <Text style={styles.textStyle}>Magnitude</Text>
              </View>
            </View>

            <View style={styles.thirdMain}>
              <View>
                <Text style={styles.textStyle}>{data.KM} KM</Text>
                <Text style={styles.textStyle}>Depth</Text>
              </View>
            </View>

            <View style={styles.thirdMain}>
              <View >
                <Text style={styles.textStyle}>MMI Range:</Text>
                <Text style={styles.textStyle}>{data.MMI}</Text>
              </View>
            </View>

            <View style={styles.thirdMain}>
              <View >
                <Text style={styles.textStyle}>Tsunami:</Text>
                <Text style={styles.textStyle}>{data.Tsunami}</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    height: "40%",
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    bottom: 0
  },
  row: {
    flexDirection: 'row'
  },
  firstRow: {
    flexDirection: 'row',
    height: "40%",
    width: "100%"
  },
  secondRow: {
    height: "20%",
    width: "100%"
  },
  thirdRow: {
    flexDirection: 'row',
    height: "40%",
    width: "100%"
  },
  firstLayer: {
    height: "100%",
    width: "49%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstLayerMiddle:
  {
    marginBottom: 2,
    marginTop: 8,
    borderLeftWidth: 2,
    borderColor: 'black',
    height: "80%",
    width: "1%"
  },
  secondLayerTop: {
    borderBottomWidth: 2,
    height: "25%",
    width: "100%"
  },
  secondLayerBottom: {
    borderTopWidth: 2,
    height: "25%",
    width: "100%"
  },
  secondLayerMiddle: {
    height: "50%",
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thirdMain: {
    borderRightWidth: 2,
    borderColor: 'black',
    width: "25%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  submit: {
    backgroundColor: '#68a0cf',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    width: "50%",
    height: "100%"
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  textStyle: {
    paddingTop: 6,
    textAlign: 'center',
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 'bold'
  },
  textEpicenter: {
    paddingTop: 6,
    textAlign: 'center',
    color: "#ffffff",
    fontSize: 11,
    fontWeight: 'bold'
  },
  textCenterStyle: {

    textAlign: 'center',
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 'bold'
  }

});