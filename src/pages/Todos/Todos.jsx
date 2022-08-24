import React from "react";
import Navbar from "../../shared/components/NavBar/Navbar";
import { useEffect, useState } from "react";

export default function Todos()  {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setPosts(data));
  });

  return (
    <div>
      <Navbar />
      <div className="table-responsive container pt-4 shadow-lg p-3 mb-5 mt-4">
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
