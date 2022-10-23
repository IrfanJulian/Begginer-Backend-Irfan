const pool = require('../configs/db')

const getData = () =>{
    return pool.query(`SELECT * FROM users`)
}

const insertData = (data) =>{
    const {FullName, email, role, password} = data
    return pool.query(`INSERT INTO users(FullName, email, role, password)VALUES('${FullName}', '${email}', '${role}', '${password}')`)
}

const updateData = (id, data) =>{
    const {FullName, email, role, password} = data
    return pool.query(`UPDATE users SET FullName='${FullName}', email='${email}', role='${role}', password='${password}' WHERE id=${id}`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM users WHERE id=${id}`)
}

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}