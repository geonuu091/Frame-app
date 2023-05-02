import React from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

const CameraScreen = () => {
  const cameraRef = React.useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: false };
      const data = await cameraRef.current.takePictureAsync(options);

      // 캡처한 이미지 파일을 서버로 전송
      uploadImage(data.uri);
    }
  };

  const uploadImage = async (imageUri) => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post('http://your-server-url/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // 파일 전송 성공시 서버의 응답 데이터를 처리합니다.
    } catch (error) {
      console.error(error);
      // 파일 전송 실패시 에러를 처리합니다.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ratio="16:9"
        onCameraReady={() => {
          console.log('Camera ready!');
        }}
      >
        <Button title="Take Picture" onPress={takePicture} />
      </Camera>
    </View>
  );
};

export default CameraScreen;
