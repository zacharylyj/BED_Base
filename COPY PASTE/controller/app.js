//Admission Number: P2201861
//Name: Zachary Leong Yao Jie
//Class: DAAA/FT/1B/01

var express = require('express');
var bodyParser = require('body-parser');
var userDB = require('../model/XXXXXXX');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());
//////////////////////////////////////////////////////////////////////////
//1st endpoint
app.get('/APINAME', function (req, res) {

    userDB.getDetails(function (err, results) {
        if (err) {
            res.status(500);
            res.type('application/json');
            res.send(`{"Result":"Internal Error"}`)

        } else {
            res.status(200);
            res.type('application/json');
            res.send(results)

        };
    });
});
//////////////////////////////////////////////////////////////////////////
//2nd endpoint
app.put('/APINAME/:id', function (req, res) {
    var DBCOLNAME_id = req.params.id;
    userDB.updateDetail(req.body, DBCOLNAME_id, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.type('application/json');
            res.send(`{"Result":"Internal Error"}`);
        }
        else {
            res.status(201);
            res.type('application/json');
            res.send(`{"Affected_Rows":"${results.affectedRows}"}`);
        }
    });
});
//////////////////////////////////////////////////////////////////////////
//3rd endpoint
app.get('/APINAME/:id', function (req, res) {
    var DBCOLNAME_id = req.params.id;
    userDB.getDetails(DBCOLNAME_id, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.type('application/json');
            res.send(`{"error_msg":"Internal server error"}`);

        } else {
            if (results.length == 1) {
                res.status(200);
                res.type('application/json');
                res.send[0];
                res.send(results[0]);
            }

            else {
                res.status(204);
                res.send();
            };
        };
    });
});
//////////////////////////////////////////////////////////////////////////
//4th endpoint
app.get('/APINAME', function (req, res) {
    var limit = req.query.limit;
    var offset = req.query.limit;

    limit = limit ? parseInt(limit) : 20;
    offset = offset ? parseInt(offset) : 0;

    if (isNaN(limit) || isNaN(offset)) {
        res.status(500);
        res.type('application/json');
        res.send(`{"error_msg" : "Internal server error"}`);
    }

    userDB.getDetails(limit, offset, function (err, results) {
        if (err) {
            res.status(500);
            res.type('application/json');
            res.send(`{"error_msg":"Internal server error"}`)

        } else {
            res.status(200);
            res.type('application/json');
            res.send(results);

        };
    });
});
//////////////////////////////////////////////////////////////////////////
//5th endpoint
app.post('/APINAME', function (req, res) {

    if (req.body.first_name == null || req.body.last_name == null) {
        res.status(400);
        res.type('application/json');
        res.send(`{"error_msg":"missing data"}`);
    }
    userDB.addDetail(req.body, function (err, results) {
        if (err) {
            res.status(500);
            res.type('application/json');
            res.send(`{"error_msg":"Internal server error"}`);
        }
        else {
            res.status(201);
            res.type('application/json');
            res.send(`{"actor_id": "${results.insertId}"}`);
        }
    });
});
//////////////////////////////////////////////////////////////////////////
//6th endpoint
app.put('/APINAME/:id', function (req, res) {
    var DBCOLNAME_id = req.params.id;

    if (req.body.first_name == undefined && req.body.last_name == undefined) {
        res.status(400);
        res.type('application/json');
        res.send(`{"error_msg":"missing data"}`);
        return
    }
    userDB.updateDetail(req.body, DBCOLNAME_id, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.type('application/json');
            res.send(`{"error_msg":"Internal server error"}`);
        }
        else {
            if (results.affectedRows >= 1) {
                res.status(200);
                res.type('application/json');
                res.send(`{"success_msg": "record updated"}`);
            }

            else {
                res.status(204);
                res.send();
            };

        }
    });
});
//////////////////////////////////////////////////////////////////////////
//7th endpoint
app.delete('/APINAME/:id', function (req, res) {
    var DBCOLNAME_id = req.params.id;
    userDB.deleteDetail(DBCOLNAME_id, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500);
            res.type('application/json');
            res.send(`{"error_msg":"Error ocurred"}`);
        }
        else {
            if (results.length == 1) {
                res.status(200);
                res.type('application/json');
                res.send(`{"success_msg": "record updated"}`)
            }

            else {
                res.status(204);
                res.send();
            };

        }
    });
});
//////////////////////////////////////////////////////////////////////////
//8th endpoint
app.get("/APINAME/:id/films", function (req, res) {
    const category_id = req.params.id;
    userDB.innerjoin(category_id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send({ "Message": "internal server error" });
        } else {
            res.status(200);
            res.send(result);
        }
    });
});

app.get("/APINAME1", function (req, res) {
    userDB.hacks(function (err, result) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send({ "Message": "internal server error" });
        } else {
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(body),
                'Content-Type': 'text/plain'
            });
        }
    });
});

module.exports = app;