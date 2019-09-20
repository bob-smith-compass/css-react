import React from 'react';
import './App.css';
import Child from './components/child/Child';
import Alert from './components/alert/Alert';
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher';
import GridInline from './components/inline-grid/GridInline';
import Grid from './components/grid/Grid';
import JavaScript from './components/java-script/JavaScript';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import caretright from './open-iconic/svg/arrow-right.svg';

function App() {
  return (
    <div>

      {/* 
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
    </Nav.Link>
        </Nav.Item>
      </Nav>
 */}


      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      {/* 
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}

      <Form inline>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />



        </Form.Group>
        <Button variant="primary" type="submit" float="right">
          Submit
    </Button>




      </Form>



      <Form inline>


        <InputGroup className="mb-3">
          {/* <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend> */}
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text><img src={caretright} alt="icon name" /></InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

      </Form>

      {/* 






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
      <JavaScript /> */}
    </div>
  );
}

export default App;
