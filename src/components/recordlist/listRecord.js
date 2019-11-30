import React, {Component} from 'react';
import {connect} from 'react-redux';

import {testAction} from '../../actions';

class RecordList extends Component{
  componentDidMount(){
    this.props.testAction();
  }
  render(){
    return(
      <div>
        THIS IS THE BODY - {this.props.test}
      </div>
    )
  }
}
const mapstate2props = state =>{
  return{
    test:state.testReducer
  }
}
export default connect(mapstate2props,{testAction})(RecordList);