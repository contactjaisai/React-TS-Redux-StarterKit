import * as types from '../actions/ActionTypes';
import * as models from '../models/Index';
import InitialState from './InitialState';

export default function CommentReducer(state: models.IComment[] = InitialState.comments, action: any) {
  switch (action.type) {
    case types.ADD_COMMENT: {
      return [
        ...state,
        action.payload,
      ];
    }
    case types.LOAD_COMMENT: {
      return state;
    }
    default: {
      return state;
    }
    }
}
