import React from 'react';
import './App.css';
import Child from './components/child/Child';
import Alert from './components/alert/Alert';
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher';
import GridInline from './components/inline-grid/GridInline';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div>

      <div className="mgrid">
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <GridInline />
        <button className="btn btn-primary">Button</button>
      </div>

      <div className="mgrid-inline">
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
      <Alert title="Title of alert" content="Alert content" />
      <Grid />
    </div>
  );
}

export default App;
