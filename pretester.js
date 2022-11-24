const axios = require("axios");
async function convertData(rurl) {
  var asse = rurl.split("#");
  var buf = new Buffer.from(asse[1], "base64").toString("utf-8"); // Ta-da
  console.log(buf);
}
async function getData(foldName) {
  try {
    const resp = await axios.get(`https://animixplay.to/api/${foldName}`);
    return resp.request.res.responseUrl;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}
var cons = getData("cW9TVRVNU9UVXpMVFhzM0dyVTh3ZTlPVFZSVk5VOVVWWG89");
// var oio = 0;
cons.then((res) => convertData(res));
// console.log(oio);
