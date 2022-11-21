const axios = require("axios");

async function getData(foldName) {
  try {
    const resp = await axios.get(
      `https://ani022.herokuapp.com/api/animetracker/?search=${foldName}`
    );
    return resp.data.count;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}
var cons = getData("cW9TVRVNU9UVXpMVFhzM0dyVTh3ZTlPVFZSVk5VOVVWWG89");
var oio = 0;
cons.then((res) => (oio = res));
console.log(oio);
