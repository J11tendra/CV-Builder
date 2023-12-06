import { useState } from 'react';
import "/home/jitendra/my-project/digital-ocean-vite/src/Styles/App.css";

export default function Form() {
    const [ name, setName ] = useState("Jitendra Choudhary");
    const [ email, setEmail ] = useState("info.jiitendra@gmail.com");
    const [ phone, setPhone ] = useState("+44 902 781 871 12");
    const [ address, setAddress ] = useState("New York, NY, USA");

    const handleNameChange = (e) => {
        let newName = setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        let newName = setEmail(e.target.value)
    }

    const handlePhoneChange = (e) => {
        let newName = setPhone(e.target.value)
    }

    const handleAddressChange = (e) => {
        let newName = setAddress(e.target.value)
    }

    return (
        <div className='personal-details'>
        <h1>Personal Details</h1>
        <form>
            <label id="fullName">Full name</label>
            <input id="fullName" value={name} onChange={handleNameChange} placeholder='Enter your name' type="text" />
            <label id="email">Email</label>
            <input id="email" value={email} onChange={handleEmailChange} placeholder='Enter email' type="email" />
            <label id="phoneNumber">Phone number</label>
            <input id="phoneNumber" value={phone} onChange={handlePhoneChange} placeholder='Enter phone number' type="phone" />
            <label id="address">Address</label>
            <input id="address" value={address} onChange={handleAddressChange} placeholder='City, Country' type="text" />
        </form>
        </div>
    )
}