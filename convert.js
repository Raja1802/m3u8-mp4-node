var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();

(async function () {
  await converter
    .setInputFile(
      "https://v.vrv.co/evs3/74d3ae3a44faae13f9bb75337644be76/assets/f7c7da9e8d2147b775d73ee8d14dfc3e_,4849348.mp4,4849357.mp4,4849339.mp4,4849321.mp4,4849330.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzLzc0ZDNhZTNhNDRmYWFlMTNmOWJiNzUzMzc2NDRiZTc2L2Fzc2V0cy9mN2M3ZGE5ZThkMjE0N2I3NzVkNzNlZThkMTRkZmMzZV8sNDg0OTM0OC5tcDQsNDg0OTM1Ny5tcDQsNDg0OTMzOS5tcDQsNDg0OTMyMS5tcDQsNDg0OTMzMC5tcDQsLnVybHNldC9tYXN0ZXIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3MDc2NDY3NH19fV19&Signature=eKikZ0RQRKJpeIxHKxe64cw~rUiazNe6N7xKG3pk0q1w~tzsTxqkyzaIH6Irx6SlCKNcj57KjcLmUooH5PTQFE~G1cnQdKj-JH5d13CrLjrSar-rh~o9DyxgzZlVt8D8atZq3PCvnP77Tz-5Uam8HcfgBlms9vaXwPXOa9ur~cKsLInXWAx81cYISoO6EZRrw7jxHf6Pntz9YK6R-ELhxUkcCNYCCp-yxd-1dQj6-YizJAhxlgMlkQ5YNvha9YFpdwtmmkD4Zl3rC9MBr4raUhMVNy4B4I7Ah0B26EKk1ROaiBXi6X0L1Vc8JLyQI3VGwcMSMw7v~LrKL87r-N4oMQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA"
    )
    .setOutputFile("./output/outt.m3u8")
    .start();

  console.log("File converted");
})();
