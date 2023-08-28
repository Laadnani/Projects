import React, { useState } from 'react';


export function Add_staff () {

       const [staffInfo, setStaffInfo] = useState({
            emp_id : '',
            First_Name: '',
            Last_Name: '',
            Username: '',
            Password: '',
            Role: '',
            CIN: '',
            Bank_Details: '',
            CNSS: '',
            Phone: '',
            Email: '',
            Start_Time: '',
            End_Time: ''
        });

        const formatDate = (date) => {
        const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        return formattedDate;
                };

    const handleSubmit = async (event) => {
        event.preventDefault();

       
        const apiUrl = 'http://localhost:5001/add'; // Need to be adjust for production
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(staffInfo),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data);
                // Reset the form or perform other actions upon successful submission
                window.location.reload();
                alert('New Staff added successfully');
            } else {
                console.error('Request failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.statusText);
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStaffInfo({
            ...staffInfo,
            [name]: value
        });
    };



    return (
        <> 
        <header  className="staff_title"> Add Staff </header>
        
            <form onSubmit={handleSubmit}  className="staff_info">

            <div > 
                <label htmlFor="emp_id"> ID </label>
                <input type="text"
                    name='emp_id'
                    value={staffInfo.emp_id}
                    onChange={handleInputChange}
                    placeholder='ID' />

                <label htmlFor="First_Name">First Name</label>
                    <input type="text"
                        name="First_Name"
                        value={staffInfo.First_Name}
                       onChange={handleInputChange}
                        placeholder="First Name" />
        
                <label htmlFor="Last_Name">Last Name</label>
                    <input type="text"
                        name="Last_Name"
                        value={staffInfo.Last_Name}
                        onChange={handleInputChange}
                        placeholder="Last Name" />
                </div>
            <div>
                <label htmlFor="Username">Username</label>
                    <input type="text"
                        name="Username"
                        value={staffInfo.Username}
                       onChange={handleInputChange}
                        placeholder="Username" />
    
                <label htmlFor="Password">Password</label>
                    <input type="password"
                        name="_Password"
                        value={staffInfo._Password}
                      onChange={handleInputChange}
                        placeholder="Password" />
                </div>

            <div>
                <label htmlFor="Role">Role</label>
                    <input type="text"
                        name="_Role"
                        value={staffInfo._Role}
                      onChange={handleInputChange}
                        placeholder="Role" />
         
                <label htmlFor="CIN">C I N</label>
                    <input type="text"
                        name="CIN"
                        value={staffInfo.CIN}
                       onChange={handleInputChange}
                        placeholder="CIN" />
                </div>

            <div>
                <label htmlFor="Bank_Details">Bank Details</label>
                    <input type="text"
                        name="Bank_Details"
                        value={staffInfo.Bank_Details}
                     onChange={handleInputChange}
                        placeholder="Bank Details" />
              
                <label htmlFor="CNSS">CNSS</label>
                    <input type="text"
                        name="CNSS"
                        value={staffInfo.CNSS}
                        onChange={handleInputChange}
                        placeholder="CNSS" />
                </div>

            <div>
                <label htmlFor="Phone">Phone</label>
                    <input type="text"
                        name="Phone"
                        value={staffInfo.Phone}
                        onChange={handleInputChange}
                        placeholder="Phone" />
              
                <label htmlFor="Email">Email</label>
                    <input type="text"
                        name="Email"
                        value={staffInfo.Email}
                       onChange={handleInputChange}
                        placeholder="Email" />
                </div>

            <div>
                <label htmlFor="Start_Time">Start Time</label>
                    <input type="datetime-local"
                        name="Start_Time"
                        value={staffInfo.Start_Time}
                        onChange={handleInputChange}
                        placeholder="Start Time" />
        
                <label  htmlFor="End_Time">End_Time</label>
                    <input 
                        type="datetime-local"
                        name="End_Time"
                        value={staffInfo.End_Time}
                      onChange={handleInputChange}
                        placeholder='End Time' />
                </div>
            
           

                <button type="Submit"  className="add_staff_btn"> Add Staff</button>

            </form>
        </>
    )
}