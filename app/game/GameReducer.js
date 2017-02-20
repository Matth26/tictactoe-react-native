'use strict';

import { Map } from 'immutable'
import * as game from './GameActions'
import { X, O } from './ConstSymbols';

import { resultForSymbol } from './logic';

const defaultState = Map({
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
          newState = state.setIn(['board', (3*row + column)], symbol);

          const newBoard = newState.get('board').toJs();

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
