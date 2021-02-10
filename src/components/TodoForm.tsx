import React, { useState } from 'react';

type Props = {
  onAdd(title: string): void;
};

export const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Введите название дела"
        value={title}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
