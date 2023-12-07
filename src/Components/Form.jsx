import { useState } from "react";
import InputGroup from "./InputGroup";
import "/home/jitendra/my-project/cv-builder/src/Styles/App.css";

export default function Form() {
  const [name, setName] = useState("Jitendra Choudhary");
  const [email, setEmail] = useState("info.jiitendra@gmail.com");
  const [phone, setPhone] = useState("+44 902 781 871 12");
  const [address, setAddress] = useState("New York, NY, USA");

  const handleNameChange = (e) => {
    let newName = setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    let newName = setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    let newName = setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    let newName = setAddress(e.target.value);
  };

  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <form>
        {/* <label id="fullName">Full name</label> */}
        <InputGroup
          id="fullName"
          labelText="Full name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          type="text"
        />
        {/* <label id="email">Email</label> */}
        <InputGroup
          id="email"
          labelText="Email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
          type="email"
        />
        {/* <label id="phoneNumber">Phone number</label> */}
        <InputGroup
          id="phoneNumber"
          labelText="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
          type="phone"
        />
        {/* <label id="address">Address</label> */}
        <InputGroup
          id="address"
          labelText="Address"
          value={address}
          onChange={handleAddressChange}
          placeholder="City, Country"
          type="text"
        />
      </form>
    </div>
  );
}
