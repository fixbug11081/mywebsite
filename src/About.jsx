import web from "../src/images/about.png";
import './App.css';
import Common  from './Common';

function About() {
  return (
    <Common name="Welcome to About Page " imgsrc={web} visit="/contact" btnname="Contact now"/>
  );
}

export default About;
