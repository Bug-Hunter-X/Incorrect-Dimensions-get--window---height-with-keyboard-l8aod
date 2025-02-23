import React, { useState, useEffect } from 'react';
import { Dimensions, Keyboard, StyleSheet, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      setDimensions(Dimensions.get('screen'));
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setDimensions(Dimensions.get('screen'));
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={[styles.container, { height: dimensions.height }]}>
      <Text>Screen Height: {dimensions.height}</Text>
      <Text>Screen Width: {dimensions.width}</Text>
    </View>
  );
};

export default DimensionsBugSolution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});