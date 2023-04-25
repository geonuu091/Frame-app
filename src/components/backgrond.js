import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";


const EnlargeScreen = ({ animation }) => {
  return (
    <Animated.View style={{ transform: [{ scale: animation }] }}>
      <LargeScreen />
    </Animated.View>
  );
};

export default function BackImage() {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const enlargeScreen = () => {
    setAnimation
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={{ uri: "http://picsum.photos/400" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>title</Text>
        <TouchableOpacity onPress={enlargeScreen} style={styles.button}>
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
        <EnlargeScreen animation={animation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginRight: 600,
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  button: {
    marginTop: 20,
    marginRight: 600,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 16,
    color: "#000000",
  },
});
