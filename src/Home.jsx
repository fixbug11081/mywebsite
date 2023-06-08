import web from "../src/images/img1.jpeg";
import './App.css';
import {NavLink} from "react-router-dom";
import Common from "./Common";

function Home() {
  return (
    <>
    <Common name="Grow your business with " imgsrc={web} visit="/contact" btnname="Get Started"/>
    </>
  );
}

export default Home;
