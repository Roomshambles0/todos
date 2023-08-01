import {atom} from 'recoil';

export const todoState = atom({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default:{
        id:null,
        title:null,
        description:null
    }, // default value (aka initial value)
  });