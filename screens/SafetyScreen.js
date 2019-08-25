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

const chars = ["a", "b", "c", "d", "e"];

const data = [
  {
    Header: "1 Anticipating Earthquakes",
    General:
      "Before an earthquake occurs, here’s the things that you should pay attention to when you’re at home",
    Text: [
      {
        Suggestion:
          "Recognize the safe spot in your home when an earthquake occurs.(e.g.: under the table, pillars of the building, or any strong furnitures.)",
        SubSuggestion: []
      },
      {
        Suggestion: "Pay attention to the condition of the house",
        SubSuggestion: [
          "Stay away from glass, windows, and any other things that easily breaks.",
          "If there are any broken walls or ceilings, fix it immediately.",
          "Check the furnitures that might fall when an earthquake occurs",
          "Make sure the gas and electricity installation is safe."
        ]
      },
      {
        Suggestion:
          "Specify the role and tasks for every single member of the family when an earthquake occurs",
        SubSuggestion: []
      },
      {
        Suggestion:
          "Prepare a bag(for survival in the first 3x24 hours) including important documents and phone numbers. The bag must be placed in a safe place, easy to reach, and near the exit.",
        SubSuggestion: []
      },
      {
        Suggestion: "Make sure the evacuation route is not blocked by anything",
        SubSuggestion: []
      },
      {
        Suggestion:
          " Make sure every single member of the family knows how to take cover when an earthquake occurs",
        SubSuggestion: []
      },
      {
        Suggestion:
          "Make sure every single member of the family understands and carries out the plan when an earthquake occurs(take cover for themselves and go into a gathering point through the evacuation route)",
        SubSuggestion: []
      },
      {
        Suggestion:
          "Pay attention to the member of the family who is sick and have disabilities",
        SubSuggestion: []
      },
      {
        Suggestion:
          "Make a simple warning that can cause noises when an earthquake occurs.",
        SubSuggestion: []
      }
    ]
  },
  {
    Header: "2 When an Earthquake Occurs",
    Text: [
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      }
    ]
  },
  {
    Header: "3 After The Earthquake Occurs",
    Text: [
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      },
      {
        Suggestion: "",
        SubSuggestion: []
      }
    ]
  }
];

export default class SafetyScreen extends React.Component {
  static navigationOptions = {
		header: null
	};
  constructor(props) {
    super(props);
    this.state = {
      IsEquake: true
    };
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B"
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuSearchComponent
          onMenuClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.setState({ IsEquake: true })}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Earthquake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.setState({ IsEquake: false })}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Tsunami</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            ItemSeparatorComponent={this.FlatListItemSeparator}
            data={data}
            renderItem={({ item }) => (
              <Expander
                Header={item.Header}
                General={item.General}
                Text={item.Text}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

class Expander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsSelected: false,
      Text: props.Text
    };
  }

  renderText() {
    if (this.state.IsSelected) {
      return (
        <TermsAndConditions
          General={this.props.General}
          Text={this.props.Text}
        />
      );
    }

    return;
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.setState({ IsSelected: !this.state.IsSelected })}
      >
        <View>
          <View style={styles.rowContainer}>
            <Ionicons
              name={this.state.IsSelected ? "arrow-dropup" : "arrow-dropdown"}
              size={25}
            />
            <Text>{this.props.Header}</Text>
          </View>
          <View style={{ margin: 7 }}>{this.renderText()}</View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  Ul: {
    marginTop: 4
  },
  MainText: {
    fontSize: 10
  },
  buttonContainer: {
    width: "100%",
    height: "7%",
    flexDirection: "row"
  },
  rowContainer: {
    flexDirection: "row"
  },
  selected: {
    textShadowColor: "gray"
  },
  unselected: {
    textShadowColor: "white"
  },
  buttonStyle: {
    backgroundColor: "#68a0cf",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    width: "50%",
    height: "100%"
  },
  submitText: {
    color: "#fff",
    textAlign: "center"
  },
  subText: {
    marginTop: 2
  }
});

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderText(Sections) {
    const items = [];
    for (let i = 0; i < Sections.length; i++) {
      const Section = Sections[i];
      items.push(
        <Text key={`section_${i}`} style={stylesT.tcL}>
          {"\u2022"} {Section.Suggestion}
        </Text>
      );
      for (let j = 0; j < Section.SubSuggestion.length; j++) {
        const SubSuggestion = Section.SubSuggestion[j];
        items.push(
          <Text key={`subsection_${i}_${j}`} style={stylesT.tcLX}>
            {chars[j]}. {SubSuggestion}
          </Text>
        );
      }
    }
    return items;
  }

  render() {
    return (
      <View style={stylesT.container}>
        <Text style={stylesT.tcP}> {this.props.General}</Text>
        {this.renderText(this.props.Text)}
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const stylesT = {
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 22,
    alignSelf: "center"
  },
  tcP: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 13.5
  },
  tcP: {
    marginTop: 5,
    fontSize: 12.5
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13
  },
  tcLX: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7
  },

  button: {
    backgroundColor: "#136AC7",
    borderRadius: 5,
    padding: 10
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10
  },

  buttonLabel: {
    fontSize: 14,
    color: "#FFF",
    alignSelf: "center"
  }
};
