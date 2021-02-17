import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPost } from '../../interfaces';
import { fetchPosts } from '../../redux/actions';
import { RootState } from '../../redux/rootReducer';
import { Post } from './Post';

const FetchedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const posts: IPost[] = useSelector(
    (state: RootState): IPost[] => state.fetchedPostsState.posts,
  );
  const loading: boolean = useSelector(
    (state: RootState): boolean => state.appState.loading,
  );

  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

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
