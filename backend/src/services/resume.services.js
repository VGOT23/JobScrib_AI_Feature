const { ImageKit } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function uploadResume(file) {
  try {
    const response = await client.files.upload({
      file,
      fileName: 'resume' + Date.now(),
      folder : 'JobSrib-resume'
    });
    console.log(response);
  } catch (error) {
    return;
  }
}

module.exports = {uploadResume};

