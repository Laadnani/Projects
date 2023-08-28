import { useState, useEffect } from "react";


export function Sup_attendence () {

    const [attendence, setAttendence] = useState([]);

    async function get_attend() {
        try {
            const response = await fetch('http://localhost:5001/get_attendence');
            const data = await response.json();
            console.log(data)
            setAttendence(data);
        } catch (error) {
            console.log(error);
        }
    };

     useEffect(() => {
        get_attend();
    }, []);

    return (
        <> 
        <div className="attend_wrapper" >
            {/* table containing number of hours of leave and absence of employees */}
            <header className="attend_title"> Attendence sheet </header>

                <table className="attendence_sheet">
                    <thead>
                        <tr className="attendhead">
                            <th>Agent ID</th>
                            <th>Last Name</th>
                            <th>First Name </th>
                            <th>Number of hours worked</th>
                            <th>Number of missed hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendence.map(agent => (
                            <tr key={agent.emp_id} className="tbody">
                                <td>{agent.emp_id}</td>
                                <td>{agent.first_name}</td>
                                <td>{agent.last_name}</td>
                                <td>{agent.number_of_worked}</td>
                                <td>{agent.number_of_missed}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
        <div className="attend_imput"> 
            { /* imput to change or delete number of hours of absence or leave of employees */}
            <div className="justif_input"> Justification sheet </div>
            </div>
        </>
    )
}