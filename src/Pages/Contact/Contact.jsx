import { Outlet, Link } from "react-router-dom";
import Home from "../Home/Home";
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">Home button</Link>
    </div>
  );
}
export default Contact;
