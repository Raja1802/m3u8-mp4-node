import { MongoClient } from "mongodb";
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;
// const client = new MongoClient(url);

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("animixplay");
  dbo
    .collection("uriname")
    .find({})
    .toArray(async function (err, result) {
      if (err) throw err;

      // return result;
      result.forEach((element) => {
        if (element.uri !== undefined) {
          console.log(element.uri);
        }
      });
      db.close();
      // console.log(result);
    });
});
