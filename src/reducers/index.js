import {combineReducers} from 'redux';

const recordReducer = (currstate=[],action)=>{
  switch(action.type){
    case 'TEST_ACTION':
      return action.payload;
    case 'FETCH_RECORDS':
      return action.payload;
    default:
      return currstate;
  }
}

export default combineReducers({
  recordReducer,
});