import React from "react";
import Ionicons from "react-native-ionicons";
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";
import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import EQuakeMapScreen from "../screens/EQuakeMapScreen";
import HistoricalEquake from "../screens/HistoricalEarthquakesScreen";
import EarthquakeDetailsScreen from "../screens/EarthquakeDetailsScreen";
import SafetyScreen from "../screens/SafetyScreen";
import Icon from "react-native-ionicons";
import SensorScreen from "../screens/SensorScreen";
// Importing navigations

const HomeNavigation = createBottomTabNavigator({
  Home: HomeScreen
});

HomeNavigation.navigationOptions = {
  drawerLabel: "Home",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `home`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const EarthquakeDetails = createBottomTabNavigator({
  Home: EarthquakeDetailsScreen
});

EarthquakeDetails.navigationOptions = {
  drawerLabel: "Earthquake details",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `desktop`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const EarthquakeMapStack = createBottomTabNavigator({
  Home: EQuakeMapScreen
});

EarthquakeMapStack.navigationOptions = {
  drawerLabel: "Earthquake Map",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `map`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const HistoricalEquakeStack = createBottomTabNavigator({
  Home: HistoricalEquake
});

HistoricalEquakeStack.navigationOptions = {
  drawerLabel: "Historical Earthquakes",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `filing`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SafeNavigation = createBottomTabNavigator({
  Home: SafetyScreen
});

SafeNavigation.navigationOptions = {
  drawerLabel: "Safety",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `medkit`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SensorNavigation = createBottomTabNavigator({
  Sensor: SensorScreen
});

SensorNavigation.navigationOptions = {
  drawerLabel: "Sensor",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = "wifi";
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 120, width: 150, backgroundColor: "white" }}>
      <Image
        source={require("../assets/quakezone-128.png")}
        style={{
          height: 50,
          width: 50,
          borderRadius: 60,
          marginTop: 30,
          marginLeft: 20
        }}
      />
      <Text style={{ fontSize: 18, marginLeft: 20 }}> QuakeZone</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const TabScreens = createDrawerNavigator(
  {
    Home: HomeNavigation,
    Safety: SafeNavigation,
    EquakeMap: EarthquakeMapStack,
    HEquake: HistoricalEquakeStack,
    Detail: EarthquakeDetails,
    Sensor: SensorNavigation,
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

export default TabScreens;
