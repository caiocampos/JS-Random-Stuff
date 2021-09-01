const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://teste:teste@cluster0-qurqp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	console.log("Connected to MongoDB!");
	const collections = []
	collections['poi'] = client.db("xy1").collection("poi");
	/*
	var poi = {
		name: 'teste',
		loc: {
			type: "Point",
			coordinates: [ 40, 5 ]
		}
	}

	collections['poi'].insertOne(poi, function(err, res) {
	if (err) throw err;
	console.log("1 document inserted");
	db.close();
	});
	*/

	collections['poi'].find({ loc: { $near: [ 0, 0 ], $maxDistance: 50} }).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
	});

	// perform actions on the collection object
	client.close();
});