//Admission Number: P2201861
//Name: Zachary Leong Yao Jie
//Class: DAAA/FT/1B/01

var mysql = require('mysql');

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "bed_dvd_root",
            password: "pa$$woRD123",
            database: "NAMEOFSCHEMAS",
            dateStrings: "true"
        });
        return conn;
    }
};
module.exports = dbconnect

