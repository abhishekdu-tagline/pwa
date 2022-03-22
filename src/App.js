import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Service from "./Service";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home Page</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/service">Service Page</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users">Users Page</Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Switch>
            <Route path="/service">
              {" "}
              <Service />{" "}
            </Route>
            <Route path="/users">
              {" "}
              <Users />
            </Route>
            <Route path="/">
              {" "}
              <Home />{" "}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
