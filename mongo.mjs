import { MongoClient } from "mongodb";
const pass = encodeURIComponent("Raja@1802");
var url = `mongodb://ajar:${pass}@cluster0-shard-00-00.jomxs.mongodb.net:27017,cluster0-shard-00-01.jomxs.mongodb.net:27017,cluster0-shard-00-02.jomxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-nv3wvh-shard-0&authSource=admin&retryWrites=true&w=majority`;

async function findOne() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("animixplay");

    let collection = db.collection("uriname");

    // let query = { name: "Volkswagen" };

    let res = await collection.find({});
    // res.forEach((element) => {
    //   if (element.uri !== undefined) {
    //     console.log(element.uri);
    //   }
    // });
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

await findOne();
