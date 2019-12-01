import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchRecords} from '../../actions';

class RecordList extends Component{
  constructor(props){
    super(props);
    this.state={
      countN:10
    }
  }
  componentDidMount(){
    this.props.fetchRecords(this.state.countN);
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
    const {ButtonContainer} = styles;
    return(
      <div>
        <div className="row_c_wrap">
          {this.renderList()}
        </div>
        <div className="button_c_c">
          <button 
            onClick={()=>{
              this.setState({countN:this.state.countN+5},()=>{
                this.props.fetchRecords(this.state.countN);
              });
            }}
            style={ButtonContainer}
          >
          LOAD MORE DATA
          </button>
        </div>
      </div>
    )
  }
}
const mapstate2props = state =>{
  return{
    records:state.recordReducer
  }
}

const styles = {
  ButtonContainer:{
    width:"200px",
    height:"40px",
    marginLeft:'10px',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3D68A3',
    cursor:'pointer'
  }
}

export default connect(mapstate2props,{fetchRecords})(RecordList);