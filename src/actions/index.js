import axios from 'axios';

// action creators

export const testAction = () =>{
  return{
    type:'TEST_ACTION',
    payload:'this is a test action created'
  }
}

// fetch record
