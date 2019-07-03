import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { mean } from "d3-array";
import { scaleLinear } from "d3-scale";
import _ from "lodash";

const ACTIVE = "#FF1844",
  INACTIVE = "#424056",
  ACTIVE_PLAYABLE = "#1b1b26";
const ACTIVE_INVERSE = "#4F1224",
  ACTIVE_PLAYABLE_INVERSE = "#131116",
  INACTIVE_INVERSE = "#1C1A27";

function getColor(bars, bar, percentPlayed, percentPlayable, inverse) {
  if (bar / bars.length < percentPlayed) {
    return inverse ? ACTIVE : ACTIVE_INVERSE;
  } else if (bar / bars.length < percentPlayable) {
    return inverse ? ACTIVE_PLAYABLE : ACTIVE_PLAYABLE_INVERSE;
  } else {
    return inverse ? INACTIVE : INACTIVE_INVERSE;
  }
}

/**
 * https://www.freecodecamp.org/news/how-to-make-realtime-soundcloud-waveforms-in-react-native-4df0f4c6b3cc/
 */
export const Waveform = ({
  waveform,
  height,
  width,
  setTime,
  percentPlayed,
  percentPlayable,
  inverse
}) => {
  const scaleLinearHeight = scaleLinear()
    .domain([0, waveform.height])
    .range([0, height]);
  console.log("scaleLinearHeight=", scaleLinearHeight);
  const chunkSize = waveform.width / ((width - 60) / 3);
  console.log("chunkSize=", chunkSize);
  const chunks = _.chunk(waveform.samples, chunkSize);
  console.log("waveform.samples=", waveform.samples);
  console.log("waveform.width=", waveform.width, "width=", width);
  console.log("chunks=", chunks);
  return (
    <View
      style={[
        { height, width, justifyContent: "center", flexDirection: "row" },
        inverse && { transform: [{ rotateX: "180deg" }, { rotateY: "0deg" }] }
      ]}
    >
      <Text>{" "}</Text>
      {chunks.map((chunk, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            setTime(i);
          }}
        >
          <Text>{" "}</Text>
          <View
            style={{
              backgroundColor: getColor(
                chunks,
                i,
                percentPlayed,
                percentPlayable,
                inverse
              ),
              width: 2,
              marginRight: 1,
              height: scaleLinearHeight(mean(chunk))
            }}
          /><Text>{" "}</Text>
        </TouchableOpacity>
      ))}<Text>{" "}</Text>
    </View>
  );
};
