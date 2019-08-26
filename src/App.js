import React from 'react';
import './App.css';
import Child from './components/child/Child';

function App() {
  return (
    <div>

      <div className="mgrid">
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <button className="btn btn-primary">Button</button>
      </div>
      <div className="alert">
        Jumbotron
    </div>
    </div>
  );
}

export default App;
