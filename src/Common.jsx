//import web from "../src/images/img1.jpeg";
import './App.css';
import {NavLink} from "react-router-dom";

function Common(props) {
  return (
    <>
    <section id="header" className='d-flex align-items-center header '>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div class="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 txt-content' style={{marginTop:150}}>
                    <h1>{props.name}<strong className='brand-name'>DigiEasyNow</strong></h1>
                    <h3 className='my-3'>
                        we are the team of talented developer making the websites.
                    </h3>
                    <div className='mt-5'>
                        <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
                    </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img '>
                    <img src={props.imgsrc} className="img-fluid animated"  alt="something"/>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Common;
