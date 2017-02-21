'use strict';

import { Map, fromJS } from 'immutable'
import * as game from './GameActions'
import { X, O } from './ConstSymbols';

import { resultForSymbol } from './Logic';

const defaultState = fromJS({
  board: ['', '', '',
          '', '', '',
          '', '', ''],
  won: undefined,
  wonLine: undefined,
  draw: false,
  turn: O
});

export default function (state = defaultState, action) {
    switch(action.type) {
        case game.ADD_SYMBOL:
          const {symbol, row, position} = action;
          console.log(3*row+position)
          console.log(symbol)

          let newState = state.setIn(['board', 3*row+position], symbol);

          const newBoard = newState.get('board').toArray();
          console.log("New Board: ")
          console.log(newBoard)

          const xResult = resultForSymbol(X, newBoard);
          const oResult = resultForSymbol(O, newBoard);

          if (xResult.won) {
            newState = newState.set('won', X);
            newState = newState.set('wonLine', xResult.line);
          }

          if (oResult.won) {
            newState = newState.set('won', O);
            newState = newState.set('wonLine', oResult.line);
          }

          if (!newState.get('won')) {
            let newTurn = newState.get('turn') === O ? X : O;
            newState = newState.set('turn', turn);
          }


          const boardIsFull = newBoard.filter(symbol => symbol !== '')
                                      .length === 9;

          if (boardIsFull && !newState.get('won')) {
            newState = newState.set('draw', true);
          }

          return newState;
        case game.START_AGAIN:
          return defaultState;
        default:
          return state;
    }
    return state;
}
