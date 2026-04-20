const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["applied", "interview", "offer", "rejected"],
      default: "applied",
    },
    jobLink: {
      type: String,
      trim: true,
    },
    platform: {
      type: String,
      trim: true,
    },
    skillsRequired: [
      {
        type: String,
        trim: true,
      },
    ],
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      default: null,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    appliedat: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const jobApplicationModel = mongoose.model("JobApplication",jobApplicationSchema)

exports.module = jobApplicationModel;