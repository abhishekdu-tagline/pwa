import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("onLine");
  useEffect(() => {
    console.log("useEffect is deprecated");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res is ", res);
        setData(res.data);
        localStorage.setItem("post", JSON.stringify(res.data));
      })
      .catch((err) => {
        // console.log("Error is ", err);
        console.log("Error block is run");
        let collection = localStorage.getItem("post");
        setData(JSON.parse(collection));
        setMode("offLine");
      });
  }, []);
  console.log("Data is", data);
  return (
    <>
      <div>
        <div className="alert alert-warning" role="alert">
          {mode === "offLine" ? <div> you are in offline Mode </div> : null}
        </div>
      </div>
      User Component
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Body</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
