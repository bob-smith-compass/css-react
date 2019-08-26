import React from 'react';
import './App.css';
import Child from './components/child/Child';
import Alert from './components/alert/Alert';
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher';

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
      <div className="jumbotron">
        Jumbotron
    </div>
    <div className="alert alert-primary" role="alert">Alert</div>
    <ThemeSwitcher />
    <Alert />
    </div>
  );
}

export default App;
