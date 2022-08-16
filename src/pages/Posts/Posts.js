import * as React from 'react';
import {useEffect, useState} from 'react';

import Navbar from './../../shared/components/Navbar';



export default function Posts() {

  const [posts, setPosts] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  });



  return (
    <div>
      <Navbar/>
        {posts.map(({ userId, id, title, body }) => (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
}
