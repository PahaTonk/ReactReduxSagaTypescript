import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare const confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect((): void => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect((): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string): void => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev: ITodo[]): ITodo[] => [...prev, newTodo]);
  };

  const setTodoCompleted = (id: number, completed: boolean): void => {
    const _todos: ITodo[] = todos.map(
      (todo: ITodo): ITodo => {
        if (id === todo.id) return { ...todo, completed };

        return todo;
      },
    );

    setTodos(_todos);
  };

  const removeTodo = (id: number): void => {
    const shouldRemove = confirm('Точно');

    if (!shouldRemove) return;

    const _todos: ITodo[] = todos.filter(
      (todo: ITodo): boolean => id !== todo.id,
    );

    setTodos(_todos);
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onChecked={setTodoCompleted}
        onRemove={removeTodo}
      />
    </>
  );
};
