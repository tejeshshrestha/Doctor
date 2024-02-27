import { useState } from "react";
import axios from "axios";


const Form = () => {
    const [register, setRegister] = useState({})
    const handleAppointment = (event) => {
      event.preventDefault()
      axios.post("localhost:4000/api/appointment", register)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
    // useState is a function: It returns an array with two values: the current state and a function to update it
    //yo setRegister chai sabai ko lagi garya hoo...
    //register state banayoo..
    const handleChange = (event) => {
  //handleChange chai function banako ani event vaneko box ho tesma vako value chai linxaa..
  //phone ko case ma:
  //phone vanema vayera event vannni ma box banayoo..
      const name  = event.target.name;
      const value = event.target.value;
      // yo 30 ra 31 ma chai name: ... , name(email): email hanyo ... yesto hunxa
      //name vanni ma chai phone vani basyo
      //value ma chai 9 basyoo 
      const obj = {
        ...register,
        //register ma chai pahila ko name email haru basyo ani paxi chai phone no basyoo..
        [name]:value
      }
      //obj ma chai ekkaii choti sabai janxa value tei vayera obj banako.
      console.log(obj)
      //yesma chai current current obj haru k k ho tyo tyo print garxa.
      setRegister(obj)
      //yesma chai pahila vako value lai set garxa in register..
    }
    return (
      <div>
        <form className="appointment-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input className="form-name" onChange={handleChange} type="text" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input className="form-email" onChange = {handleChange} type="email" name="email" id="email" required/>
                    </div>  
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number:</label>
                      <input className="form-phone" onChange= {handleChange} type="tel" name="phone" id="phone"/>
                    </div>    
                    <div className="form-group">
                      <label htmlFor="date">Date:</label>
                      <input className="form-date" onChange= {handleChange} type="date" name="date" id="date" required/>
                      <label htmlFor="time">Time:</label>
                      <input className="form-time" onChange= {handleChange} type="time" name="time" id="time" required/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Problem:</label>
                      <textarea className="form-message" onChange= {handleChange} name="message" id="message"></textarea>
                    </div>  
                    <div className="form-span">
                      <button className="btn" onClick={handleAppointment}>Book Appointment</button>
                    </div>
                    
          </form>
      </div>
    )
  }

  export default Form;