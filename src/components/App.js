import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header';
import {testAction} from '../actions';

class App extends Component{
  componentDidMount(){
    this.props.testAction();
  }
  render(){
    return(
      <div>
        <Header contestant="Kunle Babatunde" />
      </div>
    )
  }
}

export default connect(null,{testAction})(App);