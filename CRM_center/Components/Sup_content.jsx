import { useEffect } from "react";
import { useState } from "react"




export function Sup_content() {
    const [performance, setPerformance] = useState([]);
    const [ongoingCalls, setOngoingCalls] = useState([]);
    const [contacted, setContacted] = useState([]);

    async function get_perf() {
        try {
            const response = await fetch('http://localhost:5001/get_performance');
            const data = await response.json();
            console.log(data)
            setPerformance(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get_perf();
    }, []);


    async function Ongoing_calls() {
        try {
            const response = await fetch('http://localhost:5001/ongoingCall');
            const datacall = await response.json();
            console.log(datacall)
            setOngoingCalls(datacall);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Ongoing_calls();
    }, []);


    async function get_contacted() {
        try {
            const response = await fetch('http://localhost:5001/get_contacted');
            const contacteddata = await response.json();
            setContacted(contacteddata);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get_contacted();
    }, [])


    return (
        <div className="sup_wrapper">
          
            <section className="top_left_sec" id="Agents_Performance">
                <h2>ONGOING SALES</h2>
                <table>
                    <thead>
                        <tr className="theads">
                            <th>Agent ID</th>
                            <th>Last Name</th>
                            <th>First Name </th>
                            <th>Sales number</th>
                            <th>Converted Calls</th>
                            <th>Transferred Calls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performance.map(agent => (
                            <tr key={agent.agent_id} className="tbody">
                                <td>{agent.agent_id}</td>
                                <td>{agent.first_name}</td>
                                <td>{agent.last_name}</td>
                                <td>{agent.number_of_sales}</td>
                                <td>{agent.number_of_converted_calls}</td>
                                <td>{agent.number_of_transfered_calls}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="top_right_sec">
                <h2>ONGOING CALLS</h2>
                <table>
                    <thead>
                        <tr className="theads">
                            <th>Agent ID</th>
                            <th>First Name</th>
                            <th>Lase Name </th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ongoingCalls.map(call2 => (
                            <tr key={call2.emp_id} className="tbody">
                                <td>{call2.emp_id}</td>
                                <td>{call2.first_name}</td>
                                <td>{call2.last_name}</td>
                                <td>{call2.team}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </section>

        <section className="bot_left_sec">
            <h2> Contacted </h2>
                <table>
                    <thead>
                        <tr className="theads">
                            <th>Contact ID</th>
                            <th>First Name</th>
                            <th>Last Name </th>
                            <th>Call Result </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacted.map(call => (
                            <tr key={call} className="tbody">
                                <td>{call.contact_id}</td>
                                <td>{call.first_name}</td>
                                <td>{call.last_name}</td>
                                <td>{call.call_result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="top_right_sec">
                <h2>ONGOING CALLS</h2>
                <table>
                    <thead>
                        <tr className="theads">
                            <th>Agent ID</th>
                            <th>First Name</th>
                            <th>Lase Name </th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ongoingCalls.map(call2 => (
                            <tr key={call2} className="tbody">
                                <td>{call2.emp_id}</td>
                                <td>{call2.first_name}</td>
                                <td>{call2.last_name}</td>
                                <td>{call2.team}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>        
        </section>
        <section className="bot_right_sec">

        </section>
        </div>
   
    )
}