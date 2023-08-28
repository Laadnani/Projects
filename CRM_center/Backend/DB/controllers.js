const queries = require('./queries');

let {pool : pool} = require ('./database')

const get_performance = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.Performance_table, (error, results) => {
            if (error) {
                reject(error);
                console.log('Error in:', error);
            }
            else resolve(results.rows)
        })
    })
} 


const get_contact = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.Get_contacts, (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
        })
    })
}

        // Controller for API call to get attendence JSON response 
        
const get_attendence = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.get_attendence, (error, results) => {
            if (error) {reject(error); console.log(error)}
            else resolve(results.rows)
        })
    })
}

const get_going_calls = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.ongoing_call, (error, results) => {
            if (error) {reject(error); console.log(error)}
            else resolve(results.rows)
        })
    })
}

const get_contacted = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.contacted, (error, results) => {
            if (error) {reject(error); console.log(error)}
            else resolve(results.rows)
        })
    })
};



module.exports = {
    get_performance,
    get_contact,
    get_attendence,
    get_going_calls,
    get_contacted,
}