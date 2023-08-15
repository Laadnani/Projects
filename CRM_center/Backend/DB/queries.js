/* Performance queries - Showing performance by/per agent */

        /* Average Call time */
const Call_time = 'SELECT  u.first_name || \' \' || u.last_name AS agent, avg(cl.call_time) AS "Average Call time" FROM call_log cl JOIN usage_right u ON cl.agent_id = u.emp.id group by cl.agent_id, agent';

        /* Number of Calls */
const Number_of_calls = 'SELECT u.first_name || \' \' || u.last_name AS agent, count(*) AS "Number of Calls" FROM call_log cl JOIN usage_right u ON cl.agent_id = u.emp_id GROUP BY agent';

    /* Number of Sales */ 
const Number_of_sales = 'SELECT  u.first_name || \' \' || u.last_name AS agent, COUNT (*) AS "Number of Sales" FROM orders o JOIN usage_right u ON o.agent_id = u.emp_id GROUP BY agent';

    /* Convertion rate */

const Convertion_rate = '  SELECT agent_calls.agent,agent_calls."Number of Calls", agent_sales."Number of Sales",(agent_sales."Number of Sales":: float / agent_calls."Number of Calls") * 100 AS "Conversion Rate (%)" FROM (SELECT u.first_name || \' \' || u.last_name AS agent, COUNT(*) AS "Number of Calls" FROM call_log cl JOIN usage_right u ON cl.agent_id = u.emp_id GROUP BY agent) AS agent_calls JOIN (SELECT u.first_name || \' \' || u.last_name AS agent, COUNT(*) AS "Number of Sales" FROM orders o JOIN usage_right u ON o.agent_id = u.emp_id GROUP BY agent) AS agent_sales ON agent_calls.agent = agent_sales.agent; ' ;

    /* Number of transfered Calls */

const Transfer_rate = 'SELECT u.first_name || \' \' || u.last_name AS agent,  count(transfer_time)  as transfers from call_log cl JOIN usage_right u ON u.emp_id = cl.agent_id where cl.transfered = \'Yes\' group by agent';


    /* Get Performance table */

const Performance_table = 'SELECT ul.first_name, ul.last_name, ap.agent_id, ap.number_of_sales, ap.number_of_converted_calls, ap.number_of_transfered_calls FROM agents_performance ap JOIN usage_right ul ON ul.emp_id = ap.agent_id ORDER BY number_of_sales DESC';

  /* GEt all contacts*/
  
  const Get_contacts = ' Select * from contact';

module.exports = {
    Call_time,
    Number_of_calls,
    Number_of_sales,
    Convertion_rate,
    Transfer_rate,
    Performance_table,
    Get_contacts
}