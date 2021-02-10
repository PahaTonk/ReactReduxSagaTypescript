import React from 'react';
import { ITodo } from '../interfaces';

interface Props {
  todos: ITodo[];
  onChecked(id: number, checked: boolean): void;
  onRemove(id: number): void;
}

export const TodoList: React.FC<Props> = ({ todos, onChecked, onRemove }) => {
  if (!todos.length) return <p className="center">Пока дел нет</p>;

  return (
    <ul>
      {todos.map((todo: ITodo) => {
        const classes: string[] = ['todo'];

        if (todo.completed) classes.push('completed');

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  onChecked(todo.id, event.target.checked)
                }
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                onClick={(event: React.MouseEvent): void => {
                  event.preventDefault();

                  onRemove(todo.id);
                }}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
