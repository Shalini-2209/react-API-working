import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataFetching = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div>
      <Alert variant="primary">
        <center>TO DO LIST | SORTED</center>{" "}
      </Alert>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.userId} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
