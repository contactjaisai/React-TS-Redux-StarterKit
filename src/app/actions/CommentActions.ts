import * as types from './ActionTypes';

export function LoadComment() {
  return {type: types.LOAD_COMMENT};
}

export function AddComment(comment: any) {
  return {type: types.ADD_COMMENT, payload: comment};
}
