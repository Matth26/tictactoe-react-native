'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'
import Cell from './Cell';
import Board from './Board';
import * as game from './GameActions'

class GameComponent extends Component {

  render() {
    return (
      <View style={Style.component}>

        <Board style={styles.board}/>
      </View>
    )
  }
}

//<Results style={styles.results}/>

var styles = StyleSheet.create({
  results: {
  },
  board: {
  }
});

// Container component:
const mapStateToProps = (state) => ({ demo : state.get('demo'),
})

const mapDispatchToProps = (dispatch) => {
  return {
    setDemo: (demo) => {
      dispatch(game.setDemo(demo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent)

/*export default connect(
  state => ({
    demo : state.get('demo'),
  }),
  {
    setDemo: catalogue.setDemo,
  })
(CatalogueComponent)*/
