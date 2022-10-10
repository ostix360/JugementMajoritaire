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

const axiosClient = axios.create({baseURL: 'https://discord.com', timeout: 20000});

app.post('/send', async (req,res) => {
    console.log("approve");
	let data = {content:JSON.stringify(req.body)};
	
	axiosClient.post('/api/webhooks/1029077387964588172/6lqA-Q4UY4vqhg0gObtCcJuCzxXtIIwxaNS3e9AwReJxMA5FBRMr67vBzvXKcfmFymKt', data=data);
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