import React from 'react';
import { IPost } from '../../interfaces';

type State = {};

type Props = {
  post: IPost;
};

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-body">{post.title}</h5>
        </div>
      </div>
    </>
  );
};
