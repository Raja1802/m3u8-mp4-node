import { MongoClient } from "mongodb";

var url =
  "mongodb://ajar:Raja@1802@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority";
// const client = new MongoClient(url);

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("animixplay");
  dbo
    .collection("animixplay")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
