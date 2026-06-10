const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    fileUrl: {
      type: String,
      required: true, // stored in cloud (S3 / Cloudinary)
    },

    originalFileName: {
      type: String,
      required: true,
      trim: true,
    },

    fileType: {
      type: String,
      // enum: ["pdf", "doc", "docx"],
      required: true,
    },

    fileSize: {
      type: Number, // in bytes
    },
  },
  
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model('resume',resumeSchema);

module.exports = resumeModel;
