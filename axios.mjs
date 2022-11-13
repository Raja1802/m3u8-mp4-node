import axios from "axios";
import { MongoClient } from "mongodb";
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;

function sleep(ms) {
  console.log("waiting...");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function baseConvert(sttr) {
  var b64string = sttr;
  //   console.log(sttr);
  var buf = Buffer.from(b64string, "base64").toString("utf-8");
  return buf;
  //   console.log(buf);
}

function splitter(str) {
  console.log(str);
  if (!str.endsWith(".mp4")) {
    var lista = str.split("#");
    // baseConvert(lista[1]);
    return lista[1];
  }
}
function axio(id) {
  var uri = `https://animixplay.to${id}`;
  //   console.log(id);

  //   try {
  axios.get(uri).then((resp) => {
    var str = resp.request.res.responseUrl;
    // splitter(str);
    return str;
  });
  setTimeout(axio, 30000);
  //   } catch (error) {
  //     console.log("leg in ditch");
  //   }
}
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("animixplay");
  dbo
    .collection("animixplay")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      for (let i = 0; i < 5; i++) {
        // console.log(scores[i]);
        // }
        //   result.forEach((element) => {
        // console.log(element);
        if (
          result[i].player_url !== null &&
          result[i].player_url !== undefined &&
          result[i].player_url !== "about:blank" &&
          !result[i].player_url.startsWith("https://") &&
          result[i].player_url !== "undefined"
        ) {
          //   try {
          console.log(i);
          var axi = axio(result[i].player_url);
          console.log(axi);
          if (axi !== undefined) {
            var spliti = splitter(axi);
            if (spliti !== undefined) {
              var basi = baseConvert(spliti);
              if (basi !== undefined) {
                console.log(basi);
              }
            }
          }

          // console.log(result.player_url);
          //   } catch (error) {
          //     console.log("gone");
          //   }
        }
        //   });
      }
      db.close();
    });
});
