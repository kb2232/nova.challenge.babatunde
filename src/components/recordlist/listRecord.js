import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchRecords,archiveRecord} from '../../actions';

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
  archiveMethod(record){
    this.props.archiveRecord(record);
  }
  
  loadmoreMethod(){
    this.props.fetchRecords(this.state.countN+5);
    this.setState({countN:this.state.countN+5});
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
              Name: {record.firstName} {record.lastName}
              <br />
              Credit Score: {record.score}
            </div>
            <button
            onClick={()=>this.archiveMethod(record)}
            style={styles.ArchiveButton}
            >
              Archive
            </button>
          </div>
        )
      })
    } else{
      return <button 
        onClick={()=>this.props.fetchRecords(this.state.countN)}
        style={styles.ButtonContainer}
      >
      Object Archived!!! Click here to go back!!
    </button>
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
            onClick={()=>{this.loadmoreMethod()}}
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
  },
  ArchiveButton:{
    cursor:'pointer',
    width:"150px",
    marginTop:'10px'
  }
}

export default connect(mapstate2props,{fetchRecords,archiveRecord})(RecordList);