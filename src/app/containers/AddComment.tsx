// tslint:disable:variable-name
import * as React from 'react';
import { connect } from 'react-redux';
import { AddComment } from '../actions/CommentActions';

let AddToComment = ({ dispatch }: any) => {
  let input: any;
  const onSubmitRef: any = (e: any) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(AddComment({id: 1, text: input.value}));
    input.value = '';
  };
  const inputRef: any = (node: any) => {
    input = node;
  };

  return (
    <div>
      <form
        onSubmit = {onSubmitRef}
      >
      <input
        ref={inputRef}
      />
      <button type="submit">
        Add Comment
        </button>
      </form>
    </div>
  );
};

AddToComment = connect()(AddToComment);

export default AddToComment;
