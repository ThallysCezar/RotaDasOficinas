import React from "react";
import Navbar from "../../shared/components/Navbar";
import { useEffect, useState } from "react";

export default function Albuns() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/albums";

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
      <div className="table-responsive">
        <table className="table table-hove table-sm">
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
