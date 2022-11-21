const axios = require("axios");
const filesFromPath = require("files-from-path").filesFromPath;
const NFTStorage = require("nft.storage").NFTStorage;
var path = require("path");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
// import * as converter from "m3u8-to-mp4";
var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;

var fol = "output3";
var x = 120000;
var y = 86000;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJhNWQzZTU2OTlDRTllZDYwMUZhRkUwYzhiZmI1MzJCYjRFYWI5OTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NTQyNTUzNDk0OCwibmFtZSI6InNkc2QifQ.3wabmCtAPSt4_6vNdD0NCLMeZIHvMthxfs9gETb5mq4";

const directoryPath = process.argv[2];

function deleter(folde) {
  console.log("deleting");
  fs.rmSync(folde, { recursive: true, force: true });
}

function sleep(ms) {
  console.log("waiting...");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendData(CID, folder) {
  console.log("sending data...");
  const newPost = {
    CID: CID,
    folder: folder,
  };

  try {
    const resp = axios
      .post("https://ani022.herokuapp.com/api/animetracker/", newPost)
      .then((res) => {
        console.log(res.data);
        if (res.data.id !== undefined) {
          deleter(folder);
        }
      });
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}

const storage = new NFTStorage({ token });

// function checkStatus(cid) {
//   const status = storage.status(cid);
//   console.log(status);
// }
// checkStatus("bafybeieq6wx4bn65dqwntgxn76yhgjyjueh4wcshsnvfz4cs267lg5jlje");

async function upload(folder) {
  console.log("uploading...");
  const files = filesFromPath(folder, {
    pathPrefix: path.resolve(folder),
    hidden: true,
  });
  const cid = await storage.storeDirectory(files);
  console.log("storef");
  if (cid !== undefined) {
    await sendData(cid, folder);
  }
  console.log({ cid });
  const status = await storage.status(cid);
  // await sleep(20000);
  console.log(status);
}

async function main() {
  console.log("triggred");
  // you'll probably want more sophisticated argument parsing in a real app
  if (process.argv.length !== 3) {
    console.error(
      `usage: ${process.argv[0]} ${process.argv[1]} <directory-path>`
    );
  }

  // console.log(`storing file(s) from ${path}`);

  for await (const f of filesFromPath(directoryPath)) {
    console.log(f);
    const arr = f.name.split("/");
    const fileString = arr[arr.length - 1];
    console.log(arr[arr.length - 2]);
    console.log(fileString.endsWith(".mp4"));
    const folderString = `${fol}/` + arr[arr.length - 2];
    // try {
    if (
      fileString !== undefined &&
      fileString.endsWith(".mp4") &&
      folderString !== undefined
    ) {
      await upload(folderString);
    } else if (
      fileString !== undefined &&
      fileString.endsWith(".part") &&
      folderString !== undefined
    ) {
      // await sleep(20000);
      // main();
      // deleter(folderString);
    } else if (fileString === undefined && folderString !== undefined) {
      // await sleep(20000);
      // main();
      // deleter(folderString);
    }
    // } catch {
    //   // deleter(folderString);

    // } finally {
    //   await sleep(2);
    // }
  }
  // main();
}
async function down(uri, name) {
  console.log("download trired");
  const folderName = `./${fol}/${name}`;
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  await converter
    .setInputFile(uri)
    .setOutputFile(`${folderName}/${name}.mp4`)
    .start();
  console.log("File converted");
  await main();
}

async function getData(uri, foldName) {
  console.log("getdata triggred");
  try {
    const resp = await axios.get(
      `https://ani022.herokuapp.com/api/animetracker/?search=${foldName}`
    );
    // return resp.data.count;
    if (resp.data.count == 0) {
      await down(uri, foldName);
    }
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}
// down();
MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  var dbo = db.db("animixplay");
  dbo
    .collection("uriname")
    .find({})
    .toArray(async function (err, result) {
      if (err) throw err;
      for (let i = x; i > y; i--) {
        // console.log(scores[i]);
        // }
        //   result.forEach((element) => {
        // console.log(element);

        if (result[i].uri !== null && result[i].uri !== undefined) {
          try {
            console.log(result[i].uri);
            await getData(result[i].uri, result[i].name);
            // await down(result[i].uri, result[i].name);
          } catch (error) {
            if (error) {
              console.log("error");
            }
          }
        }

        //   });
      }
      db.close();
    });
});

process.on("uncaughtException", function (exception) {
  // handle or ignore error
});
