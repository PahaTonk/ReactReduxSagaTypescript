import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPost, IRootReducer } from '../../interfaces';
import { fetchPosts } from '../../redux/actions';
import { Post } from './Post';

const FetchedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const posts: IPost[] = useSelector(
    (state: IRootReducer): IPost[] => state.fetchedPostsState.posts,
  );

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Load
      </button>
    );
  }
  return (
    <>
      {posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default FetchedPosts;
