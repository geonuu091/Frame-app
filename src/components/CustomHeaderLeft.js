import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomHeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 30, marginBottom:20 }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Set hit slop values to increase touch area
      
    >
      <MaterialIcons
        name="arrow-back"
        size={30}
        color="#999"
      />
    </TouchableOpacity>
  );
};

export default CustomHeaderLeft;
