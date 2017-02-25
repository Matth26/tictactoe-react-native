import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const XSymbol = (props) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.symbol}> X </Text>
    </View>
  );
};

XSymbol.propTypes = {
  position: React.PropTypes.number.isRequired
};

var styles = StyleSheet.create({
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
  },
  symbol: {
    fontSize: 80,
    fontWeight: 'bold',
  }
});

export default XSymbol;
