import { NFTStorage } from "nft.storage";
import { filesFromPath } from "files-from-path";
import path from "path";
import * as fs from "fs";
import axios from "axios";
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

function sendData(CID, folder) {
  console.log("sending data...");
  const newPost = {
    CID: CID,
    folder: folder,
  };

  try {
    const resp = axios
      .post("https://ani02.herokuapp.com/api/animetracker/", newPost)
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
  if (cid !== undefined) {
    await sendData(cid, folder);
  }
  console.log({ cid });
  const status = await storage.status(cid);
  // await sleep(20000);
  console.log(status);
}

async function main() {
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
    const folderString = "output/" + arr[arr.length - 2];
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
main();
