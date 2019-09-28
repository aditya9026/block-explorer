import * as React from 'react'
import './App.css';
import Search from "./containers/Search";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}

export default App;