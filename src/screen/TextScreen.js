import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import CustomHeaderLeft from '../components/CustomHeaderLeft';

export default function TextScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      // Make the header transparent
      headerTransparent: true,
      // Render custom headerLeft component with back button
      headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
      // 헤더 상단에 표시되는 title 제거 속성
      title: null, 
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TextScreen</Text>
    </View>
  );
}
