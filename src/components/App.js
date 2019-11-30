import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header';
import {testAction} from '../actions';
import ListRecords from './recordlist/listRecord';

class App extends Component{
  componentDidMount(){
    this.props.testAction();
  }
  render(){
    return(
      <div className="col_cc"> 
        <Header contestant="Kunle Babatunde" />
        <div className="centralBody">
          <ListRecords />
        </div>
      </div>
    )
  }
}

export default connect(null,{testAction})(App);