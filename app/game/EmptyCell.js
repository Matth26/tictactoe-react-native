import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback , View, StyleSheet } from 'react-native';

const EmptyCell = (props) => {
  return (
      <TouchableWithoutFeedback   onPress={() => props.addSymbol(props.turn)}>
        <View style={styles.cell}>
        </View>
      </TouchableWithoutFeedback  >
  );
};

EmptyCell.propTypes = {
  //position: React.PropTypes.number.isRequired,
  addSymbol: React.PropTypes.func.isRequired
};

var styles = StyleSheet.create({
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF'
  }
});

export default EmptyCell;
