const axios = require("axios").default;
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
// import * as converter from "m3u8-to-mp4";
var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;

function sleep(ms) {
  console.log("waiting...");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function down(uri, name) {
  const folderName = `./output/${name}`;
  fs.mkdirSync(folderName);
  await converter
    .setInputFile(uri)
    .setOutputFile(`${folderName}/${name}.mp4`)
    .start();
  console.log("File converted");
}
// down();
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("animixplay");
  dbo
    .collection("uriname")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      for (let i = 0; i < 1; i++) {
        // console.log(scores[i]);
        // }
        //   result.forEach((element) => {
        // console.log(element);
        if (result[i].uri !== null && result[i].uri !== undefined) {
          //   try {
          down(result[i].uri, result[i].name);
          // console.log(result[i].uri);
          //   } catch (error) {
          //     console.log("gone");
          //   }
        }
        //   });
      }
      db.close();
    });
});
