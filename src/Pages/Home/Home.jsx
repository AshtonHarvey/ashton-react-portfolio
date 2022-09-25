import "./Hero";
import "./Resume";
import Contact from "../Contact/Contact";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/contact">contact button</Link>
    </div>
  );
}
export default Home;
