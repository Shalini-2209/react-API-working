import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataFetching = () => {
  const [list, setList] = useState({});
  const [userId, setUserId] = useState(1);
  const [btnData, setBtnData] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [btnData]);

  return (
    <div>
      <Alert variant="primary">
        <center>TO DO LIST | SEARCH VIA ENTERING USER ID</center>{" "}
      </Alert>

      <br />
      <br />

      <center>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter task id:"
        />
        <br />
        <br />
        <Button variant="success" onClick={() => setBtnData(userId)}>
          Get Records
        </Button>{" "}
      </center>
      {/* <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.userId} {item.title}
          </li>
        ))}
      </ul> */}

      <br />
      <br />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {/* Render all values */}
          {/* {list.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
          ; */}

          <tr key={list.id}>
            <td>{list.id}</td>
            <td>{list.title}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DataFetching;
