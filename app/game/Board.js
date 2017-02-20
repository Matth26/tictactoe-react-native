'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import Style from '../view/Style'
import Cell from './Cell';
import * as game from './GameActions'

class Board extends Component {
  addSymbol (rowIndex, position, symbol) {
    !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
  }

  getSymbol(rowIndex, position, symbol) {
    if (symbol === X) {
      return <XSymbol key={position} position={position} />;
    }
    if (symbol === O) {
      return <OSymbol key={position} position={position} />;
    }
    return <BlankSymbol key={position} addSymbol={this.addSymbol.bind(this, rowIndex, position)} turn={this.props.turn} />;
  }

  boardClickHandler(e: Object) {
    const { locationX, locationY } = e.nativeEvent;
    console.log(Math.round(3*locationX/312));
    console.log(Math.round(3*locationY/312));
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
        <View style={styles.board}>
          <View
            style={styles.line}
          />
          <View
            style={[styles.line, {
              width: 3,
              height: 306,
              transform: [
                {translateX: 200}
              ]
            }]}
          />
          <View
            style={[styles.line, {
              width: 306,
              height: 3,
              transform: [
                {translateY: 100}
              ]
            }]}
          />
          <View
            style={[styles.line, {
              width: 306,
              height: 3,
              transform: [
                {translateY: 200}
              ]
            }]}
          />

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

var styles = StyleSheet.create({
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000'
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: '#000',
    transform: [
      {translateX: 100}
    ]
  }
});

Board.propTypes = {
  board: React.PropTypes.object.isRequired,
  turn: React.PropTypes.string.isRequired,
  won: React.PropTypes.string,
  draw: React.PropTypes.bool.isRequired,
  wonLine: React.PropTypes.string,
  addSymbol: React.PropTypes.func.isRequired,
  startAgain: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  board: state.get('board'),
  turn: state.get('turn'),
  won: state.get('won'),
  draw: state.get('draw'),
  wonLine: state.get('wonLine'),
})

const mapDispatchToProps = (dispatch) => {
  return {
    addSymbol (rowIndex, position, symbol) {
      dispatch(addSymbol(rowIndex, position, symbol));
    },
    startAgain () {
      dispatch(startAgain());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
