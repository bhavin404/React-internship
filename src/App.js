import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import homePage from '../src/components/homePage/homePage.component';
import editData from '../src/components/editData/editData.component';
import createData from '../src/components/createData/createData.component';
import viewData from '../src/components/viewData/viewData.component';

function App() {
  return (
    <Router>
    
    <Route path="/" exact component={homePage}/>
    <Route path="/edit/:id" exact component={editData}/>
    <Route path="/create" exact component={createData}/>
    <Route path="/view" exact component={viewData}/>

    </Router>
  );
}

export default App;
