import React from "react";
import Ionicons from "react-native-ionicons";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";

export default class MenuSearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={containerSyle.rowContainer}>
        <View>
          <TouchableOpacity onPress={() => this.props.onMenuClick()}>
            <Ionicons name="menu" size={25} />
          </TouchableOpacity>
        </View>

        <Text>QuakeZone</Text>
        {/* <Ionicons name="search" /> */}
      </View>
    );
  }
}

const containerSyle = StyleSheet.create({
  rowContainer: {
    flexDirection: "row"
  }
});
