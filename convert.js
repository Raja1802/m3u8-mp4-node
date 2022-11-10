var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();

(async function () {
  await converter
    .setInputFile(
      "https://v.vrv.co/evs3/19c8173409551d4479cc25d8af25e9bc/assets/4ca33ee9e8f0974c2be7798bc6483d63_,3898897.mp4,3898898.mp4,3898896.mp4,3898895.mp4,3898894.mp4,.urlset/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly92LnZydi5jby9ldnMzLzE5YzgxNzM0MDk1NTFkNDQ3OWNjMjVkOGFmMjVlOWJjL2Fzc2V0cy80Y2EzM2VlOWU4ZjA5NzRjMmJlNzc5OGJjNjQ4M2Q2M18sMzg5ODg5Ny5tcDQsMzg5ODg5OC5tcDQsMzg5ODg5Ni5tcDQsMzg5ODg5NS5tcDQsMzg5ODg5NC5tcDQsLnVybHNldC9tYXN0ZXIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY2ODI0Mjc3Nn19fV19&Signature=cMB3dJ9gAgwrutiOF7Z2QuvS5GfrGWz1h5kbsQ8Vlg7gl6SNR8O40kv1TgGWDi0y3JlIDjFBEnyX~RwxRnLacB1UGTzVWKDifcoB-w31k31ZMPFHSx4AR7WAl1WQaVpbuNh~0BAjZ9J0okmdtYEsCiFHEarCk2GDtbiJx9puGc3eJbdgKTq9KStr2NOTJnN4mEY1Bt5o7YX1EI4cpd6tCGEjUWKTDnZvett-g1vXm1tKVmDjLLCHdO~8b1pp8jInxY9tx8IC8wy4iZB10g9V9ndtrL9JFS5GIUBIzbFUPVohJkprzC4V3Z7SF9Km85XNnmZtzlx12X3Gz-4Q~ZUMrQ__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA"
    )
    .setOutputFile("dummy.mp4")
    .start();

  console.log("File converted");
})();
