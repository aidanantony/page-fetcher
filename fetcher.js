const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

const download = function(url, localPath) {
  const request = require('request');
  request(url,(error, response, body) => {
    if (error) {
      console.log('We have an error');
      return;
    }
    const content = body;

    fs.writeFile(localPath, content, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} to ${localPath}`);
    });
  });
};
download(url,localPath);
