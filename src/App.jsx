import React, { Component } from "react";
import { Table, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div>
            <Alert variant="primary">
              <center>TO DO LIST | SORTED</center>{" "}
            </Alert>
          </div>
          <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                  </tr>
                ))}
                ;
              </tbody>
            </Table>
          </div>
        </>
      );
    }
  }
}

export default App;
