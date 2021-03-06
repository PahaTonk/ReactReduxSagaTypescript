import React from 'react';
import { connect } from 'react-redux';
import { IPost } from '../../interfaces';
import { RootState } from '../../redux/rootReducer';
import { Post } from './Post';

type Props = {
  posts: IPost[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">Empty</p>;
  }

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  posts: state.postsState.posts,
});

export default connect(mapStateToProps)(Posts);
