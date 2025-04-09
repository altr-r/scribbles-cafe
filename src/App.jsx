import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h3>Blogs are loading.....</h3>}>
        <Blogs></Blogs>
      </Suspense>
    </>
  );
}

export default App;
