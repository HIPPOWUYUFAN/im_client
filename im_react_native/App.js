/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Platform } from 'react-native';
export default function App() {
  console.log(Platform.OS)
  return (
    <View style={{ width:'100%',height:'100%', justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}
