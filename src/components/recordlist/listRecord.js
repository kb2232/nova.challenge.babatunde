import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchRecords} from '../../actions';

class RecordList extends Component{
  componentDidMount(){
    this.props.fetchRecords();
  }
  renderList(){
    if(this.props.records.reports){
      return this.props.records.reports.map(record=>{
        return(
          <div key={record.id} className="borderImg">
            <figure>
              <img alt={record.img.thumb} src={record.img.picture} />
            </figure>
            <div>
              Nmae: {record.firstName} {record.lastName}
              <br />
              Credit Score: {record.score}
            </div>
          </div>
        )
      })
    } else{
      return <div>LOADING...</div>
    }
  }
  render(){
    return(
      <div className="row_c_wrap">
       {this.renderList()}
      </div>
    )
  }
}
const mapstate2props = state =>{
  return{
    records:state.recordReducer
  }
}
export default connect(mapstate2props,{fetchRecords})(RecordList);