import React from 'react';

import Header from './header';
import ListRecords from './recordlist/listRecord';

const App = ()=>{
  return(
    <div className="col_cs"> 
      <Header contestant="Kunle Babatunde" />
      <div className="centralBody">
        <ListRecords />
      </div>
    </div>
  )
}


export default App;