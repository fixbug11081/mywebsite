
import { useState } from 'react';
import './App.css';

function Contact() {
  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
  });

  const inputEvent = (event)=>{
    const {name,value} = event.target;

    setData((preVal)=>{
            return {
              ...preVal,
              [name]:value
            }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is : ${data.fullname}. My phone is ${data.phone}. Email is ${data.email}.I want to say ${data.message}`);
  };
  return (<>
    <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container contact-div'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full name</label>
              <input type="text"  name="fullname" value={data.fullname} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="number"  name="phone" value={data.phone} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email"  name="email" value={data.email} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea  name="message" value={data.message} onChange={inputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}

export default Contact;
