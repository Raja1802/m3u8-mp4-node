const fs = require("fs");

var folder = "./output/";

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  for (const dolder of files) {
    console.log(dolder + " : File Deleted Successfully.");
    //   fs.unlinkSync(folder+file);
    fs.rmSync(folder + dolder, { recursive: true, force: true });
  }
});
