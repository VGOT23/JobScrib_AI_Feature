const { ImageKit } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function uploadResumetoCld(file) {
  try {
    const response = await client.files.upload({
      file: file.buffer.toString("base64"),
      fileName: 'resume' + Date.now(),
      folder : 'JobSrib-resume'
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = {uploadResumetoCld};

