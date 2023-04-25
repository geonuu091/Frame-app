import React from "react";
import {Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function Bottom() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 75,
      }}
    >
      <View
        style={{
          backgroundColor: "#222",
          paddingVertical: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <BottomItems name="menu" title="menu" />
          <BottomItems name="home-filled" title="Home" />
          <BottomItems name="settings" title="Settings" />
        </View>
      </View>
    </View>
  );
}

function BottomItems({ name, title }) {
  return (
    <TouchableOpacity style={{ alignItems: "center", flex: 1 }}>
      <View style={{ marginVertical: 2 }}>
        <Icon name={name} color="white" size={30} />
      </View>
      <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>
    </TouchableOpacity>
  );
}
