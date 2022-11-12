import axios from "axios";
import { MongoClient } from "mongodb";
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;

function baseConvert(sttr) {
  var b64string = sttr;
  console.log(sttr);
  var buf = Buffer.from(b64string, "base64").toString("utf-8");
  console.log(buf);
}

function splitter(str) {
  if (!str.endsWith(".mp4")) {
    var lista = str.split("#");
    baseConvert(lista[1]);
  }
}
function axio(id) {
  var uri = `https://animixplay.to${id}`;
  axios.get(uri).then((resp) => {
    var str = resp.request.res.responseUrl;
    splitter(str);
  });
}
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
