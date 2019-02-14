import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>
};

const PageTwo = () => {
  return <div>PageTwo</div>
};

const PageThree = () => {
  return <div>PageThree</div>
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagethree" component={PageThree} />
      </div>
    </BrowserRouter>
  );
}

export default App;