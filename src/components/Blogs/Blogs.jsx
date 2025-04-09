import React, { use } from "react";

const Blogs = ({ blogsPromise }) => {
  const blogs = use(blogsPromise);
  console.log(blogs);
  return <div></div>;
};

export default Blogs;
