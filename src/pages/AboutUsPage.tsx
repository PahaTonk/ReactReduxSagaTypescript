import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutUsPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Информация</h1>
      <button className="btn" onClick={(): void => history.push('/')}>Назад</button>
    </>
  );
};
