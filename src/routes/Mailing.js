import { useState } from "react"
import { Link } from "react-router-dom";

const initDetails = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  emailAddress: "",
  gender: "",
  dateOfBirth: new Date(),
  bumhead: false,
  favouriteColor: "",
  password: "",
  volume: 0,
};

function prettyDate(date) {
  let pretty = "";
  pretty += date.getDate().toString().padStart(2, "0");
  pretty += "/" + (date.getMonth() + 1).toString().padStart(2, "0");
  pretty += "/" + date.getFullYear().toString();
  return pretty;
}

function prettyPrint(obj) {
  return Object.entries(obj).map(([key, value]) => {
    let printedVal;
    if (value instanceof Date) {
      printedVal = prettyDate(value);
    }
    else {
      printedVal = value.toString();
    }
    return key.padStart(14, " ") + ": " + printedVal;
  }).join('\n');
} 

const Mailing = () => {

  const [details, setDetails] = useState(initDetails);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    setSubmitted(true);
  }

  function handleRadioChange(event) {
    if (event.target.checked) {
      const newDetails = {...details};
      newDetails.gender = event.target.value;
      setDetails(newDetails);
    }
  }

  const handleFieldChange = field => e => {
    const newDetails = {...details};
    newDetails[field] = e.target.value;
    setDetails(newDetails);
  }

  return (
    <div>
      {!submitted ? 
        <>
          <h1>Mailing List</h1>
          <p>Please enter your details to be added to the mailing list:</p>
          <form onSubmit={handleSubmit}>
    
            <label>First Name</label><br/>
            <input type="text" onChange={handleFieldChange("firstName")}/><br/><br/>
    
            <label>Last Name</label><br/>
            <input type="text" onChange={handleFieldChange("lastName")}/><br/><br/>
    
            <label>Mobile Number</label><br/>
            <input type="tel" onChange={handleFieldChange("mobileNumber")}/><br/><br/>
    
            <label>Email Address</label><br/>
            <input type="email" onChange={handleFieldChange("emailAddress")}/><br/><br/>
    
            <label>Gender</label><br/>
            <input type="radio" name="gender" value="male" onChange={handleRadioChange}/>
            <label>Male</label><br/>
            <input type="radio" name="gender" value="female" onChange={handleRadioChange}/>
            <label>Female</label><br/>
            <input type="radio" name="gender" value="intersex" onChange={handleRadioChange}/>
            <label>Intersex</label><br/>
            <input type="radio" name="gender" value="pussycat" onChange={handleRadioChange}/>
            <label>Pussy Cat</label><br/><br/>
    
            <label>Date Of Birth</label><br/>
            <input type="date" onChange={handleFieldChange("dateOfBirth")}/><br/><br/>
    
            <label>Bumhead</label><br/>
            <input type="checkbox" onChange={e => {
              const newDetails = {...details};
              newDetails.bumhead = e.target.checked;
              setDetails(newDetails);
            }}/><br/><br/>
    
            <label>Favourite Color</label><br/>
            <input type="color" onChange={handleFieldChange("favouriteColor")}/><br/><br/>
    
            <label>Password</label><br/>
            <input type="password" onChange={handleFieldChange("password")}/><br/><br/>
    
            <label>Volume</label><br/>
            <input type="range" min="0" max="50" onChange={handleFieldChange("volume")}/><br/><br/>
    
            <input type="submit" value="Submit"/>
            <input type="reset" className="button-right"/>
    
          </form>
        </>
      : 
        <>
          <h1>Success!</h1>
          <p>You have been added to the mailing list.</p>
          <p>Here are your collected details:</p>
          <pre>{prettyPrint(details)}</pre>
          <Link to="/" className="no-left">Home</Link>
        </>
      }
    </div>
  )
}

export default Mailing