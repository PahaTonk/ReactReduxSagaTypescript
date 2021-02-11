import React from 'react';
import { useHistory } from 'react-router-dom';
import PostForm from '../components/redux-saga-comp/PostForm';
import Posts from '../components/redux-saga-comp/Posts';
import FetchedPosts from '../components/redux-saga-comp/FetchedPosts';

export const AboutUsPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Информация</h1>
        </div>
        <div className="col">
          <button className="btn mt1" onClick={(): void => history.push('/')}>
            Назад
          </button>
        </div>
      </div>
      <div className="container pt3">
        <div className="row">
          <PostForm />
        </div>
        <div className="row">
          <div className="col">
            <h2>Синхронные посты</h2>
            <Posts />
          </div>
          <div className="col">
            <h2>Асинхронные посты</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    </>
  );
};
