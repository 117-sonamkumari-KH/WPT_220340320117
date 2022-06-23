
const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.static('abc'));
const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: 'Cdac',
    database: 'wptmodule',
	port:3306

});
app.get('/adddetails', (req, resp) => {
	let bookid = req.query.bookid;
	let bookname =req.query.bookname;
	let price = req.query.price;
	let output ={status:false}
	connection.query("insert into book value(?,?,?)",[bookid,bookname,price],(error,result) =>{
		if(error){
			console.log("not inserted");
		}
		else{
			console.log(result);
			output.status=true;
		}
		resp.send(result);
	});
});
app.get('/viewall',(req,resp) =>{
let output =(status:false)
connection.query("select * from book",[],(error,result) =>{
	if(error){
		console.log("nothing to show");
	}
	else{
		console.log(result);
		output.status=true;
	}
	resp.send(result);
});
});

app.listen(8081,  () => {
    console.log("server listening at port 8081...");
});