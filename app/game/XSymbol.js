import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const XSymbol = (props) => {
  return (
    <View>
      <Text> X </Text>
    </View>
  );
};

XSymbol.propTypes = {
  position: React.PropTypes.number.isRequired
};

export default XSymbol;
