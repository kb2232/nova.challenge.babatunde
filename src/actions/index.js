import JSONplaceholder from '../apis/placeholders';
import { async } from 'q';

// action creators
export const testAction = () =>{
  return{
    type:'TEST_ACTION',
    payload:'this is a test action created'
  }
}

// fetch record
export const fetchRecords = ()=>{
  return async function(dispatch){
    const response = await JSONplaceholder.get('/api/requests?count=10&cursor=2010-11-12T02:18:22.094Z');
    dispatch({
        type:'FETCH_RECORDS',
        payload:response.data
      })
  }
}