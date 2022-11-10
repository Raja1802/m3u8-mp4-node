var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();

(async function () {
  await converter
    .setInputFile(
      "https://v.vrv.co/evs3/1b7601d603f0b5b786d56132f116402e/assets/8ff8b3e2af27da90c30f74d69c040eab_,4544866.mp4,4544870.mp4,4544862.mp4,4544854.mp4,4544858.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzLzFiNzYwMWQ2MDNmMGI1Yjc4NmQ1NjEzMmYxMTY0MDJlL2Fzc2V0cy84ZmY4YjNlMmFmMjdkYTkwYzMwZjc0ZDY5YzA0MGVhYl8sNDU0NDg2Ni5tcDQsNDU0NDg3MC5tcDQsNDU0NDg2Mi5tcDQsNDU0NDg1NC5tcDQsNDU0NDg1OC5tcDQsLnVybHNldC9tYXN0ZXIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY2ODEyMTE2NX19fV19&Signature=QHZUaX3oqUp~8-mjWpRJ0QsbhjdmEryj7-kUFFwtvccRa8OgHGYjQ592BLKqVuQQLNJOjM0li-uimGKrF5j4XqkAq5ZcBUMAxTcFJplQTbdKhQLG~ATZxe7~eQaz9dqcmNh3owpIzc3IA3p3DaUiITRBTQcRZsHbVdjiJpTX5BgSG5Ro7WZS9LfmhEnLDRyTfbB9Ykv2qXZlVzB7Ak~0clh13YYibdX0vxDzkU~MxhTFj7pN7ZF048ocRIR6D~i88c~U~SnjSTRRhssaEv~LzQ1KoEj2JQWYaVITz~XszMGxhxZiEZZhgSxXa4B2uFTAfjzoFL7Y-dgrAdSr~~lFlw__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA"
    )
    .setOutputFile("./output/dummy.mp4")
    .start();

  console.log("File converted");
})();
