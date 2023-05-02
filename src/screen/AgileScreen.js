import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons'; // Import the icons from expo/vector-icons
import CustomHeaderLeft from '../components/CustomHeaderLeft';

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      // Make the header transparent
      headerTransparent: true,
      // Render custom headerLeft component with back button
      headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
      // Remove the title from the header
      title: null, 
    });
  }, [navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Do something with the captured photo, e.g. save to storage or send to server
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        {/* ... camera view ... */}
      </Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
          <MaterialIcons name="camera" size={80} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flipButton}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <MaterialIcons name="flip-camera-android" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cameraButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left:20
  },
  flipButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    right:660
  },
});

