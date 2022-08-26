import * as React from "react";
import { useEffect, useState } from "react";

import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";

import axios from "axios";
import Navbar from './../../shared/components/navbar/Navbar';

export default function Desafio2() {
  const [posts, setPosts] = useState([]);

  const styleNavBar = {
    position: "relative",
    left: "611px",
    top: "27px",
    transition: "none 0s ease 0s"
  }

  const getPost = (page = 1) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => {
        // console.clear();
        console.log(response.data);
        setPosts(response.data);
      });
  };

  useEffect(() => {
    getPost();
  }, []);


  const handlePageClick = (e) => {
    console.log(e.selected);
    getPost(e.selected + 1);
  };

  return (
    <div>
      <div style={styleNavBar} className="justify-content-center">
        <Navbar/>
      </div>
      <div className="table-responsive container pt-4 shadow-lg p-3 mb-5 mt-4">
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate 
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          />
      </div>
      </div>
  );
}
