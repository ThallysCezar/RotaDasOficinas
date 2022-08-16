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
          <div className="table-responsive">
            <table className="table table-hove tabler-bordered w-100 p-3">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col" key={id}>ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{userId}</td>
                  <td className="text-center">{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}
