const express = require('express');
const Datastore = require('nedb');

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