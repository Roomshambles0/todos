import {todoState} from "../atoms/todo";
import {selector} from "recoil";

  export const tododescription = selector({
    key: 'todoDescriptionState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const todo = get(todoState);
  
      return todo.description;
    },
  });
