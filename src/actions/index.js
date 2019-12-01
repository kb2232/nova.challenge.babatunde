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
export const fetchRecords = (countN)=>{
  return async function(dispatch){
    const response = await JSONplaceholder.get(`/api/requests?count=${countN}&cursor=2010-11-12T02:18:22.094Z`);
    dispatch({
        type:'FETCH_RECORDS',
        payload:response.data
      })
  }
}

//archive record
export const archiveRecord = (record)=>{
  return async function(dispatch){
    const response = await JSONplaceholder.patch('/api/requests/archive',record);
    dispatch({
        type:'ARCHIVE_RECORDS',
        payload:response.data
      })
  }
}