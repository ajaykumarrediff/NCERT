import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FloatingWindow({ onClose, children, position }) {
  const screenWidth = Dimensions.get('window').width;

  const left =
    position.x + 300 > screenWidth ? position.x - 310 : position.x + 10;
  return (
    <View
      pointerEvents="auto"
      style={[
        {
          position: 'absolute',
          width: 300,
          height: 400,
          top: 100 + position.y,
          left: left,
          backgroundColor: '#fff',
          borderRadius: 12,
          elevation: 1000,
          zIndex: 1000,
          overflow: 'hidden',
        },
      ]}
    >
      <View
        style={{
          height: 40,
          backgroundColor: '#333',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: '#fff' }}>Floating</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={{ color: '#fff' }}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
