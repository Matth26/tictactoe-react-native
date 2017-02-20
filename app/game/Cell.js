'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import * as SceneConst from '../scene/Const';
import images from '../img/images';

const Cell = (props) => {
  let addSymbol = () => {
    //onClick("name")
  }

  return (
      <TouchableHighlight underlayColor='#ffffff' onPress={props.addSymbol}>
        <View style={styles.cellContainer}>
          <Symbol/>
        </View>
      </TouchableHighlight>
  )
}

Cell.propTypes = {
  addSymbol: PropTypes.func.isRequired,
}


var styles = StyleSheet.create({
  cellContainer:
  {
    borderWidth: 1,
    backgroundColor: '#FF4567',
    borderColor: '#7a7a52',
    borderRadius: 5,
    margin: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    height: 50,
    width: 50,
  },
});

export default Cell
