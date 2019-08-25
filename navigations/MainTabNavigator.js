import React from "react";
import Ionicons from "react-native-ionicons";
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  DrawerNavigator,
  StackNavigator,
  SwitchNavigator,
  DrawerItems,
  createAppContainer,
  withNavigation
} from "react-navigation";
import { Text, View, SafeAreaView, ScrollView, Image, Platform } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import EQuakeMapScreen from "../screens/EQuakeMapScreen";
import HistoricalEquake from "../screens/HistoricalEarthquakesScreen";
import EarthquakeDetailsScreen from "../screens/EarthquakeDetailsScreen";
import SafetyScreen from "../screens/SafetyScreen";
// import Icon from "react-native-ionicons";
import SensorScreen from "../screens/SensorScreen";
import SettingScreen from "../screens/SettingScreen";
// Importing navigations

const HomeNavigation = createStackNavigator({
  Home: HomeScreen
});

HomeNavigation.navigationOptions = {
  drawerLabel: "Home",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `home`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const EarthquakeDetails = createStackNavigator({
  Home: EarthquakeDetailsScreen
});

EarthquakeDetails.navigationOptions = {
  drawerLabel: "Earthquake details",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `desktop`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const EarthquakeMapStack = createStackNavigator({
  Home: EQuakeMapScreen
});

EarthquakeMapStack.navigationOptions = {
  drawerLabel: "Earthquake Map",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `map`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const HistoricalEquakeStack = createStackNavigator({
  Home: HistoricalEquake
});

HistoricalEquakeStack.navigationOptions = {
  drawerLabel: "Historical Earthquakes",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `filing`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SafeNavigation = createStackNavigator({
  Home: SafetyScreen
});

SafeNavigation.navigationOptions = {
  drawerLabel: "Safety",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = `medkit`;
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SensorNavigation = createStackNavigator({
  Sensor: SensorScreen
}, {
  resetOnBlur: true,
});

SensorNavigation.navigationOptions = {
  drawerLabel: "Sensor",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = "wifi";
    return <Ionicons name={iconName} size={25} color={tintColor} />;
  }
};

const SettingsNavigation = createStackNavigator({
  Setting: SettingScreen
}, {
  resetOnBlur: true,
});

SettingsNavigation.navigationOptions = {
  drawerLabel: "Setting",
  drawerIcon: ({ focused, tintColor }) => {
    const iconName = "settings";
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
    Homepage: {screen: HomeNavigation},
    Safety: {screen: SafeNavigation},
    EquakeMap: {screen: EarthquakeMapStack},
    HEquake: {screen: HistoricalEquakeStack},
    Detail: {screen: EarthquakeDetails},
    Sensor: {screen: SensorNavigation},
    Setting: {screen: SettingsNavigation}
  },
  {
    initialRouteName: 'Homepage',
    resetOnBlur: false,
    
    contentComponent: CustomDrawerComponent
  }
);

export default TabScreens;
// export default createAppContainer(TabScreens);
