import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const blogsPromise = fetch("/blogs.json").then((res) => res.json());
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h3>Blogs are loading.....</h3>}>
        <Blogs blogsPromise={blogsPromise}></Blogs>
      </Suspense>
    </>
  );
}

export default App;
