const queries = require('./queries');

let {pool : pool} = require ('./database')

const get_performance = () => {
    return new Promise (function (resolve, reject) {
        pool.query(queries.Performance_table, (error, results) => {
            if (error) {
                reject(error);
                console.log('Error in:', error)
            }
            resolve(results.rows)
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

module.exports = {
    get_performance,
    get_contact
}