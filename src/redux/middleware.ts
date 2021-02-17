import { Middleware, Dispatch } from 'redux';
import { CREATE_POST } from './types';

const forbitten: string[] = ['test', 'yes', 'luka'];

// из первой функции можем достать dispatch
export const forbiddenWordsMiddleware: Middleware = () => (
  next: Dispatch,
) => action => {
  if (action.type !== CREATE_POST) return next(action);

  const found: number = forbitten.findIndex(
    word => word === action.payload.title,
  );

  return found !== -1
    ? next({ ...action, payload: { ...action.payload, title: 'CENSORED' } })
    : next(action);
};
