var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();

(async function () {
  await converter
    .setInputFile(
      "https://www18.gogoplay.in/www03/mkTLGVmG2mQbLMDxD7jh1w/1668142823/fafea70fdd42abc716b6880ec28fb2e5/ep.1.1605628859.m3u8"
    )
    .setOutputFile("dummy.mp4")
    .start();

  console.log("File converted");
})();
