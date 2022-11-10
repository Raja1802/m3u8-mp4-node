const fs = require("fs");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: "AKIAUJMZRGOBCRUSHHQP",
  secretAccessKey: "75P6sCv7gladElhqDF8Fk91eqfoXP/FQH099NuVT",
});
const fileName = "dummy.mp4";

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    const params = {
      Bucket: "shopinsta-media", // pass your bucket name
      Key: "dummy.mp4", // file will be saved as testBucket/contacts.csv
      //   Body: JSON.stringify(data, null, 2),
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      console.log(`File uploaded successfully at ${data.Location}`);
    });
  });
};

uploadFile();
