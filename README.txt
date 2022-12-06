L txt user loser








All copy paste
PXXXXXXX-1B01

name - description | examples | where its found
1.) NAMEOFSCHEMAS - schemaname | bed_dvd_db | in databaseConfig

2.) XXXXXXX - file name | app.js | on file name, app.js, XXXXXXX.js

3.) APINAME - api name | console.log("Server hosted at http://{host}:host:{port}/APINAME"); | in server.js, app.js

4.) MYDBASED - data-base name | actor, foodmenu | app.js, XXXXXXX.js

5.) DBCOLNAME_id - database id colum | id, actor_id | app.js, XXXXXXX.js

code dump
split
let text = "How are you doing today?";
const myArray = text.split(" ");
How,are,you,doing,today

slice
let text = "Hello world!";
let result = text.slice(0, 5);
Hello

search
let text = "Mr. Blue has a blue house";
let position = text.search("blue");
15

join
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"

null
SELECT column_names FROM table_name WHERE column_name (IS NOT NULL)/(IS NULL);
GG inner join
SELECT F.title, P.amount, P.payment_date, P.customer_id FROM film as F INNER JOIN inventory as I ON F.film_id = I.film_id INNER JOIN rental as R ON I.inventory_id = R.inventory_id INNER JOIN payment as P ON R.rental_id = P.rental_id WHERE P.customer_id =1;

SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

INNER JOIN: Returns records that have matching values in both tables
LEFT JOIN: Returns all records from the left table, and the matched records from the right table
RIGHT JOIN: Returns all records from the right table, and the matched records from the left table
CROSS JOIN: Returns all records from both tables

OTHERS
response.writeHead(200, {
'Content-Length': Buffer.byteLength(body),
'Content-Type': 'text/plain'
});

for (let i of result) {
total += i.price
}

SELECT f.flightid, a1.name, a2.name FROM flight as f
inner join airport as a1 on f.originalAirport = a1.airportid
inner join airport as a2 on f.destinationAirport = a1.airportid
where f.originalAirport = 10 and f.destinationAirport = 7