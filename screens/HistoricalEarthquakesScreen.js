import React from "react";
import Ionicons from "react-native-ionicons"
import { StyleSheet, Text, View, FlatList } from "react-native";
import EQuakeRestClient from '../communication/EQuakeRestClient'
import MenuSearchComponent from '../components/MenuSearchComponent'


data = [
    {
        Magnitude: "8.2",
        Depth: "10",
        Time: "22-Jan-19 12:10:02 WIB",
        Location: "120km BaratDaya SUMBABARAT-NTT"
    },
    {
        Magnitude: "10.4",
        Depth: "2",
        Time: "02-May-19 15:20:01 WIB",
        Location: "15km BaratBarat asfasf-NTT"
    },
    {
        Magnitude: "6.1",
        Depth: "15",
        Time: "05-Oct-20 09:11:25 WIB",
        Location: "25km BaratNora SUMBABARAT-NTT"
    }
]


export default class HistoricalEarthquakesScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    getData() {

    }

    render() {
        return (
            <View>
                <MenuSearchComponent />
                <View style={{ backgroundColor: "gray" }}>
                    <View style={{ marginBottom: 2, marginTop: 2 }}>
                        <Text style={{ backgroundColor: 'blue', color: 'white', textAlign: "center" }}>Historical Earthquakes</Text>
                    </View>
                </View>
                <FlatList
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    data={data}
                    renderItem={({ item }) => <EarthquakeInfo Magnitude={item.Magnitude} Depth={item.Depth} Location={item.Location} Time={item.Time} />}
                />
            </View>)
    }
}

function EarthquakeInfo(props) {
    return (
        <View style={containerSyle.rowContainer}>

            <View style={{ marginLeft: 10, height: 50, width: 80 }}>

                <Ionicons size={30} name="pulse" color='red' style={{ marginLeft: 10 }}></Ionicons>
                <Text style={{ color: 'red', fontSize: 18 }}>M {props.Magnitude}</Text>
            </View>

            <View style={{ marginLeft: 5, height: 60, width: 250 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons size={20} name="wifi" color='green'></Ionicons>

                    <Text style={{ color: 'green', marginLeft: 3 }}>{props.Depth} KM</Text>
                    <Text style={{ marginLeft: 5 }}>{props.Time}</Text>
                </View>
                <View>
                    <Text>{props.Location}</Text>
                </View>
            </View>

            <View
                style={
                    {
                        height: 50,
                        width: 25,
                        flex: 1,
                        alignItems: 'center'
                    }
                }>
                <Ionicons size={25} name="arrow-forward" />
            </View>
        </View>
    )
}

const containerSyle = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row'
    }
})
