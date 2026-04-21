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
      enum: ["pdf", "doc", "docx"],
      required: true,
    },

    fileSize: {
      type: Number, // in bytes
    },

    // extracted content (for AI processing)
    parsedText: {
      type: String,
    },

    // extracted skills (optional preprocessing)
    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    // versioning (important if user uploads multiple versions)
    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model('resume',resumeSchema);

module.exports = resumeModel;
