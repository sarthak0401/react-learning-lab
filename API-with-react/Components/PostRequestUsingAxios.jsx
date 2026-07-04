import axios from "axios";
import React, { useState } from "react";

export const PostRequestUsingAxios = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: "Foo2",
      body: "bar2",
      userId: 1,
    };

    // This thing gets executed before every requests reaches axios REST methods
    axios.interceptors.request.use((request) => {
      console.log("Starting request");
      console.log(request);
      return request;
    });

    axios.interceptors.response.use((response) => {
      console.log(response);
      return response;
    });

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log("New post added : ", response.data);
        setData([response.data, ...data]);
        console.log(data);
      });
  };

  return (
    <>
      <div className="mt-4">
        <h1>This is the post request</h1>
        <div>
          <form action="submit" onClick={handleSubmit}>
            <button
              type="submit"
              className="bg-white p-3 rounded-xl text-black mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
