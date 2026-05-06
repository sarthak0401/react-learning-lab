import React, { useEffect, useState } from "react";

export const FetchDataFromAPI = () => {
  // This says it is an empty array as the initialization
  const [data, saveData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((json) => saveData(json));
  }, []);

  //console.log(data);

  return (
    <>
      <h1>API's</h1>
      <ul>
        {data.posts?.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
