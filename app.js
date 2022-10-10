const express = require('express');
const Datastore = require('nedb');
const axios = require('axios');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening at port ${port}`));

app.use(express.static("vote"));
app.use(express.json({limit : '10mb'}));

const db = new Datastore('database.db');
db.loadDatabase();



app.post('/send', async (req,res) => {
    console.log("approve");
	console.log(req.body);
	
	let data = req.body;
	
	axios.post('https://discord.com/api/webhooks/1029077387964588172/6lqA-Q4UY4vqhg0gObtCcJuCzxXtIIwxaNS3e9AwReJxMA5FBRMr67vBzvXKcfmFymKt', data=data);
	db.insert(req.body);
	res.status(200);
});


app.get('/bd', (request, response) => {
	console.log("bd request");
	db.find({}, (err, data) => {
	  if (err) {
		response.end();
		return;
	  }
	  response.send(data);
	});
  });