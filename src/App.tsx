import * as React from 'react'
import './App.css';
import Search from "./containers/Search";
import Navbar from 'react-bootstrap/Navbar'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar fixed="top" className="nav-bar">
        <Navbar.Brand href="/">
          <img
            alt="iov"
            src="/logo-iov.png"
            width="60"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end lr-padding bold">
          <Navbar.Text>
            {'Block Explorer'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="app-body">
        <Search />
      </div>
    </div>
  );
}

export default App;