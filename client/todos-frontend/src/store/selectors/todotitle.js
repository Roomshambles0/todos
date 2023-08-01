import {todoState} from "../atoms/todo";
import {selector} from "recoil";


export const todotitle = selector({
    key: 'todoTitleState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const todo = get(todoState);
  
      return todo.title;
    },
  });