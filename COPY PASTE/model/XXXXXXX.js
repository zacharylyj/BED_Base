//Admission Number: P2201861
//Name: Zachary Leong Yao Jie
//Class: DAAA/FT/1B/01

var dbConfig = require('./databaseConfig');


var XXXXXXX = {
//////////////////////////////////////////////////////////////////////////
//1st endpoint
    getDetails: function (callback) {
        var dbConn = dbConfig.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {

                var sql = "select * from MYDBASED"
                dbConn.query(sql, function (err, results) {
                    dbConn.end();
                    return callback(err, results);

                });
            };
        });
    },
//////////////////////////////////////////////////////////////////////////
//2nd endpoint
    updateDetail: function (object, DBCOLNAME_id, callback) {
        var dbConn = dbConfig.getConnection();
        var { foodName, foodDescription, price } = object;
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {
                var sql = "update MYDBASED set foodName=?, foodDescription=?, price=? where DBCOLNAME_id=?";
                var params = [foodName, foodDescription, price, DBCOLNAME_id]
            }
            dbConn.query(sql, params, function (err, results) {
                dbConn.end();
                return callback(err, results);
            });
        });
    },
//////////////////////////////////////////////////////////////////////////
//3rd endpoint
    getDetails: function (DBCOLNAME_id, callback) {
        var dbConn = dbConfig.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {
                var sql = "select DBCOLNAME_id, first_name, last_name from MYDBASED where id=?"
                dbConn.query(sql, [DBCOLNAME_id], function (err, results) {
                    dbConn.end();
                    return callback(err, results);
                });
            }
        });
    },
//////////////////////////////////////////////////////////////////////////
//4th endpoint
    getDetails: function (limit, offset, callback) {
        var dbConn = dbConfig.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {

                var sql = "select DBCOLNAME_id, first_name, last_name from MYDBASED limit ? offset ?"
                dbConn.query(sql, [limit, offset], function (err, results) {
                    dbConn.end();
                    return callback(err, results);

                });
            };
        });
    },
//////////////////////////////////////////////////////////////////////////
//5th endpoint
    addDetail: function (object, callback) {
        var dbConn = dbConfig.getConnection();
        var { first_name, last_name } = object;
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {
                var sql = "insert into MYDBASED(first_name, last_name) Values(?,?)"
                dbConn.query(sql, [first_name, last_name], function (err, results) {

                    dbConn.end();
                    return callback(err, results);


                });
            }
        });
    },
//////////////////////////////////////////////////////////////////////////
//6th endpoint
    updateDetail: function (object, DBCOLNAME_id, callback) {
        var dbConn = dbConfig.getConnection();
        var { first_name, last_name } = object;
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {
                if (last_name == undefined) {
                    var sql = "update MYDBASED set first_name=? where MYDBASEDr_id=?";
                    var params = [first_name, actor_id];
                }
                else if (first_name == undefined) {
                    var sql = "update MYDBASED set last_name=? where DBCOLNAME_id=?";
                    var params = [last_name, actor_id];
                }
                else {
                    var sql = "update MYDBASED set first_name=?, last_name=? where DBCOLNAME_id=?";
                    var params = [first_name, last_name, DBCOLNAME_id];
                }
                dbConn.query(sql, params, function (err, results) {
                    dbConn.end();
                    return callback(err, results);
                });
            }
        });
    },
//////////////////////////////////////////////////////////////////////////
//7th endpoint
    deleteDetail: function (DBCOLNAME_id, callback) {
        var dbConn = dbConfig.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            }
            else {
                var sql = "delete from MYDBASED where DBCOLNAME_id=?";
                dbConn.query(sql, [DBCOLNAME_id], function (err, results) {
                    dbConn.end();
                    return callback(err, results);
                });
            }
        });
    }

}
module.exports = XXXXXXX;