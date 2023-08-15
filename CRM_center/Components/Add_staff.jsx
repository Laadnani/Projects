export function Add_staff () {
    return (
        <> 
        <header className="staff_title"> Add Staff </header>
        
        <section className="staff_info">

            <div > 
                <label htmlFor="First_Name">First Name</label>
                <input type="text" className="First_Name" placeholder="First Name"/>
        
                <label htmlFor="Last_Name">Last Name</label>
                <input type="text" className="Last_Name" placeholder="Last Name" />
                </div>
            <div>
                <label htmlFor="Username">Username</label>
                <input type="text" className="Username" placeholder="Username" />
    
                <label htmlFor="Password">Password</label>
                <input type="Password" className="Password" placeholder="Password" />
                </div>

            <div>
                <label htmlFor="Role">Role</label>
                <input type="text" className="Role" placeholder="Role" />
         
                <label htmlFor="CIN">C I N</label>
                <input type="text" className="CIN" placeholder="CIN" />
                </div>

            <div>
                <label htmlFor="Bank_Details">Bank Details</label>
                <input type="text" className="Bank_Details" placeholder="Bank Details" />
              
                <label htmlFor="CNSS">CNSS</label>
                <input type="text" className="CNSS" placeholder="CNSS" />
                </div>

            <div>
                <label htmlFor="Phone">Phone</label>
                <input type="text" className="Phone" placeholder="Phone" />
              
                <label htmlFor="Email">Email</label>
                <input type="text" className="Email" placeholder="Email" />
                </div>

            <div>
                <label htmlFor="Start_Time">Start Time</label>
                <input type="date" className="Start_Time" placeholder="Start Time" />
        
                <label  htmlFor="End_Time">End_Time</label>
                <input type="date" className="End_Time" placeholder="End_Time" />
                </div>
            
             </section>

            <button type="Submit" className="add_staff_btn"> Add Staff</button>

        
        </>
    )
}