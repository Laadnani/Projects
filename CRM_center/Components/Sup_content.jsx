import { useEffect } from "react";
import { useState } from "react"




export function Sup_content() {
    const [performance, setPerformance] = useState([]);
    
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
    }, [])



    return (
        <div className="sup_wrapper">
            <section className="top_left_sec" id="Agents_Performance">

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
        </section>
        <section className="top_right_sec">

        </section>
        <section className="bot_left_sec">

        </section>
        <section className="bot_right_sec">

        </section>
        </div>
   
    )
}