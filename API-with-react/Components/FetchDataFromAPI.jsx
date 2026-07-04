import React, { useEffect, useState } from "react";
import axios from "axios";

export const FetchDataFromAPI = () => {
  // This says it is an empty array as the initialization
  const [data, saveData] = useState([]);
  const [products, saveProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // axios.all() expects an array of promises
    axios
      .all([
        axios.get("https://dummyjson.com/posts"),
        axios.get("https://dummyjson.com/products"),
      ])
      .then(([posts, products]) => {
        console.log(posts);
        console.log(products);
        saveData(posts.data);
        saveProducts(products.data);
        setLoading(false);
        // throw new Error("Something went wrong, meowww");
        // Throwing custom error, and catching the error below in catch block
      })
      .catch((err) => {
        console.log(`Error fetching data: `, err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  // Empty dependency array : [], renders only ONCE on the component mount

  // Below is the loading state
  if (loading) {
    return <p>Loading...</p>;
  }

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
