import React, { Component } from "react";

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
            <ul>
              {items.map((item) => (
                <li>
                  "User_id": {item.userId} | title = {item.title}
                </li>
              ))}
              ;
            </ul>
          </div>
        </>
      );
    }
  }
}

export default App;
