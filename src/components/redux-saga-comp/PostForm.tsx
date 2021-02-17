import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { IActionPosts, IPost } from '../../interfaces';
import { createPost } from '../../redux/actions';

type Props = {
  createPost(post: IPost): IActionPosts;
};
type State = {
  title: string;
};

const defaultState: State = { title: '' };

const PostForm: React.FC<Props> = ({ createPost }) => {
  const [state, setState] = useState<State>(defaultState);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!state.title.trim()) {
      return;
    }

    const newPost: IPost = {
      ...state,
      id: Date.now(),
    };

    setState(defaultState);

    createPost(newPost);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title Post
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={state.title}
            name="title"
            onChange={onChangeHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
